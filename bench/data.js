window.BENCHMARK_DATA = {
  "lastUpdate": 1683459487983,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "chelsealin@google.com",
            "name": "Chelsea Lin",
            "username": "chelsea-lin"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "067e8a50e7f5d3cc4b0ae0198345f9ae4f868200",
          "message": "fix(bigquery): bigquery timestamp and datetime dtypes\n\nBREAKING CHANGE: Before this change, ibis timestamp is mapping to Bigquery TIMESTAMP type and no timezone supports. However, it's not correct, BigQuery TIMESTAMP type should have UTC timezone, while DATETIME type is the no timezone version. Hence, this change is breaking the ibis timestamp mapping to BigQuery: If ibis timestamp has the UTC timezone, will map to BigQuery TIMESTAMP type. If ibis timestamp has no timezone, will map to BigQuery DATETIME type.",
          "timestamp": "2023-05-07T04:32:26-07:00",
          "tree_id": "019d359d6f0f7ae071058518c190b4039989eb16",
          "url": "https://github.com/ibis-project/ibis/commit/067e8a50e7f5d3cc4b0ae0198345f9ae4f868200"
        },
        "date": 1683459391407,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 82.19049579789879,
            "unit": "iter/sec",
            "range": "stddev: 0.0008330248335496398",
            "extra": "mean: 12.166856888890615 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2705.375607976879,
            "unit": "iter/sec",
            "range": "stddev: 0.0031224922588420643",
            "extra": "mean: 369.6344407968604 usec\nrounds: 853"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1803.01950130472,
            "unit": "iter/sec",
            "range": "stddev: 0.00007783921811742439",
            "extra": "mean: 554.6251714284673 usec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1834.7231374396365,
            "unit": "iter/sec",
            "range": "stddev: 0.0000975295731758061",
            "extra": "mean: 545.0413632410523 usec\nrounds: 1382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 640.4802903474907,
            "unit": "iter/sec",
            "range": "stddev: 0.00003498878502144907",
            "extra": "mean: 1.5613282954537961 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.398413572949657,
            "unit": "iter/sec",
            "range": "stddev: 0.001149547290906114",
            "extra": "mean: 49.02342019999537 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11986.650189282855,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020880780315241368",
            "extra": "mean: 83.42614360216253 usec\nrounds: 2493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 363.45817318003617,
            "unit": "iter/sec",
            "range": "stddev: 0.000054334979050685276",
            "extra": "mean: 2.751348225988738 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3717933.5336070443,
            "unit": "iter/sec",
            "range": "stddev: 2.4608145471484156e-8",
            "extra": "mean: 268.9666157186301 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 174.3361673664087,
            "unit": "iter/sec",
            "range": "stddev: 0.0001244052481112576",
            "extra": "mean: 5.7360444198492875 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 232.18915586783487,
            "unit": "iter/sec",
            "range": "stddev: 0.0004081528089599458",
            "extra": "mean: 4.306833350000261 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9670571.762748212,
            "unit": "iter/sec",
            "range": "stddev: 5.4830297386879955e-9",
            "extra": "mean: 103.406502173041 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 90.42899604185186,
            "unit": "iter/sec",
            "range": "stddev: 0.00007672399258028106",
            "extra": "mean: 11.058399891304614 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.27173940987026,
            "unit": "iter/sec",
            "range": "stddev: 0.0007636717481636366",
            "extra": "mean: 10.956293880949731 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 71.91314206599031,
            "unit": "iter/sec",
            "range": "stddev: 0.015416336964315396",
            "extra": "mean: 13.905664128572782 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1013.3356004337523,
            "unit": "iter/sec",
            "range": "stddev: 0.000012339959594927014",
            "extra": "mean: 986.8398974357121 usec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 570.1477125485619,
            "unit": "iter/sec",
            "range": "stddev: 0.00009054004228333255",
            "extra": "mean: 1.7539314426607047 msec\nrounds: 436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 71.63796513717375,
            "unit": "iter/sec",
            "range": "stddev: 0.0006501267187930557",
            "extra": "mean: 13.95907879411679 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1601200.2759919565,
            "unit": "iter/sec",
            "range": "stddev: 1.3243670102718516e-7",
            "extra": "mean: 624.5314936512186 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.10347154900492,
            "unit": "iter/sec",
            "range": "stddev: 0.0008769591338051648",
            "extra": "mean: 11.613933584906157 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143218.9788099326,
            "unit": "iter/sec",
            "range": "stddev: 4.028291048043738e-7",
            "extra": "mean: 6.982314832220041 usec\nrounds: 36232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.356764010292905,
            "unit": "iter/sec",
            "range": "stddev: 0.0021478314869570053",
            "extra": "mean: 737.0478524000021 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 134.68560457175468,
            "unit": "iter/sec",
            "range": "stddev: 0.00019241296615861355",
            "extra": "mean: 7.424698453703292 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.1744724409511,
            "unit": "iter/sec",
            "range": "stddev: 0.0009121445370709397",
            "extra": "mean: 11.34115092857156 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9113.980127796778,
            "unit": "iter/sec",
            "range": "stddev: 0.000002619914961611014",
            "extra": "mean: 109.72154711530416 usec\nrounds: 4871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 238.72479110472545,
            "unit": "iter/sec",
            "range": "stddev: 0.000327104669565061",
            "extra": "mean: 4.188923971290912 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.77190443380627,
            "unit": "iter/sec",
            "range": "stddev: 0.0009209756338821671",
            "extra": "mean: 11.658829387095414 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.50336203499245,
            "unit": "iter/sec",
            "range": "stddev: 0.0002538311783997596",
            "extra": "mean: 11.560244324324396 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1814.80974847001,
            "unit": "iter/sec",
            "range": "stddev: 0.0001300911532524957",
            "extra": "mean: 551.021946428852 usec\nrounds: 1120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 146.10952447181245,
            "unit": "iter/sec",
            "range": "stddev: 0.017911590907054097",
            "extra": "mean: 6.84418078571545 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1896.8760950749668,
            "unit": "iter/sec",
            "range": "stddev: 0.00010482350387352233",
            "extra": "mean: 527.1825622118344 usec\nrounds: 1519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 188.05713997750928,
            "unit": "iter/sec",
            "range": "stddev: 0.004608705260327097",
            "extra": "mean: 5.3175327462684745 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1862.019218947982,
            "unit": "iter/sec",
            "range": "stddev: 0.00009639753954592408",
            "extra": "mean: 537.0513847676544 usec\nrounds: 1011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.82833344901578,
            "unit": "iter/sec",
            "range": "stddev: 0.0001563168127212476",
            "extra": "mean: 22.816290771431472 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4987205.465940601,
            "unit": "iter/sec",
            "range": "stddev: 1.6183567144738967e-8",
            "extra": "mean: 200.5130943230246 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 69.39268372636133,
            "unit": "iter/sec",
            "range": "stddev: 0.022805859733206965",
            "extra": "mean: 14.410741108433507 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1815.469814376909,
            "unit": "iter/sec",
            "range": "stddev: 0.00013811559098641176",
            "extra": "mean: 550.8216066612002 usec\nrounds: 1411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10434.288390177335,
            "unit": "iter/sec",
            "range": "stddev: 0.000018604963771022773",
            "extra": "mean: 95.83787246491896 usec\nrounds: 4783"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.54708576715153,
            "unit": "iter/sec",
            "range": "stddev: 0.001040192575436283",
            "extra": "mean: 11.827728784810734 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.154684936931563,
            "unit": "iter/sec",
            "range": "stddev: 0.0004598552509244001",
            "extra": "mean: 61.90154768749956 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.23343474694296,
            "unit": "iter/sec",
            "range": "stddev: 0.0005109496849370358",
            "extra": "mean: 22.107540707321228 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 229.76008221308328,
            "unit": "iter/sec",
            "range": "stddev: 0.0003544942062211219",
            "extra": "mean: 4.352366130651814 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 241.3544395652105,
            "unit": "iter/sec",
            "range": "stddev: 0.0003375074883660651",
            "extra": "mean: 4.143284050632988 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1594286.3661579436,
            "unit": "iter/sec",
            "range": "stddev: 1.490925728926296e-7",
            "extra": "mean: 627.2398869030606 nsec\nrounds: 131562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14538982054143224,
            "unit": "iter/sec",
            "range": "stddev: 0.01021313794467553",
            "extra": "mean: 6.878060625400019 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 238.36310141384627,
            "unit": "iter/sec",
            "range": "stddev: 0.0003342699459244949",
            "extra": "mean: 4.195280200956099 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7305050189155997,
            "unit": "iter/sec",
            "range": "stddev: 0.023472391777460137",
            "extra": "mean: 1.3689159883999877 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.04730495882741,
            "unit": "iter/sec",
            "range": "stddev: 0.0009570816937867278",
            "extra": "mean: 11.75816212499754 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5478991.169555595,
            "unit": "iter/sec",
            "range": "stddev: 1.654120894573926e-8",
            "extra": "mean: 182.51535165062322 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 239.65021182622905,
            "unit": "iter/sec",
            "range": "stddev: 0.0005187569374586159",
            "extra": "mean: 4.172748241612665 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.27553573316766,
            "unit": "iter/sec",
            "range": "stddev: 0.0001268007962667379",
            "extra": "mean: 10.607205700006261 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.56569945775177,
            "unit": "iter/sec",
            "range": "stddev: 0.0012218353990479218",
            "extra": "mean: 19.776251702708308 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 267.9537956100631,
            "unit": "iter/sec",
            "range": "stddev: 0.0000735670043075007",
            "extra": "mean: 3.731986694658506 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 148.19330114775914,
            "unit": "iter/sec",
            "range": "stddev: 0.021014886070972114",
            "extra": "mean: 6.747943343288707 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.17591610134002,
            "unit": "iter/sec",
            "range": "stddev: 0.0009668766896168878",
            "extra": "mean: 11.604170228071995 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.560590834922667,
            "unit": "iter/sec",
            "range": "stddev: 0.032541186926766386",
            "extra": "mean: 32.721880457143016 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1879.8385647680768,
            "unit": "iter/sec",
            "range": "stddev: 0.00011824356233026376",
            "extra": "mean: 531.9605729672718 usec\nrounds: 1021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 81.72763467964799,
            "unit": "iter/sec",
            "range": "stddev: 0.01712173973889535",
            "extra": "mean: 12.235763385539682 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7360165941335609,
            "unit": "iter/sec",
            "range": "stddev: 0.003780045868563683",
            "extra": "mean: 1.3586650192000094 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 137.88263511031934,
            "unit": "iter/sec",
            "range": "stddev: 0.004534850028245098",
            "extra": "mean: 7.252544885002408 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1567260341883228,
            "unit": "iter/sec",
            "range": "stddev: 0.002250195827419828",
            "extra": "mean: 864.5089419999977 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 82.75516323602243,
            "unit": "iter/sec",
            "range": "stddev: 0.0008913633661276456",
            "extra": "mean: 12.083838166664517 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.44847773777074,
            "unit": "iter/sec",
            "range": "stddev: 0.00016624508010595573",
            "extra": "mean: 12.43031600000677 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.03500002210341,
            "unit": "iter/sec",
            "range": "stddev: 0.00017149975276068693",
            "extra": "mean: 38.40983288461731 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.91482319771907,
            "unit": "iter/sec",
            "range": "stddev: 0.00007142333787425793",
            "extra": "mean: 6.715248210530843 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1888.2596421647538,
            "unit": "iter/sec",
            "range": "stddev: 0.00009989656425301036",
            "extra": "mean: 529.588186746168 usec\nrounds: 1162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 880103.8186365042,
            "unit": "iter/sec",
            "range": "stddev: 2.2702725304769415e-7",
            "extra": "mean: 1.1362295888560558 usec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.24523499651397,
            "unit": "iter/sec",
            "range": "stddev: 0.000900153922747766",
            "extra": "mean: 11.33205662650798 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1383073.3366800423,
            "unit": "iter/sec",
            "range": "stddev: 1.065044324493477e-7",
            "extra": "mean: 723.0274588333982 nsec\nrounds: 104156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4584506.533414914,
            "unit": "iter/sec",
            "range": "stddev: 1.2927633908561621e-8",
            "extra": "mean: 218.12598427177292 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.08044309809017,
            "unit": "iter/sec",
            "range": "stddev: 0.0010535981007524656",
            "extra": "mean: 11.753582416667589 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 72.03852725220207,
            "unit": "iter/sec",
            "range": "stddev: 0.02280770019076981",
            "extra": "mean: 13.881460909091976 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.03082822959989,
            "unit": "iter/sec",
            "range": "stddev: 0.0001476807356438958",
            "extra": "mean: 9.256616989686332 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.72412293833872,
            "unit": "iter/sec",
            "range": "stddev: 0.00006339036367467607",
            "extra": "mean: 7.15696029411691 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.45660565314495,
            "unit": "iter/sec",
            "range": "stddev: 0.0008963683346778228",
            "extra": "mean: 11.701845543208728 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1498.8216952830685,
            "unit": "iter/sec",
            "range": "stddev: 0.000006864381816580721",
            "extra": "mean: 667.1907693537485 usec\nrounds: 1253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.1937115443096,
            "unit": "iter/sec",
            "range": "stddev: 0.0010790044676923227",
            "extra": "mean: 12.469805683547493 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.716030604225814,
            "unit": "iter/sec",
            "range": "stddev: 0.0010186710369505935",
            "extra": "mean: 32.55628999999834 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 164.56811165088376,
            "unit": "iter/sec",
            "range": "stddev: 0.00005632812711967786",
            "extra": "mean: 6.0765113603625025 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 213.82494192720165,
            "unit": "iter/sec",
            "range": "stddev: 0.0005953554704165657",
            "extra": "mean: 4.676722888298306 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1833.6818758222237,
            "unit": "iter/sec",
            "range": "stddev: 0.00010493022462868978",
            "extra": "mean: 545.350866573625 usec\nrounds: 1439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 452.4190686341989,
            "unit": "iter/sec",
            "range": "stddev: 0.000028150609712273586",
            "extra": "mean: 2.2103400792077244 msec\nrounds: 303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6486659490814258,
            "unit": "iter/sec",
            "range": "stddev: 0.0037220699347767913",
            "extra": "mean: 1.541625549200012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7306.436556793452,
            "unit": "iter/sec",
            "range": "stddev: 0.000014877167036791806",
            "extra": "mean: 136.86562419682 usec\nrounds: 3422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.829477457006945,
            "unit": "iter/sec",
            "range": "stddev: 0.0004712573446720386",
            "extra": "mean: 26.434412189184908 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1644637.626127026,
            "unit": "iter/sec",
            "range": "stddev: 1.2520191875221315e-7",
            "extra": "mean: 608.0366787879651 nsec\nrounds: 103083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.299235088611472,
            "unit": "iter/sec",
            "range": "stddev: 0.0006189404809021566",
            "extra": "mean: 137.00065662499838 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5181641.572855186,
            "unit": "iter/sec",
            "range": "stddev: 8.30535666064593e-9",
            "extra": "mean: 192.98903367583628 nsec\nrounds: 52084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 69.25643515888277,
            "unit": "iter/sec",
            "range": "stddev: 0.02359148925725818",
            "extra": "mean: 14.439091439024795 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.08247733837301,
            "unit": "iter/sec",
            "range": "stddev: 0.0006929331959785236",
            "extra": "mean: 30.227482354838056 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.107257910414445,
            "unit": "iter/sec",
            "range": "stddev: 0.0029901408067888493",
            "extra": "mean: 474.55035999998927 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.21168047173958,
            "unit": "iter/sec",
            "range": "stddev: 0.0009607161164291648",
            "extra": "mean: 11.735480329268352 msec\nrounds: 82"
          }
        ]
      }
    ]
  }
}