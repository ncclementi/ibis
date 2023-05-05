window.BENCHMARK_DATA = {
  "lastUpdate": 1683248163235,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "355c698bc998c868b6d437fde14e5618b61425e5",
          "message": "chore(deps): update clickhouse/clickhouse-server docker tag to v23.4.2.11",
          "timestamp": "2023-05-04T17:46:29-07:00",
          "tree_id": "2886d65bda464342f5c09b3fbb08103c1e5d99ab",
          "url": "https://github.com/ibis-project/ibis/commit/355c698bc998c868b6d437fde14e5618b61425e5"
        },
        "date": 1683248067972,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 140.27762999144366,
            "unit": "iter/sec",
            "range": "stddev: 0.006293305852929777",
            "extra": "mean: 7.128720381581837 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.400251041675645,
            "unit": "iter/sec",
            "range": "stddev: 0.0007805448839946439",
            "extra": "mean: 16.556222577783807 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 995372.0622202841,
            "unit": "iter/sec",
            "range": "stddev: 5.688525297883104e-7",
            "extra": "mean: 1.0046494551689473 usec\nrounds: 128189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 95.66323276763598,
            "unit": "iter/sec",
            "range": "stddev: 0.0008968237782553898",
            "extra": "mean: 10.453336888885822 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 245.62813670996442,
            "unit": "iter/sec",
            "range": "stddev: 0.000443366534986028",
            "extra": "mean: 4.071194828875779 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.58468788278162,
            "unit": "iter/sec",
            "range": "stddev: 0.00037377318056156504",
            "extra": "mean: 5.192520812499168 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.66652704314222,
            "unit": "iter/sec",
            "range": "stddev: 0.0012798578600701422",
            "extra": "mean: 25.210172771424563 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 98.2537896409759,
            "unit": "iter/sec",
            "range": "stddev: 0.0008011782261792529",
            "extra": "mean: 10.177724479168168 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.04858041487837,
            "unit": "iter/sec",
            "range": "stddev: 0.0017112692155339506",
            "extra": "mean: 43.38662000000997 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 90.36756289455938,
            "unit": "iter/sec",
            "range": "stddev: 0.0010564544676030904",
            "extra": "mean: 11.065917547945794 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 237.1856925378154,
            "unit": "iter/sec",
            "range": "stddev: 0.00829478877465796",
            "extra": "mean: 4.216105909679043 msec\nrounds: 310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 40.69953820412096,
            "unit": "iter/sec",
            "range": "stddev: 0.0012633178625589224",
            "extra": "mean: 24.570303352944354 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 185.34772153950036,
            "unit": "iter/sec",
            "range": "stddev: 0.00042775388311503207",
            "extra": "mean: 5.395264596154666 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 122.23335247452144,
            "unit": "iter/sec",
            "range": "stddev: 0.0004024602064233107",
            "extra": "mean: 8.181073166658356 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 253.2601404025582,
            "unit": "iter/sec",
            "range": "stddev: 0.00043486190702443465",
            "extra": "mean: 3.94850922221908 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.52418943689652,
            "unit": "iter/sec",
            "range": "stddev: 0.0008777806968960655",
            "extra": "mean: 10.468552582281813 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.00790765513684,
            "unit": "iter/sec",
            "range": "stddev: 0.0011001639482734243",
            "extra": "mean: 21.73539399999967 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1804597.5959844498,
            "unit": "iter/sec",
            "range": "stddev: 4.035617092454665e-7",
            "extra": "mean: 554.1401596816806 nsec\nrounds: 142837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.90656547225854,
            "unit": "iter/sec",
            "range": "stddev: 0.0008589550924882681",
            "extra": "mean: 10.213819626665858 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1713.2875617846453,
            "unit": "iter/sec",
            "range": "stddev: 0.00007612452796815925",
            "extra": "mean: 583.6731803261038 usec\nrounds: 305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 92.16863825965851,
            "unit": "iter/sec",
            "range": "stddev: 0.001069583701732328",
            "extra": "mean: 10.849677492063936 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 195.87273756488702,
            "unit": "iter/sec",
            "range": "stddev: 0.004583101374216509",
            "extra": "mean: 5.105355714287337 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8119418989375322,
            "unit": "iter/sec",
            "range": "stddev: 0.03493784761793543",
            "extra": "mean: 1.2316152193999983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.49039410981477,
            "unit": "iter/sec",
            "range": "stddev: 0.0009574747348660483",
            "extra": "mean: 10.583086348839023 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3001835214241457,
            "unit": "iter/sec",
            "range": "stddev: 0.014049406936266998",
            "extra": "mean: 769.1221919999862 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 100.74322447656607,
            "unit": "iter/sec",
            "range": "stddev: 0.0145368553422201",
            "extra": "mean: 9.926225859810657 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4109800.7394504263,
            "unit": "iter/sec",
            "range": "stddev: 6.690545409670523e-8",
            "extra": "mean: 243.32079908421215 nsec\nrounds: 172385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.098475083818617,
            "unit": "iter/sec",
            "range": "stddev: 0.0016206371980037248",
            "extra": "mean: 34.36606204000327 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.938910560658584,
            "unit": "iter/sec",
            "range": "stddev: 0.0009122046731459635",
            "extra": "mean: 18.889697377776177 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1076.3286722110054,
            "unit": "iter/sec",
            "range": "stddev: 0.00008574759501024433",
            "extra": "mean: 929.0842340432962 usec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.936203487050719,
            "unit": "iter/sec",
            "range": "stddev: 0.0038862496203446568",
            "extra": "mean: 126.0048336250037 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 269.1662137298122,
            "unit": "iter/sec",
            "range": "stddev: 0.000376749002778144",
            "extra": "mean: 3.715176530304785 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 90.5432490820024,
            "unit": "iter/sec",
            "range": "stddev: 0.0009904831825942938",
            "extra": "mean: 11.044445722224182 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.1762935736399,
            "unit": "iter/sec",
            "range": "stddev: 0.0005357208571700894",
            "extra": "mean: 10.083054770114844 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 407.06149945583707,
            "unit": "iter/sec",
            "range": "stddev: 0.0002313650956991614",
            "extra": "mean: 2.456631249422526 msec\nrounds: 433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1901010.7437729358,
            "unit": "iter/sec",
            "range": "stddev: 4.261503944955244e-7",
            "extra": "mean: 526.0359539132851 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.59326363879408,
            "unit": "iter/sec",
            "range": "stddev: 0.0009683468402931922",
            "extra": "mean: 9.843172314607513 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 697.241348005741,
            "unit": "iter/sec",
            "range": "stddev: 0.00013207962183498867",
            "extra": "mean: 1.434223605441951 msec\nrounds: 588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 84.08188240254088,
            "unit": "iter/sec",
            "range": "stddev: 0.0009876689472027318",
            "extra": "mean: 11.893168556961099 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4699145.778220959,
            "unit": "iter/sec",
            "range": "stddev: 4.714446159118106e-8",
            "extra": "mean: 212.80463454345977 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 93.8560764608517,
            "unit": "iter/sec",
            "range": "stddev: 0.0005244757429379763",
            "extra": "mean: 10.654611163264532 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 622.5909237505793,
            "unit": "iter/sec",
            "range": "stddev: 0.00014061961504982357",
            "extra": "mean: 1.6061910989255237 msec\nrounds: 465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 259.55091736886914,
            "unit": "iter/sec",
            "range": "stddev: 0.0003716648358144286",
            "extra": "mean: 3.8528085746613554 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 255.1103025177593,
            "unit": "iter/sec",
            "range": "stddev: 0.00040607033180302453",
            "extra": "mean: 3.919873051502441 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1672724.878797948,
            "unit": "iter/sec",
            "range": "stddev: 3.4931857800474337e-7",
            "extra": "mean: 597.8269425385836 nsec\nrounds: 135117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149628.3821227239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011753572609211468",
            "extra": "mean: 6.683224036866272 usec\nrounds: 30861"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10741.777945427868,
            "unit": "iter/sec",
            "range": "stddev: 0.00007273302024043344",
            "extra": "mean: 93.09445839230368 usec\nrounds: 3521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1843.662610101202,
            "unit": "iter/sec",
            "range": "stddev: 0.00010528456162597044",
            "extra": "mean: 542.3985899161388 usec\nrounds: 1190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1814.4446331070183,
            "unit": "iter/sec",
            "range": "stddev: 0.00010471141760360235",
            "extra": "mean: 551.1328269563234 usec\nrounds: 1751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 270.346434086494,
            "unit": "iter/sec",
            "range": "stddev: 0.00008737059231140432",
            "extra": "mean: 3.698957611107466 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1774.2909094980273,
            "unit": "iter/sec",
            "range": "stddev: 0.00010782265236514149",
            "extra": "mean: 563.6054350765481 usec\nrounds: 1032"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 140.67776222592246,
            "unit": "iter/sec",
            "range": "stddev: 0.00016314405023770307",
            "extra": "mean: 7.108444036762846 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.40437643540042,
            "unit": "iter/sec",
            "range": "stddev: 0.0003477102136452661",
            "extra": "mean: 6.27335348226939 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 63.71073004392307,
            "unit": "iter/sec",
            "range": "stddev: 0.0007994006054978197",
            "extra": "mean: 15.695943200000784 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 92.62284514768656,
            "unit": "iter/sec",
            "range": "stddev: 0.0010360654399935176",
            "extra": "mean: 10.796472494507224 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2285771188292127,
            "unit": "iter/sec",
            "range": "stddev: 0.0044355165027622715",
            "extra": "mean: 448.7168030000021 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 91.45304463572944,
            "unit": "iter/sec",
            "range": "stddev: 0.0009195555471099408",
            "extra": "mean: 10.934573080460504 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.87199489982774,
            "unit": "iter/sec",
            "range": "stddev: 0.00023390286809081762",
            "extra": "mean: 6.8553254563133486 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2278914.5524404347,
            "unit": "iter/sec",
            "range": "stddev: 8.399717223940156e-8",
            "extra": "mean: 438.8053948443036 nsec\nrounds: 129837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1877.1989223342573,
            "unit": "iter/sec",
            "range": "stddev: 0.00018820451473486628",
            "extra": "mean: 532.7085947591111 usec\nrounds: 992"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8269542609515957,
            "unit": "iter/sec",
            "range": "stddev: 0.019643073860053116",
            "extra": "mean: 1.2092567234000058 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1970.5803810849611,
            "unit": "iter/sec",
            "range": "stddev: 0.00011631034835467788",
            "extra": "mean: 507.46470917843027 usec\nrounds: 1231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10878533.814880678,
            "unit": "iter/sec",
            "range": "stddev: 1.9973552341818813e-8",
            "extra": "mean: 91.92415237356632 nsec\nrounds: 92576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 49.663209010168714,
            "unit": "iter/sec",
            "range": "stddev: 0.0013838487614026452",
            "extra": "mean: 20.135629975003155 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5716963.8905178895,
            "unit": "iter/sec",
            "range": "stddev: 2.980694885918169e-8",
            "extra": "mean: 174.9180192756733 nsec\nrounds: 62886"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 71.79775979590194,
            "unit": "iter/sec",
            "range": "stddev: 0.025774097205779847",
            "extra": "mean: 13.928011164173924 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5557924042743547,
            "unit": "iter/sec",
            "range": "stddev: 0.010642682678949002",
            "extra": "mean: 642.7592763999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10383.891861084885,
            "unit": "iter/sec",
            "range": "stddev: 0.000013796312682637943",
            "extra": "mean: 96.30300598060373 usec\nrounds: 4682"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8300.147796080815,
            "unit": "iter/sec",
            "range": "stddev: 0.00002282566075799614",
            "extra": "mean: 120.47978235666872 usec\nrounds: 2936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 104.89291639024344,
            "unit": "iter/sec",
            "range": "stddev: 0.0005949771414777319",
            "extra": "mean: 9.53353223853174 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7401543604116294,
            "unit": "iter/sec",
            "range": "stddev: 0.011221005712511698",
            "extra": "mean: 1.3510695248000162 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.47540784698471,
            "unit": "iter/sec",
            "range": "stddev: 0.0017599668457456423",
            "extra": "mean: 54.12600405263614 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5691628.199577563,
            "unit": "iter/sec",
            "range": "stddev: 4.6419646386487046e-8",
            "extra": "mean: 175.6966486451488 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 513.3860409594271,
            "unit": "iter/sec",
            "range": "stddev: 0.00023192153209443438",
            "extra": "mean: 1.9478519480801972 msec\nrounds: 443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 269.85749908338033,
            "unit": "iter/sec",
            "range": "stddev: 0.0003757045407898945",
            "extra": "mean: 3.7056594810100902 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 98.45053591239909,
            "unit": "iter/sec",
            "range": "stddev: 0.000996958974133704",
            "extra": "mean: 10.15738503333081 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4240.801628900525,
            "unit": "iter/sec",
            "range": "stddev: 0.00004620782834497694",
            "extra": "mean: 235.80447460336904 usec\nrounds: 1831"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13742.492887842383,
            "unit": "iter/sec",
            "range": "stddev: 0.000010834585235751958",
            "extra": "mean: 72.76700145755021 usec\nrounds: 4801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1982.7774203780682,
            "unit": "iter/sec",
            "range": "stddev: 0.00011292336764767123",
            "extra": "mean: 504.3430441170366 usec\nrounds: 1156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 81.15993726486727,
            "unit": "iter/sec",
            "range": "stddev: 0.021139268021376997",
            "extra": "mean: 12.321350086021848 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.50227894026457,
            "unit": "iter/sec",
            "range": "stddev: 0.0005023360149884481",
            "extra": "mean: 9.302128381442653 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 94.19838819140752,
            "unit": "iter/sec",
            "range": "stddev: 0.0010660088323194664",
            "extra": "mean: 10.615892895832127 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15360679480566147,
            "unit": "iter/sec",
            "range": "stddev: 0.0938383030612937",
            "extra": "mean: 6.5101286780000125 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 251.65028862569528,
            "unit": "iter/sec",
            "range": "stddev: 0.0005005744256167335",
            "extra": "mean: 3.973768539909764 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6420322.764181826,
            "unit": "iter/sec",
            "range": "stddev: 2.6498717817831927e-8",
            "extra": "mean: 155.75540930417142 nsec\nrounds: 50757"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1998.433563678699,
            "unit": "iter/sec",
            "range": "stddev: 0.00012033443391379405",
            "extra": "mean: 500.39191603608214 usec\nrounds: 1191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2006.7224747659616,
            "unit": "iter/sec",
            "range": "stddev: 0.00010718976232306808",
            "extra": "mean: 498.32501134299963 usec\nrounds: 1146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.48055936898412,
            "unit": "iter/sec",
            "range": "stddev: 0.0009334119194655128",
            "extra": "mean: 25.32892177778005 msec\nrounds: 36"
          }
        ]
      }
    ]
  }
}