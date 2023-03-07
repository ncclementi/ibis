window.BENCHMARK_DATA = {
  "lastUpdate": 1678148431658,
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
          "id": "82b905d8a37cd30dec943030c7589fb865296ec8",
          "message": "chore(deps): update clickhouse/clickhouse-server docker tag to v23.2.3.17",
          "timestamp": "2023-03-06T19:15:22-05:00",
          "tree_id": "3b8be5a49346ca98d37bd1bb8d900da03f9f65e5",
          "url": "https://github.com/ibis-project/ibis/commit/82b905d8a37cd30dec943030c7589fb865296ec8"
        },
        "date": 1678148340859,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 115.28363893532124,
            "unit": "iter/sec",
            "range": "stddev: 0.000511554897808357",
            "extra": "mean: 8.674257763159613 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 93.74128691064553,
            "unit": "iter/sec",
            "range": "stddev: 0.007754495837160332",
            "extra": "mean: 10.667658114755808 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11752.253345337513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034266498571219167",
            "extra": "mean: 85.09006491055021 usec\nrounds: 6378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 249.31519798559975,
            "unit": "iter/sec",
            "range": "stddev: 0.0038985265982443705",
            "extra": "mean: 4.010986927711318 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 307.1332621534987,
            "unit": "iter/sec",
            "range": "stddev: 0.0001811712294441564",
            "extra": "mean: 3.2559156666666116 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.30418193060264,
            "unit": "iter/sec",
            "range": "stddev: 0.012615349962611282",
            "extra": "mean: 11.32449197916685 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12309034.639267482,
            "unit": "iter/sec",
            "range": "stddev: 8.941944435515531e-9",
            "extra": "mean: 81.24113948059973 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.74574653772,
            "unit": "iter/sec",
            "range": "stddev: 0.0006450601060990564",
            "extra": "mean: 8.714919987655255 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 278.35371511980225,
            "unit": "iter/sec",
            "range": "stddev: 0.0002539890533996913",
            "extra": "mean: 3.592551295999783 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.66819015732254,
            "unit": "iter/sec",
            "range": "stddev: 0.0000617398774424501",
            "extra": "mean: 10.563210285716552 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5521.834790126636,
            "unit": "iter/sec",
            "range": "stddev: 0.00004408587056745258",
            "extra": "mean: 181.099224806229 usec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6266682.721697213,
            "unit": "iter/sec",
            "range": "stddev: 1.657006174139351e-8",
            "extra": "mean: 159.57405926082893 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6741436177099714,
            "unit": "iter/sec",
            "range": "stddev: 0.03217070710890601",
            "extra": "mean: 1.483363446200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2461938.694425387,
            "unit": "iter/sec",
            "range": "stddev: 1.558175465439114e-8",
            "extra": "mean: 406.18395667800587 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.66027063615938,
            "unit": "iter/sec",
            "range": "stddev: 0.0005686850957138308",
            "extra": "mean: 8.219610188034416 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 632.8962238903184,
            "unit": "iter/sec",
            "range": "stddev: 0.0033632745266795805",
            "extra": "mean: 1.5800378675877533 msec\nrounds: 506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.08605171160254,
            "unit": "iter/sec",
            "range": "stddev: 0.0006089590882280521",
            "extra": "mean: 8.25858953913004 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.25928765091994,
            "unit": "iter/sec",
            "range": "stddev: 0.0007087485189058071",
            "extra": "mean: 36.68474439999727 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.87570425298873,
            "unit": "iter/sec",
            "range": "stddev: 0.000037822634577717696",
            "extra": "mean: 6.5843316079985925 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5249.2715813278455,
            "unit": "iter/sec",
            "range": "stddev: 0.00004723865710448368",
            "extra": "mean: 190.50262203180617 usec\nrounds: 2442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5717.197784301875,
            "unit": "iter/sec",
            "range": "stddev: 0.00005082829911086128",
            "extra": "mean: 174.91086328091933 usec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.87477331406717,
            "unit": "iter/sec",
            "range": "stddev: 0.00007356890056696585",
            "extra": "mean: 13.722169614035257 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.511423393896766,
            "unit": "iter/sec",
            "range": "stddev: 0.0014408628637739632",
            "extra": "mean: 398.1805705999989 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.402958345629552,
            "unit": "iter/sec",
            "range": "stddev: 0.0003183002249413333",
            "extra": "mean: 96.12650236363928 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 84.31196085617312,
            "unit": "iter/sec",
            "range": "stddev: 0.009932459801689802",
            "extra": "mean: 11.860713353659149 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 307.7750261952382,
            "unit": "iter/sec",
            "range": "stddev: 0.0002115996147595618",
            "extra": "mean: 3.2491265206347393 msec\nrounds: 315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.82611424504954,
            "unit": "iter/sec",
            "range": "stddev: 0.0005697361548395257",
            "extra": "mean: 8.208420716666135 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1758.2388060840171,
            "unit": "iter/sec",
            "range": "stddev: 0.000006746813836029696",
            "extra": "mean: 568.7509549554414 usec\nrounds: 1332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 190.56134791211403,
            "unit": "iter/sec",
            "range": "stddev: 0.00342360795629176",
            "extra": "mean: 5.247653897059938 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7892745471446605,
            "unit": "iter/sec",
            "range": "stddev: 0.0026109989624114455",
            "extra": "mean: 558.8857235999967 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5590.748945692564,
            "unit": "iter/sec",
            "range": "stddev: 0.000043807305383735385",
            "extra": "mean: 178.8669120566499 usec\nrounds: 2115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.75471615945631,
            "unit": "iter/sec",
            "range": "stddev: 0.000544419898966154",
            "extra": "mean: 8.213234210084709 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.34501308433883,
            "unit": "iter/sec",
            "range": "stddev: 0.00004131636344476445",
            "extra": "mean: 5.145488346366961 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.3908284916487,
            "unit": "iter/sec",
            "range": "stddev: 0.00003312796074531308",
            "extra": "mean: 1.8369155901665615 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.57567607837564,
            "unit": "iter/sec",
            "range": "stddev: 0.00017629415966820627",
            "extra": "mean: 3.3380547215668397 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.99013119579025,
            "unit": "iter/sec",
            "range": "stddev: 0.0005275223404193835",
            "extra": "mean: 9.346656451612493 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70932.68326142919,
            "unit": "iter/sec",
            "range": "stddev: 4.689565806797942e-7",
            "extra": "mean: 14.097873561534453 usec\nrounds: 14165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.10699865272757,
            "unit": "iter/sec",
            "range": "stddev: 0.00015226891234054296",
            "extra": "mean: 20.363696162165198 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4640.197204530861,
            "unit": "iter/sec",
            "range": "stddev: 0.001979630730776426",
            "extra": "mean: 215.50808207538307 usec\nrounds: 2583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.572816482567682,
            "unit": "iter/sec",
            "range": "stddev: 0.00038071664683314316",
            "extra": "mean: 179.44247816666822 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9209783680519854,
            "unit": "iter/sec",
            "range": "stddev: 0.002723371128865889",
            "extra": "mean: 1.0858018328000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.58907855163926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000398969787372499",
            "extra": "mean: 10.143111333333106 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.41596758867044,
            "unit": "iter/sec",
            "range": "stddev: 0.00006282883001497471",
            "extra": "mean: 6.3124949790195135 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 282.0575462694029,
            "unit": "iter/sec",
            "range": "stddev: 0.0005246689354737539",
            "extra": "mean: 3.545375804428453 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13539.708315591697,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018571291978186621",
            "extra": "mean: 73.85683477748532 usec\nrounds: 6694"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.88678804768291,
            "unit": "iter/sec",
            "range": "stddev: 0.00012893950394008316",
            "extra": "mean: 14.73040673683974 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7263289.643529983,
            "unit": "iter/sec",
            "range": "stddev: 7.264147035883269e-9",
            "extra": "mean: 137.67866202215714 nsec\nrounds: 68028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.07872873854232,
            "unit": "iter/sec",
            "range": "stddev: 0.00005208165810340807",
            "extra": "mean: 8.397805473685152 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8500553529099114,
            "unit": "iter/sec",
            "range": "stddev: 0.0017277215158077986",
            "extra": "mean: 1.1763939801999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1773557433310613,
            "unit": "iter/sec",
            "range": "stddev: 0.06942494252218026",
            "extra": "mean: 5.638385209400008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.520477917420385,
            "unit": "iter/sec",
            "range": "stddev: 0.00010809008315970077",
            "extra": "mean: 64.43100562499993 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.53192781157955,
            "unit": "iter/sec",
            "range": "stddev: 0.0005620770949463873",
            "extra": "mean: 9.386857260000738 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 65.26721351745822,
            "unit": "iter/sec",
            "range": "stddev: 0.013924309635035105",
            "extra": "mean: 15.321628519233652 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.58239570288652,
            "unit": "iter/sec",
            "range": "stddev: 0.0000615503234248931",
            "extra": "mean: 6.113127245160857 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.921670632354262,
            "unit": "iter/sec",
            "range": "stddev: 0.0041776026844121275",
            "extra": "mean: 1.084986289999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.14338262519975,
            "unit": "iter/sec",
            "range": "stddev: 0.00007142976801092772",
            "extra": "mean: 8.997386766355877 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5876.116689106101,
            "unit": "iter/sec",
            "range": "stddev: 0.00004232489656742812",
            "extra": "mean: 170.18041895831104 usec\nrounds: 2437"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.02157547948173,
            "unit": "iter/sec",
            "range": "stddev: 0.00024622649655877814",
            "extra": "mean: 21.266833146336378 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11629.085596179633,
            "unit": "iter/sec",
            "range": "stddev: 0.000012049387782660679",
            "extra": "mean: 85.99128381413911 usec\nrounds: 4813"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1636943.3038398619,
            "unit": "iter/sec",
            "range": "stddev: 7.808323094343076e-8",
            "extra": "mean: 610.8947070153553 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 314.54851170748975,
            "unit": "iter/sec",
            "range": "stddev: 0.00021252585218424567",
            "extra": "mean: 3.1791598522327043 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 485654.33309641463,
            "unit": "iter/sec",
            "range": "stddev: 8.578803254120979e-8",
            "extra": "mean: 2.0590776852009984 usec\nrounds: 2021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.98882546762464,
            "unit": "iter/sec",
            "range": "stddev: 0.0005716098858772611",
            "extra": "mean: 9.804995747474711 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2499877.23578059,
            "unit": "iter/sec",
            "range": "stddev: 1.8331015311423537e-8",
            "extra": "mean: 400.01964323972277 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139042.95393217984,
            "unit": "iter/sec",
            "range": "stddev: 3.135531187658499e-7",
            "extra": "mean: 7.192022117767752 usec\nrounds: 34723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.69056527333541,
            "unit": "iter/sec",
            "range": "stddev: 0.0006146086697111402",
            "extra": "mean: 9.931417082478303 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.607763010272485,
            "unit": "iter/sec",
            "range": "stddev: 0.0005006878580187212",
            "extra": "mean: 28.083763636359574 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 352.0020416560353,
            "unit": "iter/sec",
            "range": "stddev: 0.000032752224116324505",
            "extra": "mean: 2.8408926132796886 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7937.920657033392,
            "unit": "iter/sec",
            "range": "stddev: 0.000018005145683883293",
            "extra": "mean: 125.97757564053634 usec\nrounds: 3933"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5621182.777102543,
            "unit": "iter/sec",
            "range": "stddev: 1.335182534201103e-8",
            "extra": "mean: 177.8985027980525 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 296.54849946486706,
            "unit": "iter/sec",
            "range": "stddev: 0.00024743046623818606",
            "extra": "mean: 3.3721296914485754 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.9801898130845,
            "unit": "iter/sec",
            "range": "stddev: 0.000014914260356424006",
            "extra": "mean: 1.3315930480787985 msec\nrounds: 624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 708922.7123796861,
            "unit": "iter/sec",
            "range": "stddev: 1.6203957740781427e-7",
            "extra": "mean: 1.410591003133806 usec\nrounds: 24631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.63226361153386,
            "unit": "iter/sec",
            "range": "stddev: 0.00018851847449843288",
            "extra": "mean: 3.219240617100115 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.606789414435454,
            "unit": "iter/sec",
            "range": "stddev: 0.000720123748171801",
            "extra": "mean: 26.59094316666521 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5328.661057074865,
            "unit": "iter/sec",
            "range": "stddev: 0.000036930747543937004",
            "extra": "mean: 187.66440373840248 usec\nrounds: 3210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1833650.806950691,
            "unit": "iter/sec",
            "range": "stddev: 7.742536026531023e-8",
            "extra": "mean: 545.3601068476999 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 324.7962124223554,
            "unit": "iter/sec",
            "range": "stddev: 0.000025902298666231124",
            "extra": "mean: 3.0788536373066737 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 107.48492616368442,
            "unit": "iter/sec",
            "range": "stddev: 0.011812677166404774",
            "extra": "mean: 9.303630152540094 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.8477329188135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001602232026066776",
            "extra": "mean: 7.30739178991925 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.151043596576706,
            "unit": "iter/sec",
            "range": "stddev: 0.00008822905201756164",
            "extra": "mean: 16.905872478264673 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1150.9344132175513,
            "unit": "iter/sec",
            "range": "stddev: 0.000017959664069509114",
            "extra": "mean: 868.8592403839943 usec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 311.269886469912,
            "unit": "iter/sec",
            "range": "stddev: 0.00020822511460141555",
            "extra": "mean: 3.2126461423587216 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.35760797864754,
            "unit": "iter/sec",
            "range": "stddev: 0.0005657310363025831",
            "extra": "mean: 8.240109677968823 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5404.889286230859,
            "unit": "iter/sec",
            "range": "stddev: 0.00005772196276978902",
            "extra": "mean: 185.01766586552185 usec\nrounds: 3328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5780.995240549047,
            "unit": "iter/sec",
            "range": "stddev: 0.00004722817147488306",
            "extra": "mean: 172.98059562232498 usec\nrounds: 3655"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.16217542125916,
            "unit": "iter/sec",
            "range": "stddev: 0.000181889784720473",
            "extra": "mean: 9.331650800004354 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.63586616532403,
            "unit": "iter/sec",
            "range": "stddev: 0.0006158744053704208",
            "extra": "mean: 9.466481757578086 msec\nrounds: 99"
          }
        ]
      }
    ]
  }
}