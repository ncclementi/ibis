window.BENCHMARK_DATA = {
  "lastUpdate": 1677584023134,
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
          "id": "7c2a5f8fbb0f457e84f0d5008ceca74ec121322b",
          "message": "ci: pin poetry",
          "timestamp": "2023-02-28T06:22:31-05:00",
          "tree_id": "e2f0b344e29f804b35d84a41fe1d45c4b57cf994",
          "url": "https://github.com/ibis-project/ibis/commit/7c2a5f8fbb0f457e84f0d5008ceca74ec121322b"
        },
        "date": 1677583938984,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1707648.313651327,
            "unit": "iter/sec",
            "range": "stddev: 8.087572576256076e-8",
            "extra": "mean: 585.6006719918696 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11371.477851579024,
            "unit": "iter/sec",
            "range": "stddev: 0.00003726361121816159",
            "extra": "mean: 87.93931739146304 usec\nrounds: 460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.216796748718004,
            "unit": "iter/sec",
            "range": "stddev: 0.010574689107389951",
            "extra": "mean: 29.225412517244674 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6865414419223288,
            "unit": "iter/sec",
            "range": "stddev: 0.0011177236983499572",
            "extra": "mean: 1.4565763098000049 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12305722.859693466,
            "unit": "iter/sec",
            "range": "stddev: 6.748228960079007e-9",
            "extra": "mean: 81.26300351484598 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7190124.551055495,
            "unit": "iter/sec",
            "range": "stddev: 6.968160185958267e-9",
            "extra": "mean: 139.07964916308308 nsec\nrounds: 56180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 195.24737753110412,
            "unit": "iter/sec",
            "range": "stddev: 0.00005343392205791979",
            "extra": "mean: 5.121707715847266 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 745.8918161868331,
            "unit": "iter/sec",
            "range": "stddev: 0.000013778949946790466",
            "extra": "mean: 1.3406769967154555 msec\nrounds: 609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11703.998839476764,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016672181988358424",
            "extra": "mean: 85.44088338654566 usec\nrounds: 5008"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 142.00740129338618,
            "unit": "iter/sec",
            "range": "stddev: 0.0005162795443980292",
            "extra": "mean: 7.041886485437528 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5626.62008877082,
            "unit": "iter/sec",
            "range": "stddev: 0.00005771629775722045",
            "extra": "mean: 177.72658971515136 usec\nrounds: 914"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1200.8303860786432,
            "unit": "iter/sec",
            "range": "stddev: 0.000012973652454787701",
            "extra": "mean: 832.757075098289 usec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 143.1183537083713,
            "unit": "iter/sec",
            "range": "stddev: 0.0005114823346840831",
            "extra": "mean: 6.98722402884591 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 134.9467139284198,
            "unit": "iter/sec",
            "range": "stddev: 0.0005579502564933636",
            "extra": "mean: 7.410332351852844 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13362.71586817171,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028906507996336874",
            "extra": "mean: 74.83508665943222 usec\nrounds: 7316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 301.3645530528549,
            "unit": "iter/sec",
            "range": "stddev: 0.000046911806854802154",
            "extra": "mean: 3.3182402836361935 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 109.07657841175912,
            "unit": "iter/sec",
            "range": "stddev: 0.0002594105104170794",
            "extra": "mean: 9.167870999996401 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.64220299295594,
            "unit": "iter/sec",
            "range": "stddev: 0.00024493194278454026",
            "extra": "mean: 17.0525653703719 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.73564250764024,
            "unit": "iter/sec",
            "range": "stddev: 0.00006540186269841797",
            "extra": "mean: 13.748417770489327 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 484763.9088966931,
            "unit": "iter/sec",
            "range": "stddev: 2.3936004783909525e-7",
            "extra": "mean: 2.062859840939825 usec\nrounds: 2012"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.6129273986942,
            "unit": "iter/sec",
            "range": "stddev: 0.0002726535462060337",
            "extra": "mean: 3.501242079998974 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.84854412160166,
            "unit": "iter/sec",
            "range": "stddev: 0.00021757232558037372",
            "extra": "mean: 3.3129197389706255 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.4681373582586,
            "unit": "iter/sec",
            "range": "stddev: 0.000024603440298047457",
            "extra": "mean: 5.064108130952488 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.81042454036769,
            "unit": "iter/sec",
            "range": "stddev: 0.000599060073256259",
            "extra": "mean: 10.659796124999824 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5323.098950235817,
            "unit": "iter/sec",
            "range": "stddev: 0.00004706978077493189",
            "extra": "mean: 187.86049430016686 usec\nrounds: 2193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.347973639605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000844045242910125",
            "extra": "mean: 6.478867045802307 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.8520244695616,
            "unit": "iter/sec",
            "range": "stddev: 0.000018650453842467824",
            "extra": "mean: 1.449586236655486 msec\nrounds: 562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.661780852118156,
            "unit": "iter/sec",
            "range": "stddev: 0.0005683046066751541",
            "extra": "mean: 24.593118625002575 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.20201751379718,
            "unit": "iter/sec",
            "range": "stddev: 0.00032919523938700843",
            "extra": "mean: 36.76197912499646 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 343.17188926199003,
            "unit": "iter/sec",
            "range": "stddev: 0.000029385851422789362",
            "extra": "mean: 2.913991592232554 msec\nrounds: 309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.56636630796027,
            "unit": "iter/sec",
            "range": "stddev: 0.011542643317825193",
            "extra": "mean: 11.551830608697323 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6169574.183415999,
            "unit": "iter/sec",
            "range": "stddev: 1.1756723892963987e-8",
            "extra": "mean: 162.08574048562485 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5829.541674249116,
            "unit": "iter/sec",
            "range": "stddev: 0.00006144658310702178",
            "extra": "mean: 171.54007225255953 usec\nrounds: 2339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.79151601716758,
            "unit": "iter/sec",
            "range": "stddev: 0.0005953677987812991",
            "extra": "mean: 9.728429336843192 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.51197371478537,
            "unit": "iter/sec",
            "range": "stddev: 0.00007509951848593506",
            "extra": "mean: 7.4342824090914466 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5504.278700026385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000448541264807268",
            "extra": "mean: 181.67684713988163 usec\nrounds: 857"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5311.535008255872,
            "unit": "iter/sec",
            "range": "stddev: 0.000021173348553564404",
            "extra": "mean: 188.26949242463266 usec\nrounds: 1584"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69345.8777414004,
            "unit": "iter/sec",
            "range": "stddev: 4.438265297325887e-7",
            "extra": "mean: 14.420467842791279 usec\nrounds: 13263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 128.36819541021163,
            "unit": "iter/sec",
            "range": "stddev: 0.007852417337491726",
            "extra": "mean: 7.790091593984117 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.23539281288877,
            "unit": "iter/sec",
            "range": "stddev: 0.00019818827108591722",
            "extra": "mean: 20.310592499999746 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.2257077127106,
            "unit": "iter/sec",
            "range": "stddev: 0.000037523426940593725",
            "extra": "mean: 1.8408554414896325 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9235058240167977,
            "unit": "iter/sec",
            "range": "stddev: 0.003996431425542161",
            "extra": "mean: 1.0828302042000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8041.641590590786,
            "unit": "iter/sec",
            "range": "stddev: 0.000012680930337563185",
            "extra": "mean: 124.35271937138572 usec\nrounds: 1910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 312.144815134274,
            "unit": "iter/sec",
            "range": "stddev: 0.00021934582988582748",
            "extra": "mean: 3.2036412316181972 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1865329.159678879,
            "unit": "iter/sec",
            "range": "stddev: 1.7251235321895856e-7",
            "extra": "mean: 536.0984118063926 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.458339204732544,
            "unit": "iter/sec",
            "range": "stddev: 0.00033276526115957254",
            "extra": "mean: 95.61747619999608 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.44389504550057,
            "unit": "iter/sec",
            "range": "stddev: 0.00003909995303494556",
            "extra": "mean: 7.27569601886611 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.70182848264545,
            "unit": "iter/sec",
            "range": "stddev: 0.00021259891722582395",
            "extra": "mean: 3.239371807142431 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5177283944006486,
            "unit": "iter/sec",
            "range": "stddev: 0.00220747810851553",
            "extra": "mean: 397.18343020000475 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.569860416615175,
            "unit": "iter/sec",
            "range": "stddev: 0.000181208925767649",
            "extra": "mean: 179.53771283333234 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.30777178556406,
            "unit": "iter/sec",
            "range": "stddev: 0.0006375182728698748",
            "extra": "mean: 9.587013344085234 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9187164640136707,
            "unit": "iter/sec",
            "range": "stddev: 0.0015072933389075566",
            "extra": "mean: 1.0884751054000048 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.75448410048061,
            "unit": "iter/sec",
            "range": "stddev: 0.000498884908092739",
            "extra": "mean: 9.731935387093463 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.346565851275805,
            "unit": "iter/sec",
            "range": "stddev: 0.0030837697923898214",
            "extra": "mean: 65.1611578571415 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.83863603939866,
            "unit": "iter/sec",
            "range": "stddev: 0.00011262484324039268",
            "extra": "mean: 8.486181049020763 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1759.4949608141192,
            "unit": "iter/sec",
            "range": "stddev: 0.000006605213673600858",
            "extra": "mean: 568.3449070733908 usec\nrounds: 1442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.9062297267466,
            "unit": "iter/sec",
            "range": "stddev: 0.0002242661486552481",
            "extra": "mean: 3.2689755971732213 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 298.47409338199856,
            "unit": "iter/sec",
            "range": "stddev: 0.00023720994740841138",
            "extra": "mean: 3.3503745288880458 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8527165554355289,
            "unit": "iter/sec",
            "range": "stddev: 0.00407656961388631",
            "extra": "mean: 1.1727226281999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139170.29823427045,
            "unit": "iter/sec",
            "range": "stddev: 3.514037821745359e-7",
            "extra": "mean: 7.185441237732088 usec\nrounds: 40817"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5788.980021763735,
            "unit": "iter/sec",
            "range": "stddev: 0.000049661475422300884",
            "extra": "mean: 172.74200225954985 usec\nrounds: 2213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5487.303002425526,
            "unit": "iter/sec",
            "range": "stddev: 0.000043955612310456",
            "extra": "mean: 182.2388884954913 usec\nrounds: 3390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.80847471965124,
            "unit": "iter/sec",
            "range": "stddev: 0.00009979150190742908",
            "extra": "mean: 13.367469444438662 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1866844.6797212434,
            "unit": "iter/sec",
            "range": "stddev: 9.841164612557594e-8",
            "extra": "mean: 535.6632026555737 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17875018958817102,
            "unit": "iter/sec",
            "range": "stddev: 0.07075217576089304",
            "extra": "mean: 5.594399660800002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.45224877431392,
            "unit": "iter/sec",
            "range": "stddev: 0.00006394649364526747",
            "extra": "mean: 10.055076806451012 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.0471537686341,
            "unit": "iter/sec",
            "range": "stddev: 0.0005416738343420034",
            "extra": "mean: 14.914876229508469 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5761409.2482907185,
            "unit": "iter/sec",
            "range": "stddev: 1.306290548214599e-8",
            "extra": "mean: 173.56864560431615 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.07763715829857,
            "unit": "iter/sec",
            "range": "stddev: 0.0006778975902678908",
            "extra": "mean: 9.893385204819255 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 140.62385232587403,
            "unit": "iter/sec",
            "range": "stddev: 0.0006478063829670577",
            "extra": "mean: 7.111169147056608 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5734.991333472086,
            "unit": "iter/sec",
            "range": "stddev: 0.000056969388552141196",
            "extra": "mean: 174.36817980238843 usec\nrounds: 3654"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 321.16585987271617,
            "unit": "iter/sec",
            "range": "stddev: 0.00008669799451281666",
            "extra": "mean: 3.1136559794877265 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 130.94068441354386,
            "unit": "iter/sec",
            "range": "stddev: 0.0006628958327158536",
            "extra": "mean: 7.637045769836872 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.89575435693626,
            "unit": "iter/sec",
            "range": "stddev: 0.0008025875518815245",
            "extra": "mean: 23.312330439021633 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 699820.3590600176,
            "unit": "iter/sec",
            "range": "stddev: 1.783887439867982e-7",
            "extra": "mean: 1.42893813684297 usec\nrounds: 22372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 139.6090599503116,
            "unit": "iter/sec",
            "range": "stddev: 0.0006680136522849611",
            "extra": "mean: 7.162858917293125 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.26485186638013,
            "unit": "iter/sec",
            "range": "stddev: 0.00011859443322621026",
            "extra": "mean: 6.318522326386657 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8042387881082316,
            "unit": "iter/sec",
            "range": "stddev: 0.0020667154462289655",
            "extra": "mean: 554.2503611999791 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.74893745661592,
            "unit": "iter/sec",
            "range": "stddev: 0.000687898425205107",
            "extra": "mean: 9.456359790000306 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2479140.766990198,
            "unit": "iter/sec",
            "range": "stddev: 2.3043114723531808e-8",
            "extra": "mean: 403.36555846909795 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 306.2378559346179,
            "unit": "iter/sec",
            "range": "stddev: 0.0003109725893028241",
            "extra": "mean: 3.2654356103299684 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.40721176754768,
            "unit": "iter/sec",
            "range": "stddev: 0.0007720160027593159",
            "extra": "mean: 9.670505401962982 msec\nrounds: 102"
          }
        ]
      }
    ]
  }
}