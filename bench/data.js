window.BENCHMARK_DATA = {
  "lastUpdate": 1681556303808,
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
          "id": "009230421b2bc1f86591e8b850d37a489e8e4f06",
          "message": "fix(datafusion): fix incorrect order of predicate -> select compilation",
          "timestamp": "2023-04-15T06:51:41-04:00",
          "tree_id": "fd24d4615e6e10a9cab5eca4b19f4269a49e7fe9",
          "url": "https://github.com/ibis-project/ibis/commit/009230421b2bc1f86591e8b850d37a489e8e4f06"
        },
        "date": 1681556217392,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 231.48009830012248,
            "unit": "iter/sec",
            "range": "stddev: 0.004412093623552114",
            "extra": "mean: 4.32002581363804 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.52528770135259,
            "unit": "iter/sec",
            "range": "stddev: 0.00013519861849465973",
            "extra": "mean: 16.799582809530495 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2582782.4278575354,
            "unit": "iter/sec",
            "range": "stddev: 2.8110078224987065e-8",
            "extra": "mean: 387.1793416333168 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.84659692376528,
            "unit": "iter/sec",
            "range": "stddev: 0.0001591843127452465",
            "extra": "mean: 14.739132769232828 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 107.69542560773561,
            "unit": "iter/sec",
            "range": "stddev: 0.00010537448508902202",
            "extra": "mean: 9.285445452830556 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 645.5748983333116,
            "unit": "iter/sec",
            "range": "stddev: 0.000020335069853011665",
            "extra": "mean: 1.5490069433952776 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.605784122502444,
            "unit": "iter/sec",
            "range": "stddev: 0.00019626056356563935",
            "extra": "mean: 178.38717619999898 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1619926.1643876743,
            "unit": "iter/sec",
            "range": "stddev: 1.029356811903272e-7",
            "extra": "mean: 617.3120861826416 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 263.4875286917354,
            "unit": "iter/sec",
            "range": "stddev: 0.0002752754555343811",
            "extra": "mean: 3.7952460405438773 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.3286700780303,
            "unit": "iter/sec",
            "range": "stddev: 0.0006574612202770699",
            "extra": "mean: 9.967240662337627 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.96864133989547,
            "unit": "iter/sec",
            "range": "stddev: 0.00540089187385931",
            "extra": "mean: 4.0490970617752655 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9502.31494272313,
            "unit": "iter/sec",
            "range": "stddev: 0.000016236002025903335",
            "extra": "mean: 105.23751380875875 usec\nrounds: 5033"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.79016247966,
            "unit": "iter/sec",
            "range": "stddev: 0.0007069288936649166",
            "extra": "mean: 10.021027876408436 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 86.43632978846738,
            "unit": "iter/sec",
            "range": "stddev: 0.009780894477961502",
            "extra": "mean: 11.569209410525243 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2251.6547265196173,
            "unit": "iter/sec",
            "range": "stddev: 0.00008196321406071745",
            "extra": "mean: 444.1178250919936 usec\nrounds: 1881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.0623586566242,
            "unit": "iter/sec",
            "range": "stddev: 0.0005549207091632419",
            "extra": "mean: 11.619481682925386 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8184507049675283,
            "unit": "iter/sec",
            "range": "stddev: 0.003382895677852128",
            "extra": "mean: 1.2218206837999788 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 100.81020721206117,
            "unit": "iter/sec",
            "range": "stddev: 0.0000739641449756995",
            "extra": "mean: 9.919630438775227 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.45965800615558,
            "unit": "iter/sec",
            "range": "stddev: 0.016133347810688578",
            "extra": "mean: 26.00127124999258 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.5075421187699,
            "unit": "iter/sec",
            "range": "stddev: 0.0002743761299107848",
            "extra": "mean: 3.7806105337857523 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6894175245826422,
            "unit": "iter/sec",
            "range": "stddev: 0.04289791782075891",
            "extra": "mean: 1.4504998267999896 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.97261553683883,
            "unit": "iter/sec",
            "range": "stddev: 0.0007175046941064316",
            "extra": "mean: 10.002739196430355 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2579529.882710367,
            "unit": "iter/sec",
            "range": "stddev: 1.6106573092692257e-8",
            "extra": "mean: 387.6675384542885 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.747394717739215,
            "unit": "iter/sec",
            "range": "stddev: 0.0018607101637868834",
            "extra": "mean: 572.2805441999981 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17860194173724278,
            "unit": "iter/sec",
            "range": "stddev: 0.011812925369908318",
            "extra": "mean: 5.599043270599987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2267.1951625437064,
            "unit": "iter/sec",
            "range": "stddev: 0.00007749842356321588",
            "extra": "mean: 441.0736298846184 usec\nrounds: 1305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11243.38028207046,
            "unit": "iter/sec",
            "range": "stddev: 0.000013747677251482638",
            "extra": "mean: 88.9412236277977 usec\nrounds: 5612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.15783523414979,
            "unit": "iter/sec",
            "range": "stddev: 0.0006048597613931248",
            "extra": "mean: 10.620465068182806 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7801.039968320186,
            "unit": "iter/sec",
            "range": "stddev: 0.000017167799383739064",
            "extra": "mean: 128.1880369875008 usec\nrounds: 4569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.58144765347484,
            "unit": "iter/sec",
            "range": "stddev: 0.00005222167753869121",
            "extra": "mean: 10.2478496071419 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.58979334281804,
            "unit": "iter/sec",
            "range": "stddev: 0.0007154461500239885",
            "extra": "mean: 10.571965163046075 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 273.977699931861,
            "unit": "iter/sec",
            "range": "stddev: 0.00022170386786514101",
            "extra": "mean: 3.6499320939211577 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.73839843347702,
            "unit": "iter/sec",
            "range": "stddev: 0.00016867015141175187",
            "extra": "mean: 20.517703333335806 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.886989203848237,
            "unit": "iter/sec",
            "range": "stddev: 0.0029225446920805934",
            "extra": "mean: 1.127409438199993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.49265761080652,
            "unit": "iter/sec",
            "range": "stddev: 0.0006474170469591406",
            "extra": "mean: 9.95097576056606 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8876265023743953,
            "unit": "iter/sec",
            "range": "stddev: 0.0036184667929230916",
            "extra": "mean: 1.1265999802000124 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141690.6349867055,
            "unit": "iter/sec",
            "range": "stddev: 3.3396440883914676e-7",
            "extra": "mean: 7.057629462200008 usec\nrounds: 37594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2278.0813733112664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000843255771992294",
            "extra": "mean: 438.96588230580505 usec\nrounds: 1249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 113.32786650387108,
            "unit": "iter/sec",
            "range": "stddev: 0.00006784653967737458",
            "extra": "mean: 8.823955050506857 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1678.7156639221407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046431428838340245",
            "extra": "mean: 595.693494432289 usec\nrounds: 1347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 269.87482672611975,
            "unit": "iter/sec",
            "range": "stddev: 0.00023179941840805937",
            "extra": "mean: 3.7054215546188822 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6496411.712824078,
            "unit": "iter/sec",
            "range": "stddev: 8.518846731203695e-9",
            "extra": "mean: 153.93113063112105 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 159.67649916979593,
            "unit": "iter/sec",
            "range": "stddev: 0.0001555027512708197",
            "extra": "mean: 6.2626623529404 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.04343851090922,
            "unit": "iter/sec",
            "range": "stddev: 0.00024431154844712066",
            "extra": "mean: 21.71862120512713 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.4300295053809,
            "unit": "iter/sec",
            "range": "stddev: 0.00004427761403201206",
            "extra": "mean: 6.692095312502033 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.730202432617,
            "unit": "iter/sec",
            "range": "stddev: 0.015777378212041043",
            "extra": "mean: 12.087484021503402 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69708.32278265886,
            "unit": "iter/sec",
            "range": "stddev: 9.385103891606991e-7",
            "extra": "mean: 14.345489320089728 usec\nrounds: 14185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2543424.4077199576,
            "unit": "iter/sec",
            "range": "stddev: 1.551683422763138e-8",
            "extra": "mean: 393.17071777881284 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 185.82599235505324,
            "unit": "iter/sec",
            "range": "stddev: 0.000025393961252560398",
            "extra": "mean: 5.381378499996514 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.83948516285768,
            "unit": "iter/sec",
            "range": "stddev: 0.0006643550289074393",
            "extra": "mean: 10.771279033331718 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 87.46587089526946,
            "unit": "iter/sec",
            "range": "stddev: 0.013820532753088045",
            "extra": "mean: 11.433030846939001 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13175.757177283343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026433389184335103",
            "extra": "mean: 75.89696641678592 usec\nrounds: 7474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7300977.677480522,
            "unit": "iter/sec",
            "range": "stddev: 3.6973873548524468e-9",
            "extra": "mean: 136.9679574674399 nsec\nrounds: 58824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 96.40003968799131,
            "unit": "iter/sec",
            "range": "stddev: 0.000650798531395997",
            "extra": "mean: 10.373439712645382 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 93.13854262323353,
            "unit": "iter/sec",
            "range": "stddev: 0.0006245277618454829",
            "extra": "mean: 10.736693659092628 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2324.685213893052,
            "unit": "iter/sec",
            "range": "stddev: 0.00008673640495183464",
            "extra": "mean: 430.16576783113885 usec\nrounds: 1374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 87.33188369618583,
            "unit": "iter/sec",
            "range": "stddev: 0.00006125766628712256",
            "extra": "mean: 11.450571746269048 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 504.579638685231,
            "unit": "iter/sec",
            "range": "stddev: 0.000021193253738683427",
            "extra": "mean: 1.9818477071442517 msec\nrounds: 420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.0249762222395,
            "unit": "iter/sec",
            "range": "stddev: 0.00001142516351546244",
            "extra": "mean: 1.3604979862584201 msec\nrounds: 655"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.73524240460523,
            "unit": "iter/sec",
            "range": "stddev: 0.00009605478991789569",
            "extra": "mean: 9.457584597701226 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1874.2250848060412,
            "unit": "iter/sec",
            "range": "stddev: 0.003722087923099294",
            "extra": "mean: 533.5538447899322 usec\nrounds: 1353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.35246043649397,
            "unit": "iter/sec",
            "range": "stddev: 0.0001623853886641749",
            "extra": "mean: 3.9784770686685094 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1159.2620790934018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000617177883956548",
            "extra": "mean: 862.6177100367568 usec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.43469595227288,
            "unit": "iter/sec",
            "range": "stddev: 0.00007181307288827945",
            "extra": "mean: 13.617541232143537 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 167.46305793501463,
            "unit": "iter/sec",
            "range": "stddev: 0.0040838766477938205",
            "extra": "mean: 5.971466258475096 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 352.43297119758853,
            "unit": "iter/sec",
            "range": "stddev: 0.00003113407686380816",
            "extra": "mean: 2.8374189753073886 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.929794215623353,
            "unit": "iter/sec",
            "range": "stddev: 0.00014489462268046514",
            "extra": "mean: 91.49303090908813 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.48863433794522,
            "unit": "iter/sec",
            "range": "stddev: 0.0004967323712595528",
            "extra": "mean: 22.994513744191504 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 721724.7899044055,
            "unit": "iter/sec",
            "range": "stddev: 2.3070448557827642e-7",
            "extra": "mean: 1.3855696991265227 usec\nrounds: 24039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2263.9682712528506,
            "unit": "iter/sec",
            "range": "stddev: 0.00008886031297669104",
            "extra": "mean: 441.7023032953607 usec\nrounds: 1365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 151.28278179352455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000652859915792655",
            "extra": "mean: 6.610137572462351 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 81.23760267277076,
            "unit": "iter/sec",
            "range": "stddev: 0.019130567299351788",
            "extra": "mean: 12.309570532602388 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.359644533501213,
            "unit": "iter/sec",
            "range": "stddev: 0.0031677726740511826",
            "extra": "mean: 423.7926458000061 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 499557.84944872657,
            "unit": "iter/sec",
            "range": "stddev: 2.6257629731757354e-7",
            "extra": "mean: 2.001770167566224 usec\nrounds: 1971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12465237.263207145,
            "unit": "iter/sec",
            "range": "stddev: 4.990837505985689e-9",
            "extra": "mean: 80.22310196616168 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.317555034410722,
            "unit": "iter/sec",
            "range": "stddev: 0.00008901622625454327",
            "extra": "mean: 65.28457040000907 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 105.58836132325509,
            "unit": "iter/sec",
            "range": "stddev: 0.000043690256035731994",
            "extra": "mean: 9.470740784948209 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 95.06103786857797,
            "unit": "iter/sec",
            "range": "stddev: 0.0006267985664890515",
            "extra": "mean: 10.519556933330579 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.73429093147539,
            "unit": "iter/sec",
            "range": "stddev: 0.00003628570510026946",
            "extra": "mean: 7.591037936509432 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 302.98729538782464,
            "unit": "iter/sec",
            "range": "stddev: 0.00004490918255709982",
            "extra": "mean: 3.30046841970716 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 275.81007393491655,
            "unit": "iter/sec",
            "range": "stddev: 0.00022707433271662597",
            "extra": "mean: 3.625683376003053 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5820357.421333906,
            "unit": "iter/sec",
            "range": "stddev: 8.649055101458235e-9",
            "extra": "mean: 171.81075449723716 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2311.460023721979,
            "unit": "iter/sec",
            "range": "stddev: 0.00010245944912909695",
            "extra": "mean: 432.62699321521103 usec\nrounds: 1474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 93.0955086553072,
            "unit": "iter/sec",
            "range": "stddev: 0.0006036129032730606",
            "extra": "mean: 10.74165676136506 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4652.905534900121,
            "unit": "iter/sec",
            "range": "stddev: 0.00003347626190963252",
            "extra": "mean: 214.91947182234512 usec\nrounds: 2289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.132272909385225,
            "unit": "iter/sec",
            "range": "stddev: 0.00040035853375421055",
            "extra": "mean: 35.54636353845371 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 272.97163337106383,
            "unit": "iter/sec",
            "range": "stddev: 0.00023539020952798254",
            "extra": "mean: 3.6633843145183174 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2338.9796759265737,
            "unit": "iter/sec",
            "range": "stddev: 0.00008090423381894795",
            "extra": "mean: 427.53684877738647 usec\nrounds: 1964"
          }
        ]
      }
    ]
  }
}