window.BENCHMARK_DATA = {
  "lastUpdate": 1676550776906,
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
      }
    ]
  }
}