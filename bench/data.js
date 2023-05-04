window.BENCHMARK_DATA = {
  "lastUpdate": 1683219164247,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "daniel.krause@nokia.com",
            "name": "Dan Krause",
            "username": "dankrause-nokia"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "a1b8736e97c8edc674b17603084613d0dc3d5beb",
          "message": "refactor(impala): rely on impyla cursor for _wait_synchronous",
          "timestamp": "2023-05-04T09:47:18-07:00",
          "tree_id": "c123c338b86b4c0abd39b0965a6afbc973b2d28e",
          "url": "https://github.com/ibis-project/ibis/commit/a1b8736e97c8edc674b17603084613d0dc3d5beb"
        },
        "date": 1683219074783,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.06043668938726,
            "unit": "iter/sec",
            "range": "stddev: 0.007142165717543678",
            "extra": "mean: 10.631462442623647 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13088.51455398336,
            "unit": "iter/sec",
            "range": "stddev: 0.000004829397222811642",
            "extra": "mean: 76.4028641963545 usec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1868130.7710696366,
            "unit": "iter/sec",
            "range": "stddev: 1.2889682360048602e-7",
            "extra": "mean: 535.2944319992275 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2320.394259394656,
            "unit": "iter/sec",
            "range": "stddev: 0.00010822874676430901",
            "extra": "mean: 430.9612454656218 usec\nrounds: 827"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.458300172038795,
            "unit": "iter/sec",
            "range": "stddev: 0.000051491018087551326",
            "extra": "mean: 118.22706450000098 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.705991349264025,
            "unit": "iter/sec",
            "range": "stddev: 0.00017469645089542845",
            "extra": "mean: 18.279533472222752 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.46488447797975,
            "unit": "iter/sec",
            "range": "stddev: 0.0008274291961998638",
            "extra": "mean: 10.155904872093112 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.44210029228599,
            "unit": "iter/sec",
            "range": "stddev: 0.0008596220795885834",
            "extra": "mean: 10.056102969071873 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.69778258916158,
            "unit": "iter/sec",
            "range": "stddev: 0.00008047073465139018",
            "extra": "mean: 8.084219288888209 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17803270160999848,
            "unit": "iter/sec",
            "range": "stddev: 0.09618592884845252",
            "extra": "mean: 5.616945600199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.09450487720873,
            "unit": "iter/sec",
            "range": "stddev: 0.0006523090038107669",
            "extra": "mean: 9.606655040817124 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.68733807444693,
            "unit": "iter/sec",
            "range": "stddev: 0.00010133680114875964",
            "extra": "mean: 5.244186688523526 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 94.74168120531226,
            "unit": "iter/sec",
            "range": "stddev: 0.010788968055606368",
            "extra": "mean: 10.555016411762061 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 176.01338798447554,
            "unit": "iter/sec",
            "range": "stddev: 0.003568729449798118",
            "extra": "mean: 5.681386009615362 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.1453589213205,
            "unit": "iter/sec",
            "range": "stddev: 0.000012478531262306353",
            "extra": "mean: 1.3348544285716195 msec\nrounds: 595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.76681717021454,
            "unit": "iter/sec",
            "range": "stddev: 0.000879482414962877",
            "extra": "mean: 10.124858010525964 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.445654247040814,
            "unit": "iter/sec",
            "range": "stddev: 0.00032539843142374077",
            "extra": "mean: 18.366938809525852 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4853333285243733,
            "unit": "iter/sec",
            "range": "stddev: 0.0025212911685012804",
            "extra": "mean: 402.36051580000094 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.09492911331316,
            "unit": "iter/sec",
            "range": "stddev: 0.00040341102883569414",
            "extra": "mean: 3.982557527271782 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.20272426485816,
            "unit": "iter/sec",
            "range": "stddev: 0.0007807389356384746",
            "extra": "mean: 9.979768587496451 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7351133.237009001,
            "unit": "iter/sec",
            "range": "stddev: 4.704107772251272e-9",
            "extra": "mean: 136.03344787249122 nsec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.6088218215889,
            "unit": "iter/sec",
            "range": "stddev: 0.0002631969450742173",
            "extra": "mean: 3.576425069442458 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12969738.817598352,
            "unit": "iter/sec",
            "range": "stddev: 4.359877011498533e-9",
            "extra": "mean: 77.10255495990168 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 438.46262325920117,
            "unit": "iter/sec",
            "range": "stddev: 0.00007527304973941939",
            "extra": "mean: 2.280696111715869 msec\nrounds: 367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11963.052745797702,
            "unit": "iter/sec",
            "range": "stddev: 0.000016334998468302222",
            "extra": "mean: 83.59070391554305 usec\nrounds: 4367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1182.7008935192418,
            "unit": "iter/sec",
            "range": "stddev: 0.000015176646553423066",
            "extra": "mean: 845.5223171637272 usec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.056248123104417,
            "unit": "iter/sec",
            "range": "stddev: 0.0006666791241754894",
            "extra": "mean: 38.37851079999837 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8146.374752213043,
            "unit": "iter/sec",
            "range": "stddev: 0.000012914445919984154",
            "extra": "mean: 122.7539894022602 usec\nrounds: 3680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.5221637863827,
            "unit": "iter/sec",
            "range": "stddev: 0.00007519901645953195",
            "extra": "mean: 9.130571981306433 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6698739914154865,
            "unit": "iter/sec",
            "range": "stddev: 0.000984160530965675",
            "extra": "mean: 598.8475807999976 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4692.287410024215,
            "unit": "iter/sec",
            "range": "stddev: 0.000023112582884313927",
            "extra": "mean: 213.11567528103302 usec\nrounds: 890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 82.34709281886887,
            "unit": "iter/sec",
            "range": "stddev: 0.014320115485503281",
            "extra": "mean: 12.143719538461493 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2413.967998050206,
            "unit": "iter/sec",
            "range": "stddev: 0.00007845505297067329",
            "extra": "mean: 414.2556988359884 usec\nrounds: 1461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.81937580771466,
            "unit": "iter/sec",
            "range": "stddev: 0.000044028496032831284",
            "extra": "mean: 7.529021981308815 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2352.7709991489123,
            "unit": "iter/sec",
            "range": "stddev: 0.00008885474097039295",
            "extra": "mean: 425.0307405020456 usec\nrounds: 1395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.750426058854295,
            "unit": "iter/sec",
            "range": "stddev: 0.00022866533138769468",
            "extra": "mean: 20.512641239129746 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.716150733867057,
            "unit": "iter/sec",
            "range": "stddev: 0.00014621694350753787",
            "extra": "mean: 33.65173400000003 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1615779.0050021305,
            "unit": "iter/sec",
            "range": "stddev: 1.02270808000946e-7",
            "extra": "mean: 618.8965179669984 nsec\nrounds: 140865"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 109.43953022523505,
            "unit": "iter/sec",
            "range": "stddev: 0.00028703883177716135",
            "extra": "mean: 9.137466123455779 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2373.779007732278,
            "unit": "iter/sec",
            "range": "stddev: 0.00008115994474949848",
            "extra": "mean: 421.2692069239088 usec\nrounds: 1271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.806872573691514,
            "unit": "iter/sec",
            "range": "stddev: 0.0005957823824722336",
            "extra": "mean: 15.921824460001517 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.12394630975325,
            "unit": "iter/sec",
            "range": "stddev: 0.0008346030681838221",
            "extra": "mean: 10.512600021278427 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 271.9819470701409,
            "unit": "iter/sec",
            "range": "stddev: 0.0003007513057316655",
            "extra": "mean: 3.67671461570246 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9788.194121117194,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021323161107624043",
            "extra": "mean: 102.16389127822724 usec\nrounds: 4976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 265.82010642020236,
            "unit": "iter/sec",
            "range": "stddev: 0.0003483853971822637",
            "extra": "mean: 3.7619426666665414 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2213.6469054883173,
            "unit": "iter/sec",
            "range": "stddev: 0.00018305860222700817",
            "extra": "mean: 451.7432285703242 usec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 142311.9772163477,
            "unit": "iter/sec",
            "range": "stddev: 3.412336143375533e-7",
            "extra": "mean: 7.026815448426837 usec\nrounds: 37881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.55915094429463,
            "unit": "iter/sec",
            "range": "stddev: 0.000278771681528224",
            "extra": "mean: 6.346822726618729 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6205086.317237465,
            "unit": "iter/sec",
            "range": "stddev: 4.400289703305064e-9",
            "extra": "mean: 161.15811269570634 nsec\nrounds: 52084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9216161791846617,
            "unit": "iter/sec",
            "range": "stddev: 0.0018676862664647916",
            "extra": "mean: 1.085050395799999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1850253.601906368,
            "unit": "iter/sec",
            "range": "stddev: 1.3051783906913298e-7",
            "extra": "mean: 540.4664522580429 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.13788649838119,
            "unit": "iter/sec",
            "range": "stddev: 0.01648144665588068",
            "extra": "mean: 11.88525219277097 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.82203414364437,
            "unit": "iter/sec",
            "range": "stddev: 0.0008702123468583964",
            "extra": "mean: 10.658477074468133 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.53443522555279,
            "unit": "iter/sec",
            "range": "stddev: 0.0008983260077246589",
            "extra": "mean: 23.510362714284838 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.95546029409837,
            "unit": "iter/sec",
            "range": "stddev: 0.000040892553123886294",
            "extra": "mean: 5.1825431551707455 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 409.812014516667,
            "unit": "iter/sec",
            "range": "stddev: 0.000029382884775235452",
            "extra": "mean: 2.4401431987771316 msec\nrounds: 327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2281.0989369655276,
            "unit": "iter/sec",
            "range": "stddev: 0.00008824893876409508",
            "extra": "mean: 438.3851939935002 usec\nrounds: 1232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 259.88323330369263,
            "unit": "iter/sec",
            "range": "stddev: 0.003908386209174287",
            "extra": "mean: 3.84788194023824 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 271.8190845230612,
            "unit": "iter/sec",
            "range": "stddev: 0.00028230936235119995",
            "extra": "mean: 3.678917548245807 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.44717736506655,
            "unit": "iter/sec",
            "range": "stddev: 0.0007680148690806718",
            "extra": "mean: 9.761127887755645 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7934540863071926,
            "unit": "iter/sec",
            "range": "stddev: 0.004555596465051657",
            "extra": "mean: 1.260312369999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 84.90827026859935,
            "unit": "iter/sec",
            "range": "stddev: 0.01836363035033942",
            "extra": "mean: 11.777415755103641 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.53813462513112,
            "unit": "iter/sec",
            "range": "stddev: 0.00011961113162845232",
            "extra": "mean: 10.148355292134386 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.70639860524881,
            "unit": "iter/sec",
            "range": "stddev: 0.0008158880598652721",
            "extra": "mean: 10.234744236558933 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 675.5383548640186,
            "unit": "iter/sec",
            "range": "stddev: 0.000017604362591677487",
            "extra": "mean: 1.480300848648769 msec\nrounds: 555"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9258709794268117,
            "unit": "iter/sec",
            "range": "stddev: 0.004416652080994237",
            "extra": "mean: 1.0800640934000114 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.357411274407,
            "unit": "iter/sec",
            "range": "stddev: 0.0002635077600218931",
            "extra": "mean: 3.7403115000003955 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.328429221126637,
            "unit": "iter/sec",
            "range": "stddev: 0.0006918967169218081",
            "extra": "mean: 752.768746800001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1811477.310292784,
            "unit": "iter/sec",
            "range": "stddev: 1.0329818054506617e-7",
            "extra": "mean: 552.0356199429144 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.42016128679514,
            "unit": "iter/sec",
            "range": "stddev: 0.01610247748493895",
            "extra": "mean: 11.845511602409346 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.35515715246531,
            "unit": "iter/sec",
            "range": "stddev: 0.0005110582919345077",
            "extra": "mean: 23.065306775001204 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1757.7843179881174,
            "unit": "iter/sec",
            "range": "stddev: 0.000007516246461550198",
            "extra": "mean: 568.8980097083561 usec\nrounds: 1236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.63231500401342,
            "unit": "iter/sec",
            "range": "stddev: 0.0008440049793621498",
            "extra": "mean: 10.13866499999832 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.868711369057019,
            "unit": "iter/sec",
            "range": "stddev: 0.04088088980988432",
            "extra": "mean: 63.01708921052889 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6282742.430399415,
            "unit": "iter/sec",
            "range": "stddev: 1.0970632632142926e-8",
            "extra": "mean: 159.16616208270304 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.5542879548982,
            "unit": "iter/sec",
            "range": "stddev: 0.00012361611546999473",
            "extra": "mean: 1.877742837899541 msec\nrounds: 438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.1511932493811,
            "unit": "iter/sec",
            "range": "stddev: 0.0008295038632485084",
            "extra": "mean: 23.174330179486812 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4531746.314825183,
            "unit": "iter/sec",
            "range": "stddev: 1.5527562396461832e-8",
            "extra": "mean: 220.66548534025839 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1060993.1211813777,
            "unit": "iter/sec",
            "range": "stddev: 1.373667447037843e-7",
            "extra": "mean: 942.5131794318665 nsec\nrounds: 81301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 272.0031793058164,
            "unit": "iter/sec",
            "range": "stddev: 0.00040877479316547366",
            "extra": "mean: 3.6764276158540343 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 160.09429645546493,
            "unit": "iter/sec",
            "range": "stddev: 0.00007531418773331735",
            "extra": "mean: 6.246318714284618 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2338.5542171662687,
            "unit": "iter/sec",
            "range": "stddev: 0.00008279920109543508",
            "extra": "mean: 427.6146315785421 usec\nrounds: 1292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2303.1849466098924,
            "unit": "iter/sec",
            "range": "stddev: 0.00008456886313564372",
            "extra": "mean: 434.1813719614317 usec\nrounds: 1769"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 170.62849927059008,
            "unit": "iter/sec",
            "range": "stddev: 0.00007438401951905584",
            "extra": "mean: 5.860685666666719 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 102.55266129334026,
            "unit": "iter/sec",
            "range": "stddev: 0.00007670270742334153",
            "extra": "mean: 9.75108775714375 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5760745.325917101,
            "unit": "iter/sec",
            "range": "stddev: 1.2179216007944799e-8",
            "extra": "mean: 173.58864928491514 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.91581215580736,
            "unit": "iter/sec",
            "range": "stddev: 0.0009099705625044255",
            "extra": "mean: 10.212855084210116 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 230.98101356708554,
            "unit": "iter/sec",
            "range": "stddev: 0.010710550290742814",
            "extra": "mean: 4.3293601692918475 msec\nrounds: 254"
          }
        ]
      }
    ]
  }
}