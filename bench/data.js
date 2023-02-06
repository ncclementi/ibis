window.BENCHMARK_DATA = {
  "lastUpdate": 1675718954741,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e5280ea14b100afb8ba04d7dcb449a6fc4ccf0ab",
          "message": "refactor(datatype): use lazy dispatch when inferring pandas Timedelta objects",
          "timestamp": "2023-02-06T16:22:40-05:00",
          "tree_id": "ea131b72b49e21b840da6bec7a5a8a5b46a934f5",
          "url": "https://github.com/ibis-project/ibis/commit/e5280ea14b100afb8ba04d7dcb449a6fc4ccf0ab"
        },
        "date": 1675718863775,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 45.51920661611625,
            "unit": "iter/sec",
            "range": "stddev: 0.0008313829340028841",
            "extra": "mean: 21.96874845454679 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 51.75610251110555,
            "unit": "iter/sec",
            "range": "stddev: 0.014471302436418245",
            "extra": "mean: 19.321393062497805 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 448551.8127467752,
            "unit": "iter/sec",
            "range": "stddev: 0.000005445576169599126",
            "extra": "mean: 2.2293968535682596 usec\nrounds: 14620"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 58.91128523498362,
            "unit": "iter/sec",
            "range": "stddev: 0.0011487108565645917",
            "extra": "mean: 16.97467634615726 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1112491.6781956737,
            "unit": "iter/sec",
            "range": "stddev: 0.000018644535812676918",
            "extra": "mean: 898.8831283860733 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 178.89744558667152,
            "unit": "iter/sec",
            "range": "stddev: 0.0005763423820118292",
            "extra": "mean: 5.589794738100517 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 102.86644775523528,
            "unit": "iter/sec",
            "range": "stddev: 0.0013942852865686491",
            "extra": "mean: 9.72134278787814 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3465.393614135611,
            "unit": "iter/sec",
            "range": "stddev: 0.00023017773699321868",
            "extra": "mean: 288.5675081528753 usec\nrounds: 368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 196.49025385595468,
            "unit": "iter/sec",
            "range": "stddev: 0.00038945429674876186",
            "extra": "mean: 5.089310947366842 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 151.5381313692591,
            "unit": "iter/sec",
            "range": "stddev: 0.0008472272253213965",
            "extra": "mean: 6.598999149351125 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 135.41371098261567,
            "unit": "iter/sec",
            "range": "stddev: 0.010015032799013083",
            "extra": "mean: 7.384776569105171 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 84.20934330465805,
            "unit": "iter/sec",
            "range": "stddev: 0.0007776887187646772",
            "extra": "mean: 11.875166825397686 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3294480.5926394146,
            "unit": "iter/sec",
            "range": "stddev: 4.149930946280945e-7",
            "extra": "mean: 303.53798478375757 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 133.0637343187412,
            "unit": "iter/sec",
            "range": "stddev: 0.001404585456198162",
            "extra": "mean: 7.515195670103451 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 58.69471965699738,
            "unit": "iter/sec",
            "range": "stddev: 0.001318113592707387",
            "extra": "mean: 17.037307714285735 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 5.97272180307155,
            "unit": "iter/sec",
            "range": "stddev: 0.004809169249500959",
            "extra": "mean: 167.42785499999968 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1147539.1993495002,
            "unit": "iter/sec",
            "range": "stddev: 0.000004109016753304556",
            "extra": "mean: 871.4299263736393 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 92.37106202458844,
            "unit": "iter/sec",
            "range": "stddev: 0.0142344054532294",
            "extra": "mean: 10.825901295081007 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 7921449.080498129,
            "unit": "iter/sec",
            "range": "stddev: 1.974318380046866e-7",
            "extra": "mean: 126.23952888389191 nsec\nrounds: 83334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2621.1157001316337,
            "unit": "iter/sec",
            "range": "stddev: 0.0035129588896438274",
            "extra": "mean: 381.5169242432829 usec\nrounds: 1452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 98181.6026960777,
            "unit": "iter/sec",
            "range": "stddev: 0.000007875974121731558",
            "extra": "mean: 10.185207539293401 usec\nrounds: 23981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3420.3339445579645,
            "unit": "iter/sec",
            "range": "stddev: 0.00014850949987432578",
            "extra": "mean: 292.36911255144634 usec\nrounds: 1697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 146.59625526362544,
            "unit": "iter/sec",
            "range": "stddev: 0.0005714065082481735",
            "extra": "mean: 6.821456647727395 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.345511251676076,
            "unit": "iter/sec",
            "range": "stddev: 0.006162172256020434",
            "extra": "mean: 107.00324177777374 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 161.72402957520816,
            "unit": "iter/sec",
            "range": "stddev: 0.0005574470101946302",
            "extra": "mean: 6.1833730128209545 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 167.06400054799224,
            "unit": "iter/sec",
            "range": "stddev: 0.00041042351779693265",
            "extra": "mean: 5.985729999999201 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3642496.8639947963,
            "unit": "iter/sec",
            "range": "stddev: 2.653677776756057e-7",
            "extra": "mean: 274.5369556485837 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 107.79261521220518,
            "unit": "iter/sec",
            "range": "stddev: 0.001593716974223143",
            "extra": "mean: 9.277073369370964 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 60.01316392280027,
            "unit": "iter/sec",
            "range": "stddev: 0.001433047530444877",
            "extra": "mean: 16.66301082353165 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2755.028309752868,
            "unit": "iter/sec",
            "range": "stddev: 0.00009248300254574323",
            "extra": "mean: 362.97267670897435 usec\nrounds: 863"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 69.71519680561629,
            "unit": "iter/sec",
            "range": "stddev: 0.001238593943488033",
            "extra": "mean: 14.344074833328731 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 24.961684968051014,
            "unit": "iter/sec",
            "range": "stddev: 0.0014313122667842365",
            "extra": "mean: 40.06139815000154 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 6825.575448274852,
            "unit": "iter/sec",
            "range": "stddev: 0.0001020600342628853",
            "extra": "mean: 146.50779374986584 usec\nrounds: 4160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.78609231025282,
            "unit": "iter/sec",
            "range": "stddev: 0.001855131767715015",
            "extra": "mean: 22.32836017647093 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 59.31511469737567,
            "unit": "iter/sec",
            "range": "stddev: 0.0018122148884915981",
            "extra": "mean: 16.85910926923056 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 93.01917854532121,
            "unit": "iter/sec",
            "range": "stddev: 0.0004993173209155961",
            "extra": "mean: 10.750471200009315 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 176.22849295982772,
            "unit": "iter/sec",
            "range": "stddev: 0.0005119392646193513",
            "extra": "mean: 5.674451294479127 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 60.220679742431145,
            "unit": "iter/sec",
            "range": "stddev: 0.0015762008501082544",
            "extra": "mean: 16.605591372881925 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 15.79727998732071,
            "unit": "iter/sec",
            "range": "stddev: 0.001429706180619939",
            "extra": "mean: 63.30203685714407 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 31.398385207098226,
            "unit": "iter/sec",
            "range": "stddev: 0.0011899090827511875",
            "extra": "mean: 31.84877162962923 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 36.96261101845692,
            "unit": "iter/sec",
            "range": "stddev: 0.0023441612274854823",
            "extra": "mean: 27.054365815787737 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5121893803007724,
            "unit": "iter/sec",
            "range": "stddev: 0.025869030552662056",
            "extra": "mean: 1.952402838599994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1047.3876445468238,
            "unit": "iter/sec",
            "range": "stddev: 0.00023992427527909921",
            "extra": "mean: 954.7563456629018 usec\nrounds: 784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.110922918125425,
            "unit": "iter/sec",
            "range": "stddev: 0.001852298949066282",
            "extra": "mean: 41.47497809999834 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.07877225413959445,
            "unit": "iter/sec",
            "range": "stddev: 0.13545177156167637",
            "extra": "mean: 12.694825239199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 23.260376092592516,
            "unit": "iter/sec",
            "range": "stddev: 0.034727990163826626",
            "extra": "mean: 42.99156625926007 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 161.65869433242722,
            "unit": "iter/sec",
            "range": "stddev: 0.0004585356248100879",
            "extra": "mean: 6.185872056739787 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 53.912431775454316,
            "unit": "iter/sec",
            "range": "stddev: 0.0013134786261783944",
            "extra": "mean: 18.548597551025104 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 59.337045889315604,
            "unit": "iter/sec",
            "range": "stddev: 0.0004789134679769176",
            "extra": "mean: 16.852878079999982 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11793.349049978107,
            "unit": "iter/sec",
            "range": "stddev: 0.00003241196139356313",
            "extra": "mean: 84.79355573740577 usec\nrounds: 4270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 299557.7261675683,
            "unit": "iter/sec",
            "range": "stddev: 0.000004340143093470328",
            "extra": "mean: 3.3382547423951747 usec\nrounds: 1476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 98.31696436227573,
            "unit": "iter/sec",
            "range": "stddev: 0.0017273409977091867",
            "extra": "mean: 10.171184662651164 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7784.367015282168,
            "unit": "iter/sec",
            "range": "stddev: 0.000017064203110494337",
            "extra": "mean: 128.46259664232338 usec\nrounds: 4051"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 464.5766566934219,
            "unit": "iter/sec",
            "range": "stddev: 0.00019726960532549234",
            "extra": "mean: 2.152497301774481 msec\nrounds: 338"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 100.43429273769246,
            "unit": "iter/sec",
            "range": "stddev: 0.0003402759996856124",
            "extra": "mean: 9.956758520834441 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 73.38830514816152,
            "unit": "iter/sec",
            "range": "stddev: 0.0006140547160996876",
            "extra": "mean: 13.626149261536003 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4060580.5240298435,
            "unit": "iter/sec",
            "range": "stddev: 6.061585920526086e-7",
            "extra": "mean: 246.2702054745996 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2869.2224903080337,
            "unit": "iter/sec",
            "range": "stddev: 0.00014296085787158104",
            "extra": "mean: 348.5264748125692 usec\nrounds: 1211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 46079.7105675513,
            "unit": "iter/sec",
            "range": "stddev: 0.000013565385661038964",
            "extra": "mean: 21.701525198037725 usec\nrounds: 2778"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1224294.350212002,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015984314197971827",
            "extra": "mean: 816.797038903951 nsec\nrounds: 147038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 381.4518740702834,
            "unit": "iter/sec",
            "range": "stddev: 0.0002040215099729227",
            "extra": "mean: 2.6215626871340203 msec\nrounds: 342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 23.910656755052923,
            "unit": "iter/sec",
            "range": "stddev: 0.0015482047837055",
            "extra": "mean: 41.822356041670616 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 100.81891711974765,
            "unit": "iter/sec",
            "range": "stddev: 0.0010987850311192683",
            "extra": "mean: 9.918773466017793 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9864510654175364,
            "unit": "iter/sec",
            "range": "stddev: 0.04129910087937378",
            "extra": "mean: 1.0137350296000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.280406730649851,
            "unit": "iter/sec",
            "range": "stddev: 0.004732123804515953",
            "extra": "mean: 304.84024759999784 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5086267785070165,
            "unit": "iter/sec",
            "range": "stddev: 0.01932080753171401",
            "extra": "mean: 1.9660781584000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 56.84411322754526,
            "unit": "iter/sec",
            "range": "stddev: 0.001642720690669527",
            "extra": "mean: 17.591971150944524 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 103.98342213098648,
            "unit": "iter/sec",
            "range": "stddev: 0.001615026933718028",
            "extra": "mean: 9.616917576922154 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3295.912523904824,
            "unit": "iter/sec",
            "range": "stddev: 0.00014044592830413872",
            "extra": "mean: 303.4061106740941 usec\nrounds: 2539"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3006.943341536138,
            "unit": "iter/sec",
            "range": "stddev: 0.00025885845488349865",
            "extra": "mean: 332.56363237264594 usec\nrounds: 2187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4617134551573157,
            "unit": "iter/sec",
            "range": "stddev: 0.05228073771154294",
            "extra": "mean: 2.165845480200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 104.29793448083424,
            "unit": "iter/sec",
            "range": "stddev: 0.0012207398481478323",
            "extra": "mean: 9.587917584156564 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 690.6671665251014,
            "unit": "iter/sec",
            "range": "stddev: 0.0001487658140365624",
            "extra": "mean: 1.4478754000008718 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 201.1879570298735,
            "unit": "iter/sec",
            "range": "stddev: 0.00035113164235315853",
            "extra": "mean: 4.970476437869063 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.38758797857200034,
            "unit": "iter/sec",
            "range": "stddev: 0.031761437967894865",
            "extra": "mean: 2.580059380800003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 288.30110910376163,
            "unit": "iter/sec",
            "range": "stddev: 0.00044906040571990454",
            "extra": "mean: 3.468595743903617 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2799.468956085219,
            "unit": "iter/sec",
            "range": "stddev: 0.0001386059358373118",
            "extra": "mean: 357.21060518506386 usec\nrounds: 1350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.504466252848212,
            "unit": "iter/sec",
            "range": "stddev: 0.008539711874752089",
            "extra": "mean: 664.6875582000121 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 91.12205928394319,
            "unit": "iter/sec",
            "range": "stddev: 0.0015126369116887364",
            "extra": "mean: 10.974291053760371 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1254105.1024324822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034988900102883474",
            "extra": "mean: 797.3813343557761 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 104.70401692622362,
            "unit": "iter/sec",
            "range": "stddev: 0.0012254784243442025",
            "extra": "mean: 9.550731952381717 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6274.841893977186,
            "unit": "iter/sec",
            "range": "stddev: 0.00008733819566702219",
            "extra": "mean: 159.3665652292905 usec\nrounds: 3572"
          }
        ]
      }
    ]
  }
}