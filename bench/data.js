window.BENCHMARK_DATA = {
  "lastUpdate": 1680703855638,
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
          "id": "4a0ff1fc8c545e25ba22fa3fa950f4d2579956bd",
          "message": "ci(pyspark): fix numpy 1.24 ci",
          "timestamp": "2023-04-05T10:04:19-04:00",
          "tree_id": "c9c6c7b8cd2090fda409ef73ab3635c723892f63",
          "url": "https://github.com/ibis-project/ibis/commit/4a0ff1fc8c545e25ba22fa3fa950f4d2579956bd"
        },
        "date": 1680703759820,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 919.0816066550939,
            "unit": "iter/sec",
            "range": "stddev: 0.0051346558533768615",
            "extra": "mean: 1.0880426642846228 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4959733073863602,
            "unit": "iter/sec",
            "range": "stddev: 0.02706725932939231",
            "extra": "mean: 2.016237537599994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 142.6091873982958,
            "unit": "iter/sec",
            "range": "stddev: 0.00030186259537060727",
            "extra": "mean: 7.012170942444834 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3948578.165537085,
            "unit": "iter/sec",
            "range": "stddev: 4.0859826922245273e-7",
            "extra": "mean: 253.25571840752465 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5213318223502216,
            "unit": "iter/sec",
            "range": "stddev: 0.012634258768301411",
            "extra": "mean: 1.9181641272000036 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4423962.994622534,
            "unit": "iter/sec",
            "range": "stddev: 7.838830803045302e-7",
            "extra": "mean: 226.04167376973032 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 71.94662390543968,
            "unit": "iter/sec",
            "range": "stddev: 0.0008721792840303916",
            "extra": "mean: 13.899192842103503 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 71.41939201987985,
            "unit": "iter/sec",
            "range": "stddev: 0.0014808773160686804",
            "extra": "mean: 14.001799395346943 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 183.2977257134313,
            "unit": "iter/sec",
            "range": "stddev: 0.0007041007428787189",
            "extra": "mean: 5.455605060607275 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1510.4887219393559,
            "unit": "iter/sec",
            "range": "stddev: 0.00016062276873909085",
            "extra": "mean: 662.0373826532607 usec\nrounds: 980"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.87993467589417,
            "unit": "iter/sec",
            "range": "stddev: 0.0007799136853817491",
            "extra": "mean: 17.89551125641144 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1464.8552783255614,
            "unit": "iter/sec",
            "range": "stddev: 0.00018018363364173372",
            "extra": "mean: 682.6612941198358 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9375475.498765513,
            "unit": "iter/sec",
            "range": "stddev: 8.86517604545593e-8",
            "extra": "mean: 106.6612568217971 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 87.5173380051235,
            "unit": "iter/sec",
            "range": "stddev: 0.00031209216364495537",
            "extra": "mean: 11.426307321429922 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 193.67809547704206,
            "unit": "iter/sec",
            "range": "stddev: 0.0008190503003612985",
            "extra": "mean: 5.163206492385902 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5361437339921629,
            "unit": "iter/sec",
            "range": "stddev: 0.009500777549140606",
            "extra": "mean: 1.8651714765999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5229607041937233,
            "unit": "iter/sec",
            "range": "stddev: 0.0867562416763998",
            "extra": "mean: 1.9121895622000011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57740.0194253175,
            "unit": "iter/sec",
            "range": "stddev: 0.00001496020333464711",
            "extra": "mean: 17.319010453285816 usec\nrounds: 13106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 128.27112161992252,
            "unit": "iter/sec",
            "range": "stddev: 0.0004970128121163562",
            "extra": "mean: 7.795987026316641 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1314.7202255648049,
            "unit": "iter/sec",
            "range": "stddev: 0.00010637619515544989",
            "extra": "mean: 760.6180999994879 usec\nrounds: 1080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8702.606876479806,
            "unit": "iter/sec",
            "range": "stddev: 0.00003618323622255469",
            "extra": "mean: 114.90809756127913 usec\nrounds: 5084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 514.5453527227214,
            "unit": "iter/sec",
            "range": "stddev: 0.00022461098769713042",
            "extra": "mean: 1.943463282115932 msec\nrounds: 397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 589.2088751356636,
            "unit": "iter/sec",
            "range": "stddev: 0.00021483734555701394",
            "extra": "mean: 1.6971909999993686 msec\nrounds: 599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 248.97317918081617,
            "unit": "iter/sec",
            "range": "stddev: 0.0005414994687217865",
            "extra": "mean: 4.0164968905094485 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6317.984676157398,
            "unit": "iter/sec",
            "range": "stddev: 0.00004274812179319336",
            "extra": "mean: 158.2783199480947 usec\nrounds: 1544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.900444626694536,
            "unit": "iter/sec",
            "range": "stddev: 0.005536463458181417",
            "extra": "mean: 526.1926530000039 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 211.81867907608003,
            "unit": "iter/sec",
            "range": "stddev: 0.00034369300610495693",
            "extra": "mean: 4.721018959998446 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 74.01093781006514,
            "unit": "iter/sec",
            "range": "stddev: 0.0010691828760490338",
            "extra": "mean: 13.511516399998982 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.489755248289367,
            "unit": "iter/sec",
            "range": "stddev: 0.004552470720383468",
            "extra": "mean: 133.51571137500073 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 182.9822318763274,
            "unit": "iter/sec",
            "range": "stddev: 0.001261590950210302",
            "extra": "mean: 5.465011491803598 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 64.16552196710737,
            "unit": "iter/sec",
            "range": "stddev: 0.001065032293136067",
            "extra": "mean: 15.584693607146553 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 69.4646328528793,
            "unit": "iter/sec",
            "range": "stddev: 0.001559419692055844",
            "extra": "mean: 14.39581494827623 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 122.61963709830192,
            "unit": "iter/sec",
            "range": "stddev: 0.00037027764020447035",
            "extra": "mean: 8.155300600003557 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 237.2538031145396,
            "unit": "iter/sec",
            "range": "stddev: 0.00019321777921655595",
            "extra": "mean: 4.214895554349565 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 102.16702215293856,
            "unit": "iter/sec",
            "range": "stddev: 0.015604497259949793",
            "extra": "mean: 9.787894165135338 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 132.56736683449716,
            "unit": "iter/sec",
            "range": "stddev: 0.004624494199195663",
            "extra": "mean: 7.543334561728479 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 197.45872208799227,
            "unit": "iter/sec",
            "range": "stddev: 0.0004975963186441586",
            "extra": "mean: 5.064349598871487 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 72.8054741066422,
            "unit": "iter/sec",
            "range": "stddev: 0.0013471382116283619",
            "extra": "mean: 13.735230932432977 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1556.00621995633,
            "unit": "iter/sec",
            "range": "stddev: 0.00016313115025960414",
            "extra": "mean: 642.6709528372357 usec\nrounds: 1357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 187.26401565878757,
            "unit": "iter/sec",
            "range": "stddev: 0.0005797518856497302",
            "extra": "mean: 5.340054235631115 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1393901.0106274474,
            "unit": "iter/sec",
            "range": "stddev: 0.000003129697652293081",
            "extra": "mean: 717.411058874161 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.4034236390982,
            "unit": "iter/sec",
            "range": "stddev: 0.0011991574214915346",
            "extra": "mean: 87.69296236363289 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 68.82921666510912,
            "unit": "iter/sec",
            "range": "stddev: 0.0004662730683015019",
            "extra": "mean: 14.528713945206347 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 70.30067531502365,
            "unit": "iter/sec",
            "range": "stddev: 0.0012690796019830686",
            "extra": "mean: 14.224614422534492 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1545.0544937575362,
            "unit": "iter/sec",
            "range": "stddev: 0.00016349060731980883",
            "extra": "mean: 647.226362591279 usec\nrounds: 957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.059099237949268,
            "unit": "iter/sec",
            "range": "stddev: 0.0030003602538630405",
            "extra": "mean: 246.3600767999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5089787.466792057,
            "unit": "iter/sec",
            "range": "stddev: 9.159078094976258e-8",
            "extra": "mean: 196.47185791634837 nsec\nrounds: 51547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.17452023162525,
            "unit": "iter/sec",
            "range": "stddev: 0.0005777579630570365",
            "extra": "mean: 18.458862131578854 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 388.8765101818006,
            "unit": "iter/sec",
            "range": "stddev: 0.00015814578794636833",
            "extra": "mean: 2.5715104250768395 msec\nrounds: 327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 58.66093333108721,
            "unit": "iter/sec",
            "range": "stddev: 0.026496814509155156",
            "extra": "mean: 17.04712051470297 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.5162719205265,
            "unit": "iter/sec",
            "range": "stddev: 0.0012032682753819236",
            "extra": "mean: 31.72964120000188 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.211381390993985,
            "unit": "iter/sec",
            "range": "stddev: 0.001298574315352636",
            "extra": "mean: 52.052477624997096 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 408048.3234835632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038378511764135825",
            "extra": "mean: 2.450690132636414 usec\nrounds: 1804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.6541982177476,
            "unit": "iter/sec",
            "range": "stddev: 0.001306572147379889",
            "extra": "mean: 29.713974866667552 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 72.88325079531907,
            "unit": "iter/sec",
            "range": "stddev: 0.0012652886442504128",
            "extra": "mean: 13.720573507462499 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1570.1816357748237,
            "unit": "iter/sec",
            "range": "stddev: 0.0001436459085478036",
            "extra": "mean: 636.8689947813195 usec\nrounds: 1533"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1497.3480579747788,
            "unit": "iter/sec",
            "range": "stddev: 0.0002086020457790855",
            "extra": "mean: 667.8473950489098 usec\nrounds: 929"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 90.69786866835695,
            "unit": "iter/sec",
            "range": "stddev: 0.0005325696991142621",
            "extra": "mean: 11.025617411767076 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 188.8020581071969,
            "unit": "iter/sec",
            "range": "stddev: 0.0006270481686826934",
            "extra": "mean: 5.296552431818439 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 74.57305430403035,
            "unit": "iter/sec",
            "range": "stddev: 0.0013109539821256693",
            "extra": "mean: 13.40966934146285 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1613.7579712851104,
            "unit": "iter/sec",
            "range": "stddev: 0.00013177607356354152",
            "extra": "mean: 619.6716098657927 usec\nrounds: 1115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 61.77358000259,
            "unit": "iter/sec",
            "range": "stddev: 0.023501292319488668",
            "extra": "mean: 16.188150338025945 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 629990.6204612876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019403314211268337",
            "extra": "mean: 1.5873252196481697 usec\nrounds: 22883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 191.92755902288718,
            "unit": "iter/sec",
            "range": "stddev: 0.004044018778525991",
            "extra": "mean: 5.210299162303997 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3925.8750972844987,
            "unit": "iter/sec",
            "range": "stddev: 0.000057476536735320946",
            "extra": "mean: 254.72027897466558 usec\nrounds: 1717"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 71.90911208592729,
            "unit": "iter/sec",
            "range": "stddev: 0.001073701942690615",
            "extra": "mean: 13.90644343939412 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.912034469581634,
            "unit": "iter/sec",
            "range": "stddev: 0.0018641488359269264",
            "extra": "mean: 32.34986040740961 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.16033040995738,
            "unit": "iter/sec",
            "range": "stddev: 0.0006202918150274635",
            "extra": "mean: 12.794214082193838 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1502960.7308040066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012280372240635273",
            "extra": "mean: 665.3533785044747 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.32433085438092,
            "unit": "iter/sec",
            "range": "stddev: 0.0006859605785154637",
            "extra": "mean: 23.62707170588361 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 174.6825613421675,
            "unit": "iter/sec",
            "range": "stddev: 0.000887755366366789",
            "extra": "mean: 5.724669894444724 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 74.76191149138856,
            "unit": "iter/sec",
            "range": "stddev: 0.0012606387324047552",
            "extra": "mean: 13.375794974359168 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.242623509843376,
            "unit": "iter/sec",
            "range": "stddev: 0.0010834686085120669",
            "extra": "mean: 23.672772117645106 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 102.69454968679939,
            "unit": "iter/sec",
            "range": "stddev: 0.0009320431771470743",
            "extra": "mean: 9.737615122222424 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 73.47789835517739,
            "unit": "iter/sec",
            "range": "stddev: 0.0011111010269477693",
            "extra": "mean: 13.609534599999051 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.627857993171176,
            "unit": "iter/sec",
            "range": "stddev: 0.0021895048060220656",
            "extra": "mean: 30.648656133335333 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1281893.87138978,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014208773783419092",
            "extra": "mean: 780.0957804064064 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.43565082112566,
            "unit": "iter/sec",
            "range": "stddev: 0.000426410393824876",
            "extra": "mean: 11.307656931508873 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0223998982118188,
            "unit": "iter/sec",
            "range": "stddev: 0.009857487059038921",
            "extra": "mean: 978.09086420001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 189.714116827439,
            "unit": "iter/sec",
            "range": "stddev: 0.00046766152918855443",
            "extra": "mean: 5.271089029761472 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9957.101930318353,
            "unit": "iter/sec",
            "range": "stddev: 0.000026683714775205883",
            "extra": "mean: 100.43082886950296 usec\nrounds: 6235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9477.8268727236,
            "unit": "iter/sec",
            "range": "stddev: 0.000024271746659121777",
            "extra": "mean: 105.50941829059119 usec\nrounds: 4363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118074.03439267816,
            "unit": "iter/sec",
            "range": "stddev: 0.000005232740646452445",
            "extra": "mean: 8.469262570247286 usec\nrounds: 22573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 74.7299547891406,
            "unit": "iter/sec",
            "range": "stddev: 0.001230651488287532",
            "extra": "mean: 13.38151485333583 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 70.66355861619289,
            "unit": "iter/sec",
            "range": "stddev: 0.0011792363352470488",
            "extra": "mean: 14.151565808219079 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10026288250818655,
            "unit": "iter/sec",
            "range": "stddev: 0.0946442715783861",
            "extra": "mean: 9.97378067520001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1371349.5932098047,
            "unit": "iter/sec",
            "range": "stddev: 0.000005655581805857995",
            "extra": "mean: 729.2086605424826 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 824.6090746894658,
            "unit": "iter/sec",
            "range": "stddev: 0.0007588313892551435",
            "extra": "mean: 1.2126958466672022 msec\nrounds: 150"
          }
        ]
      }
    ]
  }
}