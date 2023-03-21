window.BENCHMARK_DATA = {
  "lastUpdate": 1679436835970,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "51be4592473e99b20dcdb56d67c4fece40a0a1b0",
          "message": "docs: patch docs build to fix anchor links",
          "timestamp": "2023-03-21T18:04:37-04:00",
          "tree_id": "e5485d605d90702dc0cbdaa7d3f4bfb3a89ca58d",
          "url": "https://github.com/ibis-project/ibis/commit/51be4592473e99b20dcdb56d67c4fece40a0a1b0"
        },
        "date": 1679436756871,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.76775375152097,
            "unit": "iter/sec",
            "range": "stddev: 0.0006205177492915021",
            "extra": "mean: 8.280356046511345 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.89028531700382,
            "unit": "iter/sec",
            "range": "stddev: 0.0007335212306117946",
            "extra": "mean: 8.340959380953043 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4575.269726174596,
            "unit": "iter/sec",
            "range": "stddev: 0.00020894387223286372",
            "extra": "mean: 218.56634905678106 usec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.553960581498283,
            "unit": "iter/sec",
            "range": "stddev: 0.0007420855753496963",
            "extra": "mean: 180.0516919999874 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.28160674055864,
            "unit": "iter/sec",
            "range": "stddev: 0.003608146854675483",
            "extra": "mean: 97.26106290909021 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12045.387131562433,
            "unit": "iter/sec",
            "range": "stddev: 0.000015896929984970134",
            "extra": "mean: 83.01933255260082 usec\nrounds: 3416"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 52.45929563674871,
            "unit": "iter/sec",
            "range": "stddev: 0.0008925779833532797",
            "extra": "mean: 19.06239852941299 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.27101445321324,
            "unit": "iter/sec",
            "range": "stddev: 0.00020716421812475052",
            "extra": "mean: 3.2023465314288 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.36959930812097,
            "unit": "iter/sec",
            "range": "stddev: 0.00043673560234461077",
            "extra": "mean: 10.165742333337372 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.64323943545668,
            "unit": "iter/sec",
            "range": "stddev: 0.000721850201525506",
            "extra": "mean: 9.838332638296112 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.20679580572514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000748419575548269",
            "extra": "mean: 6.203212432837684 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5399.509628772162,
            "unit": "iter/sec",
            "range": "stddev: 0.00004878962711202554",
            "extra": "mean: 185.2020032840275 usec\nrounds: 1827"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8825988150351904,
            "unit": "iter/sec",
            "range": "stddev: 0.0031394406057380984",
            "extra": "mean: 1.133017609999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.64204520600435,
            "unit": "iter/sec",
            "range": "stddev: 0.00004129992050204072",
            "extra": "mean: 3.4406584198484067 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7027389.539181284,
            "unit": "iter/sec",
            "range": "stddev: 5.155534859433403e-9",
            "extra": "mean: 142.30035127905265 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 279.0010979490302,
            "unit": "iter/sec",
            "range": "stddev: 0.00027954544055948025",
            "extra": "mean: 3.584215285714348 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13828.251137815678,
            "unit": "iter/sec",
            "range": "stddev: 0.000001443335831719222",
            "extra": "mean: 72.31572452899209 usec\nrounds: 6262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.36177389436097,
            "unit": "iter/sec",
            "range": "stddev: 0.0002215657649607508",
            "extra": "mean: 3.340439853061804 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.09917597615904,
            "unit": "iter/sec",
            "range": "stddev: 0.025381991952664218",
            "extra": "mean: 32.155192818183046 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.95580759276153,
            "unit": "iter/sec",
            "range": "stddev: 0.0006911746782700045",
            "extra": "mean: 8.406483216216255 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 71.45085627015791,
            "unit": "iter/sec",
            "range": "stddev: 0.02928495991184081",
            "extra": "mean: 13.995633533333299 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.48792867676315,
            "unit": "iter/sec",
            "range": "stddev: 0.00016128539107845705",
            "extra": "mean: 5.115405369369316 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.52524123755163,
            "unit": "iter/sec",
            "range": "stddev: 0.00008457987693152588",
            "extra": "mean: 6.1152638726110125 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7442322564973425,
            "unit": "iter/sec",
            "range": "stddev: 0.0014171136016470128",
            "extra": "mean: 573.3181440000067 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5081.801864271754,
            "unit": "iter/sec",
            "range": "stddev: 0.00006334423864618826",
            "extra": "mean: 196.78059607766792 usec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.23634278172423,
            "unit": "iter/sec",
            "range": "stddev: 0.0005770455092814307",
            "extra": "mean: 22.605847073170327 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7830.912907555925,
            "unit": "iter/sec",
            "range": "stddev: 0.00001664018461487509",
            "extra": "mean: 127.69903225907616 usec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.10296049843983,
            "unit": "iter/sec",
            "range": "stddev: 0.014522801809194883",
            "extra": "mean: 9.794035306305153 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.09070454055397,
            "unit": "iter/sec",
            "range": "stddev: 0.00010324758029985808",
            "extra": "mean: 9.001653235846995 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.5358235867883,
            "unit": "iter/sec",
            "range": "stddev: 0.000032265880486626775",
            "extra": "mean: 1.8603411272710164 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1772.038890180333,
            "unit": "iter/sec",
            "range": "stddev: 0.000007285115004980242",
            "extra": "mean: 564.3217005797396 usec\nrounds: 344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 491359.2869711555,
            "unit": "iter/sec",
            "range": "stddev: 8.282124258818104e-8",
            "extra": "mean: 2.0351706511221463 usec\nrounds: 2133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 155.06705092270653,
            "unit": "iter/sec",
            "range": "stddev: 0.0038464741945582956",
            "extra": "mean: 6.448823228723502 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11728036.507040666,
            "unit": "iter/sec",
            "range": "stddev: 5.187293156735722e-9",
            "extra": "mean: 85.26576459745556 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5491.213446414031,
            "unit": "iter/sec",
            "range": "stddev: 0.00009145682414742386",
            "extra": "mean: 182.10911117524265 usec\nrounds: 1763"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.207509474330855,
            "unit": "iter/sec",
            "range": "stddev: 0.0384455294081932",
            "extra": "mean: 34.23777028571554 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.271439171813899,
            "unit": "iter/sec",
            "range": "stddev: 0.0013156025343072",
            "extra": "mean: 65.48171320000242 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5520.337081660131,
            "unit": "iter/sec",
            "range": "stddev: 0.00005098790114054293",
            "extra": "mean: 181.14835837149099 usec\nrounds: 1744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5748824865732547,
            "unit": "iter/sec",
            "range": "stddev: 0.0013067548645404469",
            "extra": "mean: 388.3672381999986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 283.93535922198976,
            "unit": "iter/sec",
            "range": "stddev: 0.00007493236644893965",
            "extra": "mean: 3.521928380952962 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.5907980759249,
            "unit": "iter/sec",
            "range": "stddev: 0.000026047081474940797",
            "extra": "mean: 1.465006564428912 msec\nrounds: 551"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 343.25768765968894,
            "unit": "iter/sec",
            "range": "stddev: 0.000020519658100356316",
            "extra": "mean: 2.9132632303676638 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5617.801684731298,
            "unit": "iter/sec",
            "range": "stddev: 0.000049267015940525925",
            "extra": "mean: 178.00557159536515 usec\nrounds: 1711"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.02653601213041,
            "unit": "iter/sec",
            "range": "stddev: 0.000911089413122629",
            "extra": "mean: 19.220960622226357 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6108430.028976462,
            "unit": "iter/sec",
            "range": "stddev: 1.6709951090520316e-8",
            "extra": "mean: 163.70818610570907 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.38331441685304,
            "unit": "iter/sec",
            "range": "stddev: 0.0008608701759095576",
            "extra": "mean: 9.67274076712117 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.84304921005557,
            "unit": "iter/sec",
            "range": "stddev: 0.0008154935287109645",
            "extra": "mean: 9.447951542055494 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.32107780432561,
            "unit": "iter/sec",
            "range": "stddev: 0.00014114083486077767",
            "extra": "mean: 13.276496156864221 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.79196228968611,
            "unit": "iter/sec",
            "range": "stddev: 0.0006621707364205409",
            "extra": "mean: 10.89420004819269 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5163.365255695619,
            "unit": "iter/sec",
            "range": "stddev: 0.000050440574585320795",
            "extra": "mean: 193.6721402571544 usec\nrounds: 1868"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.41987633522996,
            "unit": "iter/sec",
            "range": "stddev: 0.0002490086607652679",
            "extra": "mean: 3.221443200757144 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.17275852464326,
            "unit": "iter/sec",
            "range": "stddev: 0.0002529538969174854",
            "extra": "mean: 3.213648922037002 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1574212.0956609705,
            "unit": "iter/sec",
            "range": "stddev: 2.5853972583052517e-7",
            "extra": "mean: 635.2384172096747 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5424.5820057791725,
            "unit": "iter/sec",
            "range": "stddev: 0.00007083473273510704",
            "extra": "mean: 184.34600102544908 usec\nrounds: 1951"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16353082293643512,
            "unit": "iter/sec",
            "range": "stddev: 0.1036078205226157",
            "extra": "mean: 6.115055143999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 147.594944802412,
            "unit": "iter/sec",
            "range": "stddev: 0.00021462067871070995",
            "extra": "mean: 6.775299799994627 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.74027245015273,
            "unit": "iter/sec",
            "range": "stddev: 0.00010722188718254532",
            "extra": "mean: 8.351409091843305 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8384673478599561,
            "unit": "iter/sec",
            "range": "stddev: 0.016202749465628708",
            "extra": "mean: 1.1926522869999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12668.70359002323,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019112711159265433",
            "extra": "mean: 78.93467495660039 usec\nrounds: 5187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.78098740903864,
            "unit": "iter/sec",
            "range": "stddev: 0.000525961097440176",
            "extra": "mean: 12.693417953850991 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.840993166937917,
            "unit": "iter/sec",
            "range": "stddev: 0.00335383686412554",
            "extra": "mean: 1.1890703032000034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 61.59487421868973,
            "unit": "iter/sec",
            "range": "stddev: 0.00013858194029723128",
            "extra": "mean: 16.235117169807776 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 794631.2961768227,
            "unit": "iter/sec",
            "range": "stddev: 2.571937154831091e-7",
            "extra": "mean: 1.258445274948595 usec\nrounds: 23810"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148378.34854075228,
            "unit": "iter/sec",
            "range": "stddev: 6.051337350540216e-7",
            "extra": "mean: 6.739527766919099 usec\nrounds: 30396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73080.36476517553,
            "unit": "iter/sec",
            "range": "stddev: 5.265070506874553e-7",
            "extra": "mean: 13.68356607432429 usec\nrounds: 12675"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 303.4045363917998,
            "unit": "iter/sec",
            "range": "stddev: 0.00026448156768928675",
            "extra": "mean: 3.295929625484094 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 110.90624077852303,
            "unit": "iter/sec",
            "range": "stddev: 0.0008257200025095166",
            "extra": "mean: 9.01662515094146 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.586285572237376,
            "unit": "iter/sec",
            "range": "stddev: 0.0014234583483064525",
            "extra": "mean: 46.325709749996236 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.9553363829494,
            "unit": "iter/sec",
            "range": "stddev: 0.00002654220038087665",
            "extra": "mean: 1.35877810862106 msec\nrounds: 580"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 110.56217404542588,
            "unit": "iter/sec",
            "range": "stddev: 0.018122828189300954",
            "extra": "mean: 9.04468466393522 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1985658.7193076685,
            "unit": "iter/sec",
            "range": "stddev: 1.1280231564838036e-7",
            "extra": "mean: 503.6112148963171 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 219.13332328425426,
            "unit": "iter/sec",
            "range": "stddev: 0.004256701999566087",
            "extra": "mean: 4.5634319099100455 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 302.89083812635977,
            "unit": "iter/sec",
            "range": "stddev: 0.0002488274769957439",
            "extra": "mean: 3.3015194721169503 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2723479.872190576,
            "unit": "iter/sec",
            "range": "stddev: 1.807690898106854e-8",
            "extra": "mean: 367.1773051125661 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.69117634897334,
            "unit": "iter/sec",
            "range": "stddev: 0.0008879681251807171",
            "extra": "mean: 11.026431018515732 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.97678156872993,
            "unit": "iter/sec",
            "range": "stddev: 0.0009290533428776223",
            "extra": "mean: 9.617531769234343 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 284.1661581281952,
            "unit": "iter/sec",
            "range": "stddev: 0.00034737827946513524",
            "extra": "mean: 3.5190678812248724 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 111.80118471512098,
            "unit": "iter/sec",
            "range": "stddev: 0.0008168118768408213",
            "extra": "mean: 8.944449046296654 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5593926.251178734,
            "unit": "iter/sec",
            "range": "stddev: 1.146197251642297e-8",
            "extra": "mean: 178.76531707757374 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.3842152468112,
            "unit": "iter/sec",
            "range": "stddev: 0.0007928761760484009",
            "extra": "mean: 8.447072085709806 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1153.590478266454,
            "unit": "iter/sec",
            "range": "stddev: 0.000012427300521379112",
            "extra": "mean: 866.8587499983005 usec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.09697215973894,
            "unit": "iter/sec",
            "range": "stddev: 0.0013995445012034687",
            "extra": "mean: 31.155586733329226 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6525994358807026,
            "unit": "iter/sec",
            "range": "stddev: 0.11626015764928757",
            "extra": "mean: 1.532333534199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5264.634152938768,
            "unit": "iter/sec",
            "range": "stddev: 0.000021498192143483087",
            "extra": "mean: 189.94672202280012 usec\nrounds: 1957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 98.88919871274564,
            "unit": "iter/sec",
            "range": "stddev: 0.0008667820618094514",
            "extra": "mean: 10.112327868130576 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 116.24833154583418,
            "unit": "iter/sec",
            "range": "stddev: 0.000992099284394674",
            "extra": "mean: 8.602273999999062 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.41469475479921,
            "unit": "iter/sec",
            "range": "stddev: 0.00006984531602362369",
            "extra": "mean: 10.371862946236453 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1991888.086527463,
            "unit": "iter/sec",
            "range": "stddev: 9.186124164397651e-8",
            "extra": "mean: 502.036237258359 nsec\nrounds: 153847"
          }
        ]
      }
    ]
  }
}