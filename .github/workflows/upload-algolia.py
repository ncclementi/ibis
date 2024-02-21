from __future__ import annotations  # noqa: INP001

import json
import os
from urllib.request import urlopen

from algoliasearch.search_client import SearchClient

api_key = os.environ["ALGOLIA_API_KEY"]
app_id = os.environ["ALGOLIA_APP_ID"]
index_name = os.environ["ALGOLIA_INDEX"]
index_file = os.environ["QUARTO_INDEX_PATH"]  # search.json


def truncate_string(string, max_size):
    # Encode the string to bytes using UTF-8 encoding
    encoded_string = string.encode("utf-8")

    # Truncate the bytes to ensure the size is smaller than max_bytes
    truncated_bytes = encoded_string[: max_size - 1]

    # Decode the truncated bytes back to string
    truncated_string = truncated_bytes.decode("utf-8", errors="ignore")

    return truncated_string


def main():
    client = SearchClient.create(app_id, api_key)
    index = client.init_index(index_name)

    # Download the index generated by quarto from the ibis website
    with urlopen("https://ibis-project.org/search.json") as response:
        search = json.loads(response.read())

    # According to algolia docs, for the build plan each record (in our case this
    # is search[i]) has a limit of 10KB.
    # (see https://support.algolia.com/hc/en-us/articles/4406981897617-Is-there-a-size-limit-for-my-index-records and
    # https://www.algolia.com/doc/guides/scaling/algolia-service-limits/)
    # Every key in our record is pretty small except for the "text" one.
    # I tried truncating it to < 10_000 and even though we don't get a record
    # size error, we keep hitting a AlgoliaUnreachableHostException
    # I opened an issue because the error is unhelpful, and unclear.
    # https://github.com/algolia/algoliasearch-client-python/issues/565

    # It wasn't until I cut the "text" field to max_size=1000 that I was able to
    # get an index. My guess is we are hitting another limitation, but I was not
    # able to find anything on the docs.

    max_size = 1_000
    for obj in search:
        if len(obj["text"].encode("utf-8")) >= max_size:
            obj["text"] = truncate_string(obj["text"], max_size)
            size = len(obj["text"].encode("utf-8"))
            assert size <= max_size

    index.replace_all_objects(search)


if __name__ == "__main__":
    main()
