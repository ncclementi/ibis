window.BENCHMARK_DATA = {
  "lastUpdate": 1683248563608,
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
      },
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
          "id": "5504bd40984911c691fc30efaa31cb198e5b0aa9",
          "message": "fix(deps): update dependency sqlglot to v12",
          "timestamp": "2023-05-04T17:55:14-07:00",
          "tree_id": "83ad086e1bc7f1786ef590ea6194a83983f05f74",
          "url": "https://github.com/ibis-project/ibis/commit/5504bd40984911c691fc30efaa31cb198e5b0aa9"
        },
        "date": 1683248475428,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 270.36493867086006,
            "unit": "iter/sec",
            "range": "stddev: 0.0003181347196416965",
            "extra": "mean: 3.698704443394531 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.896780669326,
            "unit": "iter/sec",
            "range": "stddev: 0.000245573099718513",
            "extra": "mean: 6.583417999996755 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.53187007127502,
            "unit": "iter/sec",
            "range": "stddev: 0.0008385596528405053",
            "extra": "mean: 9.947094382020554 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18166287089727756,
            "unit": "iter/sec",
            "range": "stddev: 0.08126784226841918",
            "extra": "mean: 5.504702172000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.87193188640682,
            "unit": "iter/sec",
            "range": "stddev: 0.015322378391736323",
            "extra": "mean: 25.08029966666654 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.29206204292824,
            "unit": "iter/sec",
            "range": "stddev: 0.0006636459116240415",
            "extra": "mean: 9.775929627661005 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2559287.4005437642,
            "unit": "iter/sec",
            "range": "stddev: 1.6836050905701588e-8",
            "extra": "mean: 390.7337643234885 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2244.3137765359825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000730801041704294",
            "extra": "mean: 445.5704948456289 usec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.11151776704242,
            "unit": "iter/sec",
            "range": "stddev: 0.00020785498578083933",
            "extra": "mean: 16.917176851066227 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.56068265901774,
            "unit": "iter/sec",
            "range": "stddev: 0.00007882808212772979",
            "extra": "mean: 8.963731452383394 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.31741494416525,
            "unit": "iter/sec",
            "range": "stddev: 0.00022939546826763395",
            "extra": "mean: 3.593019862593275 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2286.56629084635,
            "unit": "iter/sec",
            "range": "stddev: 0.00008656661509245806",
            "extra": "mean: 437.3369816581438 usec\nrounds: 1254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.2467237912353,
            "unit": "iter/sec",
            "range": "stddev: 0.00025433308046638565",
            "extra": "mean: 3.6596962119992895 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.79442975597425,
            "unit": "iter/sec",
            "range": "stddev: 0.00025564174473189944",
            "extra": "mean: 3.665764000000076 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 742.9344866611648,
            "unit": "iter/sec",
            "range": "stddev: 0.000028351532273838483",
            "extra": "mean: 1.346013703703698 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11950788.423181955,
            "unit": "iter/sec",
            "range": "stddev: 3.5571609882880552e-9",
            "extra": "mean: 83.67648765826218 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7956719513322521,
            "unit": "iter/sec",
            "range": "stddev: 0.0017694230483452863",
            "extra": "mean: 1.256799361000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13466.941943127093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017116266710674174",
            "extra": "mean: 74.255907853702 usec\nrounds: 2865"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141588.29518415107,
            "unit": "iter/sec",
            "range": "stddev: 4.173102126035215e-7",
            "extra": "mean: 7.062730705948474 usec\nrounds: 38315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 89.85240053986108,
            "unit": "iter/sec",
            "range": "stddev: 0.010552893026943974",
            "extra": "mean: 11.129363200000112 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.51886883748037,
            "unit": "iter/sec",
            "range": "stddev: 0.00014220724361357217",
            "extra": "mean: 5.24882394117633 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.603934605106641,
            "unit": "iter/sec",
            "range": "stddev: 0.00008089307828066197",
            "extra": "mean: 116.22589500000105 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.77990720501088,
            "unit": "iter/sec",
            "range": "stddev: 0.00018705648356891582",
            "extra": "mean: 20.50024399999834 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.60731807742155,
            "unit": "iter/sec",
            "range": "stddev: 0.0005261532733351589",
            "extra": "mean: 11.546368392403773 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.0042297203159,
            "unit": "iter/sec",
            "range": "stddev: 0.009604995200316267",
            "extra": "mean: 10.637819202127702 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.675671885348,
            "unit": "iter/sec",
            "range": "stddev: 0.0006891535781881724",
            "extra": "mean: 9.932886280002435 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 431.30405265817416,
            "unit": "iter/sec",
            "range": "stddev: 0.00011947550340132348",
            "extra": "mean: 2.318549973822157 msec\nrounds: 382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8149.986880452605,
            "unit": "iter/sec",
            "range": "stddev: 0.000012913900163280795",
            "extra": "mean: 122.69958402000097 usec\nrounds: 4005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.488740125852625,
            "unit": "iter/sec",
            "range": "stddev: 0.002338117572841171",
            "extra": "mean: 401.80973079999944 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2191.752097926437,
            "unit": "iter/sec",
            "range": "stddev: 0.00008954329670828444",
            "extra": "mean: 456.2559793810968 usec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2139.4132769057214,
            "unit": "iter/sec",
            "range": "stddev: 0.00015914666589836757",
            "extra": "mean: 467.4178714298348 usec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.45222335300328,
            "unit": "iter/sec",
            "range": "stddev: 0.000840150341968276",
            "extra": "mean: 9.954981250000401 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.48266195091864,
            "unit": "iter/sec",
            "range": "stddev: 0.0006659431326763738",
            "extra": "mean: 9.57096595098004 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.7715144292171,
            "unit": "iter/sec",
            "range": "stddev: 0.014767022669613468",
            "extra": "mean: 11.658882399998305 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9141974058671185,
            "unit": "iter/sec",
            "range": "stddev: 0.003854036066663971",
            "extra": "mean: 1.0938556525999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1615810.4095797788,
            "unit": "iter/sec",
            "range": "stddev: 9.147341289164087e-8",
            "extra": "mean: 618.8844892143431 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.39504167572184,
            "unit": "iter/sec",
            "range": "stddev: 0.00010577688247152248",
            "extra": "mean: 6.0461304635759765 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1178.6463715486964,
            "unit": "iter/sec",
            "range": "stddev: 0.000013500240116122233",
            "extra": "mean: 848.4308984772406 usec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1770686.9806085248,
            "unit": "iter/sec",
            "range": "stddev: 1.0785444924633167e-7",
            "extra": "mean: 564.7525570309068 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.66494310986802,
            "unit": "iter/sec",
            "range": "stddev: 0.00012974473493962372",
            "extra": "mean: 10.033618329542676 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2321.206292831586,
            "unit": "iter/sec",
            "range": "stddev: 0.0001037498581636174",
            "extra": "mean: 430.81048120894206 usec\nrounds: 1224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.64759284791994,
            "unit": "iter/sec",
            "range": "stddev: 0.00004153996747367531",
            "extra": "mean: 9.376676709675065 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 214.95539619749852,
            "unit": "iter/sec",
            "range": "stddev: 0.004505809401345334",
            "extra": "mean: 4.652127919046105 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2241.2738559096165,
            "unit": "iter/sec",
            "range": "stddev: 0.00008260443056110986",
            "extra": "mean: 446.17483819002206 usec\nrounds: 1304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.19637302921502,
            "unit": "iter/sec",
            "range": "stddev: 0.0006688036495762905",
            "extra": "mean: 9.785083074466142 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 581.9326876190172,
            "unit": "iter/sec",
            "range": "stddev: 0.006051030286528183",
            "extra": "mean: 1.7184118047939685 msec\nrounds: 584"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 279.90781004683043,
            "unit": "iter/sec",
            "range": "stddev: 0.00024100346720266227",
            "extra": "mean: 3.572604850978232 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.84331781432006,
            "unit": "iter/sec",
            "range": "stddev: 0.0007430370055252428",
            "extra": "mean: 27.14196384374823 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.42455225854084,
            "unit": "iter/sec",
            "range": "stddev: 0.00008358952695750915",
            "extra": "mean: 7.972920628320637 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4575.683034432018,
            "unit": "iter/sec",
            "range": "stddev: 0.000057735324923548843",
            "extra": "mean: 218.54660658856815 usec\nrounds: 2125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 82.55155438916631,
            "unit": "iter/sec",
            "range": "stddev: 0.015592726908854935",
            "extra": "mean: 12.113642285713707 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9829.697411594458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000337685807844568",
            "extra": "mean: 101.73253134124623 usec\nrounds: 5121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 2741792.294694609,
            "unit": "iter/sec",
            "range": "stddev: 3.965274376202031e-7",
            "extra": "mean: 364.72492899444217 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.597706139449,
            "unit": "iter/sec",
            "range": "stddev: 0.00006410664047003394",
            "extra": "mean: 1.853232488986098 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.66638347745427,
            "unit": "iter/sec",
            "range": "stddev: 0.0001108423462384697",
            "extra": "mean: 5.791515290123476 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.05432400574296,
            "unit": "iter/sec",
            "range": "stddev: 0.0003890612670495157",
            "extra": "mean: 3.983201659482768 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6164085.288694149,
            "unit": "iter/sec",
            "range": "stddev: 4.932073050363121e-9",
            "extra": "mean: 162.23007196763757 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1773.3139907407653,
            "unit": "iter/sec",
            "range": "stddev: 0.000005877090864308538",
            "extra": "mean: 563.9159253360825 usec\nrounds: 1259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.69716005046959,
            "unit": "iter/sec",
            "range": "stddev: 0.0007806734303366471",
            "extra": "mean: 10.1320037931045 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.44058381623955,
            "unit": "iter/sec",
            "range": "stddev: 0.00029821543729368797",
            "extra": "mean: 3.591430481484563 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.885950164478196,
            "unit": "iter/sec",
            "range": "stddev: 0.00010711404116011815",
            "extra": "mean: 33.46053896551627 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.79467457391777,
            "unit": "iter/sec",
            "range": "stddev: 0.0008430555170060985",
            "extra": "mean: 10.0205747878791 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.82649864361586,
            "unit": "iter/sec",
            "range": "stddev: 0.0000914652480138261",
            "extra": "mean: 9.631452597014727 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1052593.2969099109,
            "unit": "iter/sec",
            "range": "stddev: 1.1298920932093884e-7",
            "extra": "mean: 950.0345507953466 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.918069448691352,
            "unit": "iter/sec",
            "range": "stddev: 0.001830934584822877",
            "extra": "mean: 1.089242215199988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 110.57496120678732,
            "unit": "iter/sec",
            "range": "stddev: 0.00021620528464589436",
            "extra": "mean: 9.043638714282613 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 414.894302280338,
            "unit": "iter/sec",
            "range": "stddev: 0.00003318874597610653",
            "extra": "mean: 2.4102524293628753 msec\nrounds: 361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.72014630034646,
            "unit": "iter/sec",
            "range": "stddev: 0.0007266984699727413",
            "extra": "mean: 10.129644631579021 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5809546.553813804,
            "unit": "iter/sec",
            "range": "stddev: 9.6649089252649e-9",
            "extra": "mean: 172.13047365040606 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2218.0603966204058,
            "unit": "iter/sec",
            "range": "stddev: 0.0001244042654688901",
            "extra": "mean: 450.8443510030976 usec\nrounds: 1245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.92795355096806,
            "unit": "iter/sec",
            "range": "stddev: 0.000027430712152693157",
            "extra": "mean: 5.077999247786751 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.21835485935611,
            "unit": "iter/sec",
            "range": "stddev: 0.0008062799962363361",
            "extra": "mean: 10.502176827955775 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.154917174052976,
            "unit": "iter/sec",
            "range": "stddev: 0.000518721343445225",
            "extra": "mean: 52.20591615789329 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11943.910352293877,
            "unit": "iter/sec",
            "range": "stddev: 0.000011574185173450314",
            "extra": "mean: 83.72467395553969 usec\nrounds: 4619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3615479326690982,
            "unit": "iter/sec",
            "range": "stddev: 0.0006078799809020127",
            "extra": "mean: 734.4581677999827 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.09696021038556,
            "unit": "iter/sec",
            "range": "stddev: 0.0008276668091528635",
            "extra": "mean: 9.990313371137168 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.792242636654418,
            "unit": "iter/sec",
            "range": "stddev: 0.0006076921296435542",
            "extra": "mean: 37.324236479998945 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1880008.6832917787,
            "unit": "iter/sec",
            "range": "stddev: 1.0553677638552437e-7",
            "extra": "mean: 531.9124368346331 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.318831986383,
            "unit": "iter/sec",
            "range": "stddev: 0.000289234562363377",
            "extra": "mean: 3.7408512994360956 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.427426143266,
            "unit": "iter/sec",
            "range": "stddev: 0.0005266755139065326",
            "extra": "mean: 15.284110333337988 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.42719988353177,
            "unit": "iter/sec",
            "range": "stddev: 0.0001966823329842805",
            "extra": "mean: 18.041683543481952 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6573404149425808,
            "unit": "iter/sec",
            "range": "stddev: 0.0015296716658063333",
            "extra": "mean: 603.3763437999824 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 166.05622352266397,
            "unit": "iter/sec",
            "range": "stddev: 0.0041992569752838885",
            "extra": "mean: 6.022056739496526 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.47823566280385,
            "unit": "iter/sec",
            "range": "stddev: 0.0008490868573805401",
            "extra": "mean: 10.473591107523754 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6336172.616999896,
            "unit": "iter/sec",
            "range": "stddev: 9.274917130879791e-9",
            "extra": "mean: 157.8239830962005 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.420105697312316,
            "unit": "iter/sec",
            "range": "stddev: 0.0007080248712808944",
            "extra": "mean: 23.03080529032198 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7298549.110149755,
            "unit": "iter/sec",
            "range": "stddev: 4.721237539962347e-9",
            "extra": "mean: 137.0135330883137 nsec\nrounds: 63695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2274.3494229207613,
            "unit": "iter/sec",
            "range": "stddev: 0.00008133208871825269",
            "extra": "mean: 439.68617571339666 usec\nrounds: 1400"
          }
        ]
      }
    ]
  }
}