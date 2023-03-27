window.BENCHMARK_DATA = {
  "lastUpdate": 1679936666772,
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
          "id": "db29e10fe7fd26ef8e9024686fef38fc137546b0",
          "message": "feat(pyspark): implement count distinct",
          "timestamp": "2023-03-27T12:55:24-04:00",
          "tree_id": "1b592686a3ae0d27c63df56f081519e820541eac",
          "url": "https://github.com/ibis-project/ibis/commit/db29e10fe7fd26ef8e9024686fef38fc137546b0"
        },
        "date": 1679936578165,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 231.17705036874014,
            "unit": "iter/sec",
            "range": "stddev: 0.00737580328998",
            "extra": "mean: 4.325688896907997 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.82930265559226,
            "unit": "iter/sec",
            "range": "stddev: 0.0003386462157527533",
            "extra": "mean: 10.657651412699694 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 126.76600272173879,
            "unit": "iter/sec",
            "range": "stddev: 0.0002935616821143734",
            "extra": "mean: 7.888550388348819 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 290.4128644896322,
            "unit": "iter/sec",
            "range": "stddev: 0.0002597374894845593",
            "extra": "mean: 3.443373632078548 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 105.27850650364668,
            "unit": "iter/sec",
            "range": "stddev: 0.0007280892850908909",
            "extra": "mean: 9.498614989996668 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.96911373129313,
            "unit": "iter/sec",
            "range": "stddev: 0.0006348824881662552",
            "extra": "mean: 20.8467474634129 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11306.717689235436,
            "unit": "iter/sec",
            "range": "stddev: 0.000004820542667516133",
            "extra": "mean: 88.44299711772678 usec\nrounds: 4164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 91.5864440918557,
            "unit": "iter/sec",
            "range": "stddev: 0.0004884826501201954",
            "extra": "mean: 10.918646421047422 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15303156416500005,
            "unit": "iter/sec",
            "range": "stddev: 0.10335855520120239",
            "extra": "mean: 6.534599613199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10837531.861641856,
            "unit": "iter/sec",
            "range": "stddev: 1.369580063414919e-8",
            "extra": "mean: 92.27193172455961 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 257.2386326777444,
            "unit": "iter/sec",
            "range": "stddev: 0.00040091865815177743",
            "extra": "mean: 3.887440971017559 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.40934289417778,
            "unit": "iter/sec",
            "range": "stddev: 0.0003335977838542428",
            "extra": "mean: 11.572822642855433 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 148.176101944692,
            "unit": "iter/sec",
            "range": "stddev: 0.0003159204428825567",
            "extra": "mean: 6.748726595421296 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 668.7325058605318,
            "unit": "iter/sec",
            "range": "stddev: 0.00016218580292619428",
            "extra": "mean: 1.4953662207779024 msec\nrounds: 539"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140459.74630077562,
            "unit": "iter/sec",
            "range": "stddev: 0.00001531726906338282",
            "extra": "mean: 7.119477475479949 usec\nrounds: 23419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1580.3406076102854,
            "unit": "iter/sec",
            "range": "stddev: 0.00004557488297204573",
            "extra": "mean: 632.7749822945774 usec\nrounds: 1186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.38954406856044,
            "unit": "iter/sec",
            "range": "stddev: 0.0007037112113934317",
            "extra": "mean: 10.061420538464132 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 96.29366128215372,
            "unit": "iter/sec",
            "range": "stddev: 0.012588004173678611",
            "extra": "mean: 10.38489955294006 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5052.912350802281,
            "unit": "iter/sec",
            "range": "stddev: 0.0000619488184610091",
            "extra": "mean: 197.90566916151317 usec\nrounds: 2672"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7052.14415527202,
            "unit": "iter/sec",
            "range": "stddev: 0.00001635264138775096",
            "extra": "mean: 141.80084496038316 usec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.99121226788145,
            "unit": "iter/sec",
            "range": "stddev: 0.00029210002587881846",
            "extra": "mean: 6.711805245278708 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5736324939126443,
            "unit": "iter/sec",
            "range": "stddev: 0.009516588071345063",
            "extra": "mean: 635.4723888000194 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 687.0234487848804,
            "unit": "iter/sec",
            "range": "stddev: 0.012946840757409539",
            "extra": "mean: 1.4555543944950824 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4595.304156618468,
            "unit": "iter/sec",
            "range": "stddev: 0.00006014907702143243",
            "extra": "mean: 217.6134518886486 usec\nrounds: 2567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 259.9236778148994,
            "unit": "iter/sec",
            "range": "stddev: 0.0001818523465840043",
            "extra": "mean: 3.847283204080139 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.47267100425515,
            "unit": "iter/sec",
            "range": "stddev: 0.0003896804951851328",
            "extra": "mean: 14.820815377783623 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7516929609698725,
            "unit": "iter/sec",
            "range": "stddev: 0.017720971849477126",
            "extra": "mean: 1.330330403400012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.276284160992276,
            "unit": "iter/sec",
            "range": "stddev: 0.002522452774719134",
            "extra": "mean: 70.04623813333335 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8183901062757722,
            "unit": "iter/sec",
            "range": "stddev: 0.020943026975161167",
            "extra": "mean: 1.221911154999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 693550.6754026865,
            "unit": "iter/sec",
            "range": "stddev: 4.7351592013471846e-7",
            "extra": "mean: 1.4418557078318528 usec\nrounds: 21505"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11146.463289061157,
            "unit": "iter/sec",
            "range": "stddev: 0.00001645265495137778",
            "extra": "mean: 89.71455555605458 usec\nrounds: 4005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8090337813607059,
            "unit": "iter/sec",
            "range": "stddev: 0.034127450963495204",
            "extra": "mean: 1.2360423298000114 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 105.08799497879019,
            "unit": "iter/sec",
            "range": "stddev: 0.000694979517402315",
            "extra": "mean: 9.515834803031774 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.03161194437113,
            "unit": "iter/sec",
            "range": "stddev: 0.000870386919195503",
            "extra": "mean: 23.791616684211416 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 109.18898499866215,
            "unit": "iter/sec",
            "range": "stddev: 0.00030490446399744316",
            "extra": "mean: 9.158432968419412 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 299.72894984828224,
            "unit": "iter/sec",
            "range": "stddev: 0.00028581723349600314",
            "extra": "mean: 3.33634772519032 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1536804.6007715405,
            "unit": "iter/sec",
            "range": "stddev: 3.5246209766900145e-7",
            "extra": "mean: 650.7008109540783 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 103.75778010666272,
            "unit": "iter/sec",
            "range": "stddev: 0.0007601160421922378",
            "extra": "mean: 9.637831485716085 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6360778.083561194,
            "unit": "iter/sec",
            "range": "stddev: 2.081276553554319e-8",
            "extra": "mean: 157.2134708778208 nsec\nrounds: 61725"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 110.4910576891729,
            "unit": "iter/sec",
            "range": "stddev: 0.0007314306563344593",
            "extra": "mean: 9.05050617592188 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 459005.6542906872,
            "unit": "iter/sec",
            "range": "stddev: 8.305904453928883e-7",
            "extra": "mean: 2.1786223996419496 usec\nrounds: 2259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.465567763528,
            "unit": "iter/sec",
            "range": "stddev: 0.000278968368326217",
            "extra": "mean: 11.700618461540776 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 299.20747453915453,
            "unit": "iter/sec",
            "range": "stddev: 0.0002851847076187757",
            "extra": "mean: 3.3421624962418486 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 283.1285411843768,
            "unit": "iter/sec",
            "range": "stddev: 0.0002869198404133422",
            "extra": "mean: 3.531964653993635 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4744.121963658002,
            "unit": "iter/sec",
            "range": "stddev: 0.0000628331569388937",
            "extra": "mean: 210.78716096686102 usec\nrounds: 2895"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 107.6879688707578,
            "unit": "iter/sec",
            "range": "stddev: 0.000789721490153928",
            "extra": "mean: 9.286088413461995 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12577.318703739233,
            "unit": "iter/sec",
            "range": "stddev: 0.000006232520718844724",
            "extra": "mean: 79.50820230886733 usec\nrounds: 6322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.24730946860394,
            "unit": "iter/sec",
            "range": "stddev: 0.0007944393614024919",
            "extra": "mean: 10.178395779067735 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4636.288877716307,
            "unit": "iter/sec",
            "range": "stddev: 0.00007120377422813611",
            "extra": "mean: 215.68975238069487 usec\nrounds: 2835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.9633473220672615,
            "unit": "iter/sec",
            "range": "stddev: 0.0033067664880543756",
            "extra": "mean: 201.47693383333376 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 101.10294836402082,
            "unit": "iter/sec",
            "range": "stddev: 0.0003757872534077059",
            "extra": "mean: 9.890908387750507 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 111.53348071459608,
            "unit": "iter/sec",
            "range": "stddev: 0.0007634772389909245",
            "extra": "mean: 8.965917620368256 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.11900360619744,
            "unit": "iter/sec",
            "range": "stddev: 0.0008807156156222915",
            "extra": "mean: 12.030943064931531 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 108.1404992536369,
            "unit": "iter/sec",
            "range": "stddev: 0.0008397965587047206",
            "extra": "mean: 9.247229362743752 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 59.024575494048264,
            "unit": "iter/sec",
            "range": "stddev: 0.0007771564771869046",
            "extra": "mean: 16.942095586961653 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.15839057709416,
            "unit": "iter/sec",
            "range": "stddev: 0.0009828748641451776",
            "extra": "mean: 17.495244178564104 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.02404860639325,
            "unit": "iter/sec",
            "range": "stddev: 0.0007741411018568096",
            "extra": "mean: 11.108142940474051 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 187.5170846453924,
            "unit": "iter/sec",
            "range": "stddev: 0.004317983426809024",
            "extra": "mean: 5.332847414362633 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 180.99315726342752,
            "unit": "iter/sec",
            "range": "stddev: 0.00016238889878600652",
            "extra": "mean: 5.525070754716679 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.03198670945648,
            "unit": "iter/sec",
            "range": "stddev: 0.0008243778980270958",
            "extra": "mean: 11.107163537633737 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4955.120825775718,
            "unit": "iter/sec",
            "range": "stddev: 0.00007270873845845395",
            "extra": "mean: 201.81142602984886 usec\nrounds: 1967"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1696639.47046272,
            "unit": "iter/sec",
            "range": "stddev: 2.9693655989737616e-7",
            "extra": "mean: 589.4004102870911 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 40.389286995962166,
            "unit": "iter/sec",
            "range": "stddev: 0.0010699789591813618",
            "extra": "mean: 24.75904068571383 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5425472.337860816,
            "unit": "iter/sec",
            "range": "stddev: 3.3185747770312116e-8",
            "extra": "mean: 184.31574943655932 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 63663.177914656204,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016497256099072929",
            "extra": "mean: 15.707667018139619 usec\nrounds: 10439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.057436826049164,
            "unit": "iter/sec",
            "range": "stddev: 0.06116049848890489",
            "extra": "mean: 124.10894700000199 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.63245695722547,
            "unit": "iter/sec",
            "range": "stddev: 0.0007851790828985345",
            "extra": "mean: 10.242495489364956 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 282.9367367988235,
            "unit": "iter/sec",
            "range": "stddev: 0.00030704085079039675",
            "extra": "mean: 3.5343589924521885 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2994211049628124,
            "unit": "iter/sec",
            "range": "stddev: 0.009822157940629772",
            "extra": "mean: 434.8920681999971 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1599949.5113880907,
            "unit": "iter/sec",
            "range": "stddev: 3.1328077246473744e-7",
            "extra": "mean: 625.0197227363856 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1562632.719928045,
            "unit": "iter/sec",
            "range": "stddev: 3.6529584144412433e-7",
            "extra": "mean: 639.9456425346369 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.65090681416254,
            "unit": "iter/sec",
            "range": "stddev: 0.0014673048123465945",
            "extra": "mean: 25.872614187504084 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 273.094889525913,
            "unit": "iter/sec",
            "range": "stddev: 0.00038893012823094",
            "extra": "mean: 3.6617309160782137 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4924.026781730199,
            "unit": "iter/sec",
            "range": "stddev: 0.00006061096536569552",
            "extra": "mean: 203.08581661463285 usec\nrounds: 3190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.56791436718117,
            "unit": "iter/sec",
            "range": "stddev: 0.00026247508244226793",
            "extra": "mean: 6.917164188037932 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1093.516144062466,
            "unit": "iter/sec",
            "range": "stddev: 0.00007530844146741588",
            "extra": "mean: 914.4812405649092 usec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.83482757231232,
            "unit": "iter/sec",
            "range": "stddev: 0.0009472539745623403",
            "extra": "mean: 43.79275459090918 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 262.08739982527067,
            "unit": "iter/sec",
            "range": "stddev: 0.00017596779504027511",
            "extra": "mean: 3.815521084442379 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 626.6194681537402,
            "unit": "iter/sec",
            "range": "stddev: 0.00010830936002991744",
            "extra": "mean: 1.5958648762483891 msec\nrounds: 501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5038.064863690974,
            "unit": "iter/sec",
            "range": "stddev: 0.00002827321546719942",
            "extra": "mean: 198.48890934432762 usec\nrounds: 2151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 146.948760599948,
            "unit": "iter/sec",
            "range": "stddev: 0.004144646688744741",
            "extra": "mean: 6.805093121692881 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4648.705274227009,
            "unit": "iter/sec",
            "range": "stddev: 0.000060584797158377876",
            "extra": "mean: 215.1136587522815 usec\nrounds: 1937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6191977419243346,
            "unit": "iter/sec",
            "range": "stddev: 0.028026920841779948",
            "extra": "mean: 1.6149929696000072 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 95.68243419774006,
            "unit": "iter/sec",
            "range": "stddev: 0.0008250985839322539",
            "extra": "mean: 10.451239126435384 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 484.41449938016723,
            "unit": "iter/sec",
            "range": "stddev: 0.0001080297155988192",
            "extra": "mean: 2.064347787441438 msec\nrounds: 414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 312.39092990181285,
            "unit": "iter/sec",
            "range": "stddev: 0.00010492643681017878",
            "extra": "mean: 3.20111726775905 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4809532.23562477,
            "unit": "iter/sec",
            "range": "stddev: 4.169911009358709e-8",
            "extra": "mean: 207.9204278104941 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.61016828062649,
            "unit": "iter/sec",
            "range": "stddev: 0.001118222786038546",
            "extra": "mean: 25.24604270588531 msec\nrounds: 34"
          }
        ]
      }
    ]
  }
}