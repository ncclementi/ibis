window.BENCHMARK_DATA = {
  "lastUpdate": 1680706755788,
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
          "id": "f600c90f5abc06f167a1110bcecf66c6b7ed35f2",
          "message": "feat(pyspark): `pivot_longer`",
          "timestamp": "2023-04-05T10:52:17-04:00",
          "tree_id": "5aad66d2171c6d506e2639c1ef20e01b00776b8a",
          "url": "https://github.com/ibis-project/ibis/commit/f600c90f5abc06f167a1110bcecf66c6b7ed35f2"
        },
        "date": 1680706653944,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1549.1884508840726,
            "unit": "iter/sec",
            "range": "stddev: 0.00010451474305087862",
            "extra": "mean: 645.499260873867 usec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 57.084720188194396,
            "unit": "iter/sec",
            "range": "stddev: 0.017432981467602634",
            "extra": "mean: 17.517822574994568 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 65.97261172025195,
            "unit": "iter/sec",
            "range": "stddev: 0.0016216558882382397",
            "extra": "mean: 15.157805245612627 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 387.8274267689737,
            "unit": "iter/sec",
            "range": "stddev: 0.00011677697954297425",
            "extra": "mean: 2.578466428563583 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 179.8302329311835,
            "unit": "iter/sec",
            "range": "stddev: 0.0006323627446210903",
            "extra": "mean: 5.56080022641507 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8593277.176789433,
            "unit": "iter/sec",
            "range": "stddev: 3.2509727732156874e-7",
            "extra": "mean: 116.3700389766344 nsec\nrounds: 89286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1107.7796213755594,
            "unit": "iter/sec",
            "range": "stddev: 0.0040412094420126995",
            "extra": "mean: 902.7066220610499 usec\nrounds: 979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 39.285290014607824,
            "unit": "iter/sec",
            "range": "stddev: 0.0005396800625047711",
            "extra": "mean: 25.454820357140306 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.73335798330621,
            "unit": "iter/sec",
            "range": "stddev: 0.0026692552683566404",
            "extra": "mean: 30.549875161295493 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 185.57347994130174,
            "unit": "iter/sec",
            "range": "stddev: 0.0012719223083843955",
            "extra": "mean: 5.388701016526216 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 94.31907837000598,
            "unit": "iter/sec",
            "range": "stddev: 0.0014685274946081932",
            "extra": "mean: 10.60230885714428 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.933375216417428,
            "unit": "iter/sec",
            "range": "stddev: 0.042511681366506994",
            "extra": "mean: 40.106884499999346 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1564.1330225443457,
            "unit": "iter/sec",
            "range": "stddev: 0.000175864137481211",
            "extra": "mean: 639.3318123117936 usec\nrounds: 991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 222.90297314388567,
            "unit": "iter/sec",
            "range": "stddev: 0.0005691242684668278",
            "extra": "mean: 4.486256894180105 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5735.297385967868,
            "unit": "iter/sec",
            "range": "stddev: 0.000041553292591909055",
            "extra": "mean: 174.3588749986403 usec\nrounds: 1144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 252.5022800339881,
            "unit": "iter/sec",
            "range": "stddev: 0.0003273451696892857",
            "extra": "mean: 3.960360278193903 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3818431.6511206264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010862555945777643",
            "extra": "mean: 261.887625959065 nsec\nrounds: 161265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 111960.76267412878,
            "unit": "iter/sec",
            "range": "stddev: 0.00002258521845199592",
            "extra": "mean: 8.931700500384979 usec\nrounds: 36364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4602823644344863,
            "unit": "iter/sec",
            "range": "stddev: 0.03755672131349176",
            "extra": "mean: 2.1725794366000173 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9933.732370123862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000784753843789808",
            "extra": "mean: 100.66709699241989 usec\nrounds: 4289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 108.03712333821224,
            "unit": "iter/sec",
            "range": "stddev: 0.005094679217678644",
            "extra": "mean: 9.256077624998227 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 178.14703809647432,
            "unit": "iter/sec",
            "range": "stddev: 0.0007455805640516018",
            "extra": "mean: 5.613340590363657 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 65.80316927806217,
            "unit": "iter/sec",
            "range": "stddev: 0.0019627639192962994",
            "extra": "mean: 15.196836428566755 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 162.4007887896612,
            "unit": "iter/sec",
            "range": "stddev: 0.0007092637441155303",
            "extra": "mean: 6.157605560002442 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9050.212417116118,
            "unit": "iter/sec",
            "range": "stddev: 0.00004644816508811935",
            "extra": "mean: 110.49464409351991 usec\nrounds: 4563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 81.68487405300287,
            "unit": "iter/sec",
            "range": "stddev: 0.0010186117035318025",
            "extra": "mean: 12.2421685972256 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 72.84102018952159,
            "unit": "iter/sec",
            "range": "stddev: 0.0009529627639044432",
            "extra": "mean: 13.728528202901986 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 774.256019751678,
            "unit": "iter/sec",
            "range": "stddev: 0.00027167599654518673",
            "extra": "mean: 1.2915624476781253 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 71.90597482535027,
            "unit": "iter/sec",
            "range": "stddev: 0.0017629978986984226",
            "extra": "mean: 13.90705017808134 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1397.9306898055356,
            "unit": "iter/sec",
            "range": "stddev: 0.00031451374701012383",
            "extra": "mean: 715.3430476149778 usec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 199.86593635409147,
            "unit": "iter/sec",
            "range": "stddev: 0.00030516273339327595",
            "extra": "mean: 5.0033538392873265 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 51.628851832756986,
            "unit": "iter/sec",
            "range": "stddev: 0.0007642000879058142",
            "extra": "mean: 19.36901489189286 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 173.4792788325141,
            "unit": "iter/sec",
            "range": "stddev: 0.000613450497890989",
            "extra": "mean: 5.764377202452241 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 7869.512830663091,
            "unit": "iter/sec",
            "range": "stddev: 0.00005539495511767167",
            "extra": "mean: 127.07266911155659 usec\nrounds: 3409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 63.01660228907598,
            "unit": "iter/sec",
            "range": "stddev: 0.0014299630243699913",
            "extra": "mean: 15.868833984617279 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 79.1506568405654,
            "unit": "iter/sec",
            "range": "stddev: 0.0010206236099323614",
            "extra": "mean: 12.6341339404715 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 177.39792302773856,
            "unit": "iter/sec",
            "range": "stddev: 0.0008191953088448942",
            "extra": "mean: 5.6370445771433095 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.76084178004726,
            "unit": "iter/sec",
            "range": "stddev: 0.006161568259521957",
            "extra": "mean: 147.91057571428772 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 65.8971499607433,
            "unit": "iter/sec",
            "range": "stddev: 0.0020167158880925492",
            "extra": "mean: 15.175163123074771 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1245123.253913443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020646802085014114",
            "extra": "mean: 803.1333419056976 nsec\nrounds: 86207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 159.12202171360383,
            "unit": "iter/sec",
            "range": "stddev: 0.004157439047177703",
            "extra": "mean: 6.284485259996586 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6619718156677088,
            "unit": "iter/sec",
            "range": "stddev: 0.015066879173592562",
            "extra": "mean: 601.6949207999915 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 70.51894459920385,
            "unit": "iter/sec",
            "range": "stddev: 0.0020030918391617334",
            "extra": "mean: 14.180586588235608 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 65.40327668296489,
            "unit": "iter/sec",
            "range": "stddev: 0.0015359746276615268",
            "extra": "mean: 15.289753827585566 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 68.00528718070694,
            "unit": "iter/sec",
            "range": "stddev: 0.00211977036540284",
            "extra": "mean: 14.704739020405158 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9534371102629884,
            "unit": "iter/sec",
            "range": "stddev: 0.009718316589005785",
            "extra": "mean: 1.0488368757999864 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1488.3037959976411,
            "unit": "iter/sec",
            "range": "stddev: 0.000200134765201897",
            "extra": "mean: 671.9058317859622 usec\nrounds: 862"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1341790.3136635215,
            "unit": "iter/sec",
            "range": "stddev: 0.00001710323838894698",
            "extra": "mean: 745.2729311107311 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09758755907398335,
            "unit": "iter/sec",
            "range": "stddev: 0.22780940345642559",
            "extra": "mean: 10.2472078356 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 117.65343256502129,
            "unit": "iter/sec",
            "range": "stddev: 0.0006277282620719383",
            "extra": "mean: 8.499539522124431 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 396250.1889117078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015796370211434582",
            "extra": "mean: 2.5236581028427456 usec\nrounds: 1518"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.519073297768773,
            "unit": "iter/sec",
            "range": "stddev: 0.03577421954102753",
            "extra": "mean: 1.9265101948000052 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56878.0102105124,
            "unit": "iter/sec",
            "range": "stddev: 0.000014278169429093659",
            "extra": "mean: 17.581487050951303 usec\nrounds: 10194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 72.47091335748632,
            "unit": "iter/sec",
            "range": "stddev: 0.0014996804337343425",
            "extra": "mean: 13.798639394361915 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1583.0314163485873,
            "unit": "iter/sec",
            "range": "stddev: 0.00015857854022504171",
            "extra": "mean: 631.6994025971987 usec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 70.80462067345898,
            "unit": "iter/sec",
            "range": "stddev: 0.0014149636256298016",
            "extra": "mean: 14.12337204109687 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 491.7451159010117,
            "unit": "iter/sec",
            "range": "stddev: 0.0003923113703735254",
            "extra": "mean: 2.033573832589524 msec\nrounds: 448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 193.76417947556857,
            "unit": "iter/sec",
            "range": "stddev: 0.0004961689531868124",
            "extra": "mean: 5.160912624338228 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 505.8174967721638,
            "unit": "iter/sec",
            "range": "stddev: 0.0002829457467301191",
            "extra": "mean: 1.9769976451613964 msec\nrounds: 465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.44483206865755504,
            "unit": "iter/sec",
            "range": "stddev: 0.042473104877975364",
            "extra": "mean: 2.248039362399993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 67.89839290068068,
            "unit": "iter/sec",
            "range": "stddev: 0.0015994788812271634",
            "extra": "mean: 14.727889089551267 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 25.44076877785025,
            "unit": "iter/sec",
            "range": "stddev: 0.0019003861326452878",
            "extra": "mean: 39.30698827272232 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1511.482273959963,
            "unit": "iter/sec",
            "range": "stddev: 0.00031650842100574455",
            "extra": "mean: 661.602201513141 usec\nrounds: 1057"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 64.1949497375133,
            "unit": "iter/sec",
            "range": "stddev: 0.0016728729802370857",
            "extra": "mean: 15.577549388057777 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3729.505554207019,
            "unit": "iter/sec",
            "range": "stddev: 0.000056270562844569686",
            "extra": "mean: 268.1320581147716 usec\nrounds: 1910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 66.19208288433146,
            "unit": "iter/sec",
            "range": "stddev: 0.0015947149852487243",
            "extra": "mean: 15.107546951611539 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 151.7025334198492,
            "unit": "iter/sec",
            "range": "stddev: 0.017972477112951885",
            "extra": "mean: 6.591847726315935 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.5747992683593,
            "unit": "iter/sec",
            "range": "stddev: 0.0025320733410553785",
            "extra": "mean: 56.899654142869494 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4890059.114759647,
            "unit": "iter/sec",
            "range": "stddev: 9.732299716319425e-7",
            "extra": "mean: 204.4965053655264 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 67.61983354376966,
            "unit": "iter/sec",
            "range": "stddev: 0.001343945380467504",
            "extra": "mean: 14.78856050943559 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5200343115560179,
            "unit": "iter/sec",
            "range": "stddev: 0.027796131925661646",
            "extra": "mean: 1.9229500395999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1576.3618142199152,
            "unit": "iter/sec",
            "range": "stddev: 0.00022906926516213166",
            "extra": "mean: 634.3721288978724 usec\nrounds: 962"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 28.468193352682636,
            "unit": "iter/sec",
            "range": "stddev: 0.0014584001396462654",
            "extra": "mean: 35.1269217407422 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3805713.5539798117,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011571604477998154",
            "extra": "mean: 262.76281328491916 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 41.37565065502415,
            "unit": "iter/sec",
            "range": "stddev: 0.0025877666013772935",
            "extra": "mean: 24.168804216220156 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1595.3708621425976,
            "unit": "iter/sec",
            "range": "stddev: 0.00017300616296554765",
            "extra": "mean: 626.8135038250548 usec\nrounds: 915"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.061869903963204,
            "unit": "iter/sec",
            "range": "stddev: 0.004139402581350621",
            "extra": "mean: 90.40062925000807 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 70.39065847831425,
            "unit": "iter/sec",
            "range": "stddev: 0.0018206962178641103",
            "extra": "mean: 14.206430535211958 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 115.24296892552627,
            "unit": "iter/sec",
            "range": "stddev: 0.0009176472420738871",
            "extra": "mean: 8.67731896638512 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1390030.9701103086,
            "unit": "iter/sec",
            "range": "stddev: 0.000014380562502291715",
            "extra": "mean: 719.4084315406606 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1481782.9901861867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013356124532052563",
            "extra": "mean: 674.862653049047 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 33.905348270125316,
            "unit": "iter/sec",
            "range": "stddev: 0.0022620300045987345",
            "extra": "mean: 29.49387194117455 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 109.74544590546513,
            "unit": "iter/sec",
            "range": "stddev: 0.001108326062935017",
            "extra": "mean: 9.111995415840774 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 139.0343909392619,
            "unit": "iter/sec",
            "range": "stddev: 0.00043930896784345215",
            "extra": "mean: 7.1924650674152755 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 58.7988632194634,
            "unit": "iter/sec",
            "range": "stddev: 0.0024261846272424802",
            "extra": "mean: 17.00713152000162 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 70.94656462116156,
            "unit": "iter/sec",
            "range": "stddev: 0.0015827312732156354",
            "extra": "mean: 14.095115180555554 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.829970796557205,
            "unit": "iter/sec",
            "range": "stddev: 0.004626128661982979",
            "extra": "mean: 261.09859659998165 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 585343.5731885233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023322146854751716",
            "extra": "mean: 1.708398359193955 usec\nrounds: 17183"
          }
        ]
      }
    ]
  }
}