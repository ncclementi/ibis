window.BENCHMARK_DATA = {
  "lastUpdate": 1676551134586,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "a794ace76daa781afec83db816d45a317d27e16b",
          "message": "feat(impala): implement ops.Radians, ops.Degress",
          "timestamp": "2023-02-16T07:26:07-05:00",
          "tree_id": "840ab9ac5c1a27b99ad4e9c9219a2b9f0806c254",
          "url": "https://github.com/ibis-project/ibis/commit/a794ace76daa781afec83db816d45a317d27e16b"
        },
        "date": 1676550699520,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.16171662970658,
            "unit": "iter/sec",
            "range": "stddev: 0.00015988302053358315",
            "extra": "mean: 14.889434787878633 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18721.026479637367,
            "unit": "iter/sec",
            "range": "stddev: 0.000023913614696090066",
            "extra": "mean: 53.415874449389186 usec\nrounds: 908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 81.88334260796562,
            "unit": "iter/sec",
            "range": "stddev: 0.006210403133889535",
            "extra": "mean: 12.21249607246395 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.77962311124618,
            "unit": "iter/sec",
            "range": "stddev: 0.0005707653651891316",
            "extra": "mean: 10.550791057971022 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 145.5566882489121,
            "unit": "iter/sec",
            "range": "stddev: 0.005592569594915985",
            "extra": "mean: 6.870175544870396 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5780424666757205,
            "unit": "iter/sec",
            "range": "stddev: 0.028863064857487145",
            "extra": "mean: 1.7299767018000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.936623185349895,
            "unit": "iter/sec",
            "range": "stddev: 0.0008698804910007672",
            "extra": "mean: 23.290140812498805 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7436514635188114,
            "unit": "iter/sec",
            "range": "stddev: 0.006314471213699369",
            "extra": "mean: 1.3447159712 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.38508916722522,
            "unit": "iter/sec",
            "range": "stddev: 0.0006285438538984105",
            "extra": "mean: 11.443599926828952 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9585.466646811168,
            "unit": "iter/sec",
            "range": "stddev: 0.000017395137075195984",
            "extra": "mean: 104.32460273936412 usec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 109.59732308863943,
            "unit": "iter/sec",
            "range": "stddev: 0.014079888673392294",
            "extra": "mean: 9.124310446809238 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.507652927837576,
            "unit": "iter/sec",
            "range": "stddev: 0.00018102226760541846",
            "extra": "mean: 15.746133794871609 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 217.4971403476029,
            "unit": "iter/sec",
            "range": "stddev: 0.00027766970507341765",
            "extra": "mean: 4.59776159999991 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 128.8969332832927,
            "unit": "iter/sec",
            "range": "stddev: 0.0005126993323506991",
            "extra": "mean: 7.758136477942238 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.80756410357337,
            "unit": "iter/sec",
            "range": "stddev: 0.0005698840024039521",
            "extra": "mean: 11.388540500001236 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3937.0204796631897,
            "unit": "iter/sec",
            "range": "stddev: 0.000042722839426202155",
            "extra": "mean: 253.99918673665357 usec\nrounds: 573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 114.81362336213373,
            "unit": "iter/sec",
            "range": "stddev: 0.000570682589205376",
            "extra": "mean: 8.709767802083027 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5625.0710995818135,
            "unit": "iter/sec",
            "range": "stddev: 0.00005039272497568371",
            "extra": "mean: 177.7755307082862 usec\nrounds: 635"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 87.03425619586174,
            "unit": "iter/sec",
            "range": "stddev: 0.00017421294755317268",
            "extra": "mean: 11.489728799998034 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.54822862335425,
            "unit": "iter/sec",
            "range": "stddev: 0.00010187455975656314",
            "extra": "mean: 3.7800290903619387 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 616.4943407887683,
            "unit": "iter/sec",
            "range": "stddev: 0.00004838543967431322",
            "extra": "mean: 1.622074906187393 msec\nrounds: 501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.97957100660901,
            "unit": "iter/sec",
            "range": "stddev: 0.0004445464697268057",
            "extra": "mean: 24.40240284210697 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1499568.5430528356,
            "unit": "iter/sec",
            "range": "stddev: 1.2104510785478843e-7",
            "extra": "mean: 666.8584804827865 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1509601.1624497552,
            "unit": "iter/sec",
            "range": "stddev: 8.440853161813756e-8",
            "extra": "mean: 662.4266229215251 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.945115526228218,
            "unit": "iter/sec",
            "range": "stddev: 0.02751797703686638",
            "extra": "mean: 34.54814333333248 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 397827.60853902594,
            "unit": "iter/sec",
            "range": "stddev: 3.1711081355778877e-7",
            "extra": "mean: 2.5136515881147106 usec\nrounds: 2078"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 609143.8542215765,
            "unit": "iter/sec",
            "range": "stddev: 1.5581515848935318e-7",
            "extra": "mean: 1.6416483447541266 usec\nrounds: 23924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8555243580252285,
            "unit": "iter/sec",
            "range": "stddev: 0.009332782171755375",
            "extra": "mean: 1.1688737914 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5365349.787351188,
            "unit": "iter/sec",
            "range": "stddev: 5.338452507484387e-9",
            "extra": "mean: 186.3811381613121 nsec\nrounds: 52084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 156.31324912189027,
            "unit": "iter/sec",
            "range": "stddev: 0.0007355931996458712",
            "extra": "mean: 6.397410364237377 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1334636191908694,
            "unit": "iter/sec",
            "range": "stddev: 0.0645224320067026",
            "extra": "mean: 7.492678574599995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5553.7197961007505,
            "unit": "iter/sec",
            "range": "stddev: 0.000049803926174696565",
            "extra": "mean: 180.05949826674671 usec\nrounds: 2019"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.81819429517364,
            "unit": "iter/sec",
            "range": "stddev: 0.00015804302191538706",
            "extra": "mean: 7.001909000006127 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.178191756412,
            "unit": "iter/sec",
            "range": "stddev: 0.0002712963518994142",
            "extra": "mean: 10.96753489772598 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4647.637762060143,
            "unit": "iter/sec",
            "range": "stddev: 0.00005134793297138658",
            "extra": "mean: 215.1630680349609 usec\nrounds: 1852"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.265619379121755,
            "unit": "iter/sec",
            "range": "stddev: 0.001172548902857374",
            "extra": "mean: 42.98187740909172 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4576622.750581404,
            "unit": "iter/sec",
            "range": "stddev: 1.589450031650867e-8",
            "extra": "mean: 218.50173250012585 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.44771464341216,
            "unit": "iter/sec",
            "range": "stddev: 0.0002850238290270938",
            "extra": "mean: 4.057655805195478 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11010215.098827597,
            "unit": "iter/sec",
            "range": "stddev: 4.135465037690182e-9",
            "extra": "mean: 90.8247469304829 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8008121633233778,
            "unit": "iter/sec",
            "range": "stddev: 0.01659537817263561",
            "extra": "mean: 1.2487322818000053 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.993474182244043,
            "unit": "iter/sec",
            "range": "stddev: 0.00039302062154717386",
            "extra": "mean: 111.19173522222543 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.325861256409992,
            "unit": "iter/sec",
            "range": "stddev: 0.00039654135702783767",
            "extra": "mean: 75.04205399999802 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 247.28392435013254,
            "unit": "iter/sec",
            "range": "stddev: 0.0005569390301535046",
            "extra": "mean: 4.04393452840908 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 262.45876372134603,
            "unit": "iter/sec",
            "range": "stddev: 0.00009669065242638615",
            "extra": "mean: 3.810122343873058 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1415.1307541233475,
            "unit": "iter/sec",
            "range": "stddev: 0.00002345709517686315",
            "extra": "mean: 706.6484825421556 usec\nrounds: 1117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 240.70178383318438,
            "unit": "iter/sec",
            "range": "stddev: 0.00030147923384891414",
            "extra": "mean: 4.154518442177556 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 213.53062513581884,
            "unit": "iter/sec",
            "range": "stddev: 0.0004614330076410542",
            "extra": "mean: 4.6831689803930345 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.04900135062073,
            "unit": "iter/sec",
            "range": "stddev: 0.0007393844651834233",
            "extra": "mean: 12.49234822580639 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 141.68710302760502,
            "unit": "iter/sec",
            "range": "stddev: 0.0007639694161250352",
            "extra": "mean: 7.057805393940259 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10774.764820166849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020909721964401902",
            "extra": "mean: 92.8094502933675 usec\nrounds: 5110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.46535600449441,
            "unit": "iter/sec",
            "range": "stddev: 0.0011204374810670852",
            "extra": "mean: 17.401788999998352 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5800020415712024,
            "unit": "iter/sec",
            "range": "stddev: 0.0031952460762039556",
            "extra": "mean: 632.9105745999982 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 239.89219240416367,
            "unit": "iter/sec",
            "range": "stddev: 0.00026072660063569165",
            "extra": "mean: 4.168539167440797 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1696965.1661805576,
            "unit": "iter/sec",
            "range": "stddev: 9.28215322325404e-8",
            "extra": "mean: 589.2872876411182 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.47181336129728,
            "unit": "iter/sec",
            "range": "stddev: 0.0007977549512288838",
            "extra": "mean: 10.814106089743184 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 247.1377174095436,
            "unit": "iter/sec",
            "range": "stddev: 0.00027558769312887893",
            "extra": "mean: 4.0463269244445295 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 253.1171026276214,
            "unit": "iter/sec",
            "range": "stddev: 0.00022692931600407887",
            "extra": "mean: 3.9507405450637263 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5410.115471629373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000467404736797675",
            "extra": "mean: 184.8389383265471 usec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5562.38987557671,
            "unit": "iter/sec",
            "range": "stddev: 0.000048727652404861664",
            "extra": "mean: 179.77884009727376 usec\nrounds: 3277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 124223.46920180644,
            "unit": "iter/sec",
            "range": "stddev: 3.770658140563103e-7",
            "extra": "mean: 8.050008637059205 usec\nrounds: 33113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4914.338771562766,
            "unit": "iter/sec",
            "range": "stddev: 0.00005277154291239329",
            "extra": "mean: 203.48617514661058 usec\nrounds: 2044"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1449863.4412532456,
            "unit": "iter/sec",
            "range": "stddev: 9.745652231047656e-8",
            "extra": "mean: 689.7201291837604 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 968.5300246678959,
            "unit": "iter/sec",
            "range": "stddev: 0.000009553217201268517",
            "extra": "mean: 1.032492513944413 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.81807123162682,
            "unit": "iter/sec",
            "range": "stddev: 0.0004329814910285249",
            "extra": "mean: 17.915344939998477 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 74.73371896466358,
            "unit": "iter/sec",
            "range": "stddev: 0.019986498549221545",
            "extra": "mean: 13.380840855422049 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59641.36246747754,
            "unit": "iter/sec",
            "range": "stddev: 6.055292042650218e-7",
            "extra": "mean: 16.766887251197527 usec\nrounds: 13774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 517.0076231507538,
            "unit": "iter/sec",
            "range": "stddev: 0.000027976662427708283",
            "extra": "mean: 1.9342074569535133 msec\nrounds: 453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 154.56757970771636,
            "unit": "iter/sec",
            "range": "stddev: 0.0006805557147838871",
            "extra": "mean: 6.469662020269557 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.045958824449556,
            "unit": "iter/sec",
            "range": "stddev: 0.0006136918033684979",
            "extra": "mean: 26.993497583332115 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10646.526122059928,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017969850710877664",
            "extra": "mean: 93.9273513759544 usec\nrounds: 4360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.9899501672151,
            "unit": "iter/sec",
            "range": "stddev: 0.00021171897009970362",
            "extra": "mean: 4.237468584113142 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 129.3915649997064,
            "unit": "iter/sec",
            "range": "stddev: 0.018930919867799084",
            "extra": "mean: 7.72847905504713 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.213617453376592,
            "unit": "iter/sec",
            "range": "stddev: 0.002886818228759565",
            "extra": "mean: 451.74923900000294 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 155.46771618151206,
            "unit": "iter/sec",
            "range": "stddev: 0.0007095663882065794",
            "extra": "mean: 6.432203576159036 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 137.68300636647064,
            "unit": "iter/sec",
            "range": "stddev: 0.0008133934789057095",
            "extra": "mean: 7.263060463237573 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 411.3751654835757,
            "unit": "iter/sec",
            "range": "stddev: 0.000024919444037857488",
            "extra": "mean: 2.4308710974919694 msec\nrounds: 359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.876853856134799,
            "unit": "iter/sec",
            "range": "stddev: 0.00016608824100812226",
            "extra": "mean: 205.0502290000054 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 155.68211018272447,
            "unit": "iter/sec",
            "range": "stddev: 0.0007483872086824673",
            "extra": "mean: 6.4233456164378655 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4279870.614311644,
            "unit": "iter/sec",
            "range": "stddev: 1.2749579777628793e-8",
            "extra": "mean: 233.6519231805635 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4655.196464135757,
            "unit": "iter/sec",
            "range": "stddev: 0.00008470647020183097",
            "extra": "mean: 214.81370500775444 usec\nrounds: 2017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 97.63621730570303,
            "unit": "iter/sec",
            "range": "stddev: 0.00014800129663314113",
            "extra": "mean: 10.242101011236013 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.02440624236716,
            "unit": "iter/sec",
            "range": "stddev: 0.0008699649688768356",
            "extra": "mean: 11.624607988372238 msec\nrounds: 86"
          }
        ]
      },
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
          "id": "96998f0562788606bdd215fc276ed62cca8ddfa9",
          "message": "refactor(test_sqlalchemy.py): move to snapshot testing",
          "timestamp": "2023-02-16T07:26:24-05:00",
          "tree_id": "231f1e503e0db44668b6b9caa4c1b15c6cb0616d",
          "url": "https://github.com/ibis-project/ibis/commit/96998f0562788606bdd215fc276ed62cca8ddfa9"
        },
        "date": 1676551050187,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 152.2225128712758,
            "unit": "iter/sec",
            "range": "stddev: 0.003786644040690889",
            "extra": "mean: 6.569330522388839 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5160903.60880734,
            "unit": "iter/sec",
            "range": "stddev: 1.6265143090119686e-8",
            "extra": "mean: 193.76451796094068 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1364.8245644436486,
            "unit": "iter/sec",
            "range": "stddev: 0.00006629710609923598",
            "extra": "mean: 732.6949016393443 usec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1484761.1398150772,
            "unit": "iter/sec",
            "range": "stddev: 1.0013915232979542e-7",
            "extra": "mean: 673.5090063877528 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 157.38590594904548,
            "unit": "iter/sec",
            "range": "stddev: 0.0006811558995547699",
            "extra": "mean: 6.353809090909038 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5216.0327101770035,
            "unit": "iter/sec",
            "range": "stddev: 0.000047771249711176664",
            "extra": "mean: 191.7165891327521 usec\nrounds: 2098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 229.8257856751891,
            "unit": "iter/sec",
            "range": "stddev: 0.003947646474284832",
            "extra": "mean: 4.351121859812944 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1593853.9048161588,
            "unit": "iter/sec",
            "range": "stddev: 9.937161310672943e-8",
            "extra": "mean: 627.4100762800739 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.22098270479876,
            "unit": "iter/sec",
            "range": "stddev: 0.0001635411092823285",
            "extra": "mean: 9.87937454545767 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.4710335917032,
            "unit": "iter/sec",
            "range": "stddev: 0.00013809673088885493",
            "extra": "mean: 6.970048064516273 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.94920572918471,
            "unit": "iter/sec",
            "range": "stddev: 0.00025897048862350225",
            "extra": "mean: 10.87556974603207 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.99766245399053,
            "unit": "iter/sec",
            "range": "stddev: 0.00028047441944865844",
            "extra": "mean: 14.286191351851217 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.03472122657406,
            "unit": "iter/sec",
            "range": "stddev: 0.0006165796705451047",
            "extra": "mean: 12.340389216666617 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 249.66297951716763,
            "unit": "iter/sec",
            "range": "stddev: 0.0002261084384767483",
            "extra": "mean: 4.005399606837733 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.06986181693652,
            "unit": "iter/sec",
            "range": "stddev: 0.004271443201990051",
            "extra": "mean: 110.25526300000068 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.71463170014159,
            "unit": "iter/sec",
            "range": "stddev: 0.0007148777369513094",
            "extra": "mean: 28.806297259259743 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7521008395145101,
            "unit": "iter/sec",
            "range": "stddev: 0.0026946848171538118",
            "extra": "mean: 1.3296089400000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 239.74651840358297,
            "unit": "iter/sec",
            "range": "stddev: 0.00023445296545703635",
            "extra": "mean: 4.171072041666216 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.50455403916885,
            "unit": "iter/sec",
            "range": "stddev: 0.00008631759169012613",
            "extra": "mean: 3.780653242937799 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.44864117648555,
            "unit": "iter/sec",
            "range": "stddev: 0.0006206024083306728",
            "extra": "mean: 11.567561807692183 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.13078971966321,
            "unit": "iter/sec",
            "range": "stddev: 0.0007083342315774366",
            "extra": "mean: 11.094987663043153 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.27177687697733,
            "unit": "iter/sec",
            "range": "stddev: 0.0007055870522914159",
            "extra": "mean: 11.4584581153842 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5682.052294476079,
            "unit": "iter/sec",
            "range": "stddev: 0.00005212835303460189",
            "extra": "mean: 175.99274842510164 usec\nrounds: 2222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 246.8064466365599,
            "unit": "iter/sec",
            "range": "stddev: 0.00022146111815642702",
            "extra": "mean: 4.0517580218338916 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5954.040892605782,
            "unit": "iter/sec",
            "range": "stddev: 0.00004877252065671875",
            "extra": "mean: 167.95316290855214 usec\nrounds: 3548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4669148.053894559,
            "unit": "iter/sec",
            "range": "stddev: 1.1949550480712494e-8",
            "extra": "mean: 214.17183358883145 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.10661882419163,
            "unit": "iter/sec",
            "range": "stddev: 0.0010167199403226918",
            "extra": "mean: 16.918579000000452 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 331.85802089078726,
            "unit": "iter/sec",
            "range": "stddev: 0.00003848329611676505",
            "extra": "mean: 3.0133368400009077 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6033.735884923472,
            "unit": "iter/sec",
            "range": "stddev: 0.000045400296734586087",
            "extra": "mean: 165.73479831934728 usec\nrounds: 2023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.09093949126264,
            "unit": "iter/sec",
            "range": "stddev: 0.0005688857425516143",
            "extra": "mean: 26.960762216216335 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 575513.1290554338,
            "unit": "iter/sec",
            "range": "stddev: 3.0000455933762914e-7",
            "extra": "mean: 1.7375798214043514 usec\nrounds: 20834"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5032.977375221333,
            "unit": "iter/sec",
            "range": "stddev: 0.000058167974403870336",
            "extra": "mean: 198.6895480443171 usec\nrounds: 2071"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5239.79256272113,
            "unit": "iter/sec",
            "range": "stddev: 0.0000454978301864186",
            "extra": "mean: 190.84724977751407 usec\nrounds: 2246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 142.0591197226613,
            "unit": "iter/sec",
            "range": "stddev: 0.0007076703030737861",
            "extra": "mean: 7.039322797102195 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8758425072188241,
            "unit": "iter/sec",
            "range": "stddev: 0.00463590193432751",
            "extra": "mean: 1.1417577838 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 254.5305674214509,
            "unit": "iter/sec",
            "range": "stddev: 0.0000819039830768537",
            "extra": "mean: 3.9288012050207044 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 157.38814857099194,
            "unit": "iter/sec",
            "range": "stddev: 0.0007164088427145038",
            "extra": "mean: 6.353718555555263 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.84119225955011,
            "unit": "iter/sec",
            "range": "stddev: 0.0031544987844737277",
            "extra": "mean: 206.56068720000178 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.47004935023521,
            "unit": "iter/sec",
            "range": "stddev: 0.00006170090405705919",
            "extra": "mean: 11.432484689655784 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 159.6845981622789,
            "unit": "iter/sec",
            "range": "stddev: 0.0007156644477043693",
            "extra": "mean: 6.262344718955009 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1551145.4242091877,
            "unit": "iter/sec",
            "range": "stddev: 1.2281997196485167e-7",
            "extra": "mean: 644.6848789241182 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.574893985064979,
            "unit": "iter/sec",
            "range": "stddev: 0.05605912528289634",
            "extra": "mean: 1.739451144000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.36817843733866,
            "unit": "iter/sec",
            "range": "stddev: 0.0006497026747252335",
            "extra": "mean: 11.445814916665682 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.61436646685798,
            "unit": "iter/sec",
            "range": "stddev: 0.0003987179248302689",
            "extra": "mean: 73.45182035714564 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12032503.300721943,
            "unit": "iter/sec",
            "range": "stddev: 3.744710988414096e-9",
            "extra": "mean: 83.10822569551965 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.6219786705769,
            "unit": "iter/sec",
            "range": "stddev: 0.0005267258484822616",
            "extra": "mean: 14.788091381820385 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 244.68396351373372,
            "unit": "iter/sec",
            "range": "stddev: 0.00023928740054764952",
            "extra": "mean: 4.086904534484835 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.4274938879577,
            "unit": "iter/sec",
            "range": "stddev: 0.00009356029377635027",
            "extra": "mean: 7.021116307688894 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10763.479310978359,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029277309422931087",
            "extra": "mean: 92.90676101175167 usec\nrounds: 5653"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 123.81612012971055,
            "unit": "iter/sec",
            "range": "stddev: 0.00004576933759890161",
            "extra": "mean: 8.076492777777187 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2005814.3129717975,
            "unit": "iter/sec",
            "range": "stddev: 3.3407341472696056e-8",
            "extra": "mean: 498.550635287058 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 278.70690432788973,
            "unit": "iter/sec",
            "range": "stddev: 0.00013827447010949948",
            "extra": "mean: 3.5879986626507545 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.93523066043806,
            "unit": "iter/sec",
            "range": "stddev: 0.001142488324514172",
            "extra": "mean: 40.10390012499817 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.87549114750318,
            "unit": "iter/sec",
            "range": "stddev: 0.0006738052162940301",
            "extra": "mean: 10.76710322222488 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5772458856993732,
            "unit": "iter/sec",
            "range": "stddev: 0.002116083258973748",
            "extra": "mean: 634.0165532000015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 620.880771645578,
            "unit": "iter/sec",
            "range": "stddev: 0.00005707300156379212",
            "extra": "mean: 1.6106151867927994 msec\nrounds: 530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.99807090013718,
            "unit": "iter/sec",
            "range": "stddev: 0.000672886361194407",
            "extra": "mean: 10.752911219780206 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9718.967143958645,
            "unit": "iter/sec",
            "range": "stddev: 0.00002139504369197386",
            "extra": "mean: 102.89159179034829 usec\nrounds: 4799"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15348372736061328,
            "unit": "iter/sec",
            "range": "stddev: 0.08613381789715444",
            "extra": "mean: 6.515348676999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119342.65328859449,
            "unit": "iter/sec",
            "range": "stddev: 3.8006090256084144e-7",
            "extra": "mean: 8.379233848453154 usec\nrounds: 35972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4553.91200206766,
            "unit": "iter/sec",
            "range": "stddev: 0.000022083645171467817",
            "extra": "mean: 219.59141932166443 usec\nrounds: 1977"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.42306789217493,
            "unit": "iter/sec",
            "range": "stddev: 0.0006475736423731217",
            "extra": "mean: 18.374561352940233 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.96915665341844,
            "unit": "iter/sec",
            "range": "stddev: 0.0002970734496130083",
            "extra": "mean: 23.27250702325442 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 157.97521663055443,
            "unit": "iter/sec",
            "range": "stddev: 0.0007245667973090913",
            "extra": "mean: 6.330106844155372 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 145.57070154776136,
            "unit": "iter/sec",
            "range": "stddev: 0.000749101070825052",
            "extra": "mean: 6.869514190476733 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 980.5029359196387,
            "unit": "iter/sec",
            "range": "stddev: 0.00008046153244611525",
            "extra": "mean: 1.0198847584908803 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10122.719901649209,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018297205473960422",
            "extra": "mean: 98.78767858005025 usec\nrounds: 4141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.9719383813833,
            "unit": "iter/sec",
            "range": "stddev: 0.0012853115659949071",
            "extra": "mean: 24.40694874359122 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.4690087905663,
            "unit": "iter/sec",
            "range": "stddev: 0.00022919427038769439",
            "extra": "mean: 4.246843374999859 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8685660575177495,
            "unit": "iter/sec",
            "range": "stddev: 0.0019565372761057753",
            "extra": "mean: 1.151322909000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4380535.196949849,
            "unit": "iter/sec",
            "range": "stddev: 1.5131544976885275e-8",
            "extra": "mean: 228.28260818333104 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57501.20200037278,
            "unit": "iter/sec",
            "range": "stddev: 5.34089630808976e-7",
            "extra": "mean: 17.390940801437804 usec\nrounds: 12078"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 414.3628166200437,
            "unit": "iter/sec",
            "range": "stddev: 0.0001049493237438617",
            "extra": "mean: 2.4133439582175766 msec\nrounds: 359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.80671936556291,
            "unit": "iter/sec",
            "range": "stddev: 0.00030791861771330495",
            "extra": "mean: 10.22424641667404 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 514.5261443178098,
            "unit": "iter/sec",
            "range": "stddev: 0.000026664173174347357",
            "extra": "mean: 1.9435358359211483 msec\nrounds: 451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 218.77079954440887,
            "unit": "iter/sec",
            "range": "stddev: 0.0004367167572874793",
            "extra": "mean: 4.570993944724361 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 384697.20754031447,
            "unit": "iter/sec",
            "range": "stddev: 3.9618164673126613e-7",
            "extra": "mean: 2.5994469946736087 usec\nrounds: 1830"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19069.410163648485,
            "unit": "iter/sec",
            "range": "stddev: 0.000018216886336083378",
            "extra": "mean: 52.44000687059916 usec\nrounds: 6113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5897.375313178283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000504588690897354",
            "extra": "mean: 169.56695934976338 usec\nrounds: 2706"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.59457806197085,
            "unit": "iter/sec",
            "range": "stddev: 0.00006133482683018591",
            "extra": "mean: 5.896414917430875 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.07875842630654,
            "unit": "iter/sec",
            "range": "stddev: 0.00011783410088949761",
            "extra": "mean: 6.989157656935185 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2562824310450114,
            "unit": "iter/sec",
            "range": "stddev: 0.0025244800935561563",
            "extra": "mean: 443.2069257999956 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}