window.BENCHMARK_DATA = {
  "lastUpdate": 1679916827131,
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
          "id": "aa3cf765717f3990b642bda3f39a0f1750571092",
          "message": "style: ruff lints",
          "timestamp": "2023-03-27T07:25:47-04:00",
          "tree_id": "c1e25932f67675181c30ee1183837214970f628e",
          "url": "https://github.com/ibis-project/ibis/commit/aa3cf765717f3990b642bda3f39a0f1750571092"
        },
        "date": 1679916719427,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 75.85146802874587,
            "unit": "iter/sec",
            "range": "stddev: 0.014157269073844138",
            "extra": "mean: 13.183660461535487 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 257.6290150558885,
            "unit": "iter/sec",
            "range": "stddev: 0.0002249160419157571",
            "extra": "mean: 3.881550374995868 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 123.46071343064332,
            "unit": "iter/sec",
            "range": "stddev: 0.00025414938144904917",
            "extra": "mean: 8.099742599995352 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 247.61732312566997,
            "unit": "iter/sec",
            "range": "stddev: 0.00012619125767215423",
            "extra": "mean: 4.0384896637158265 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.245892052918153,
            "unit": "iter/sec",
            "range": "stddev: 0.00022155433661965468",
            "extra": "mean: 75.49510414284961 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8900866.920058751,
            "unit": "iter/sec",
            "range": "stddev: 1.4867863049896868e-8",
            "extra": "mean: 112.3486070493191 nsec\nrounds: 89278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4905.217170710238,
            "unit": "iter/sec",
            "range": "stddev: 0.00007324102417285455",
            "extra": "mean: 203.8645721888003 usec\nrounds: 1690"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4727.63567824746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000291898113555032",
            "extra": "mean: 211.52222126614905 usec\nrounds: 1279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14415203787025863,
            "unit": "iter/sec",
            "range": "stddev: 0.08702920413552655",
            "extra": "mean: 6.937120104399992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.20963478681767,
            "unit": "iter/sec",
            "range": "stddev: 0.00048439129329934936",
            "extra": "mean: 8.67982961538231 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1505.4476026573677,
            "unit": "iter/sec",
            "range": "stddev: 0.000010235149631733915",
            "extra": "mean: 664.2542711116827 usec\nrounds: 1125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5702252.50767739,
            "unit": "iter/sec",
            "range": "stddev: 1.5505640017431595e-8",
            "extra": "mean: 175.3692946171301 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 454.71699308626626,
            "unit": "iter/sec",
            "range": "stddev: 0.00003553623829023136",
            "extra": "mean: 2.1991700666666882 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 45.081549713888215,
            "unit": "iter/sec",
            "range": "stddev: 0.0008931016064049837",
            "extra": "mean: 22.18202360714169 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.97699270366472,
            "unit": "iter/sec",
            "range": "stddev: 0.019683373875136797",
            "extra": "mean: 14.290411196073444 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4716.291610470468,
            "unit": "iter/sec",
            "range": "stddev: 0.00008543778706218969",
            "extra": "mean: 212.03099438973118 usec\nrounds: 713"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.67193721944813,
            "unit": "iter/sec",
            "range": "stddev: 0.0001538073668070759",
            "extra": "mean: 7.211264370075839 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 256.70721228474264,
            "unit": "iter/sec",
            "range": "stddev: 0.00024124463649535528",
            "extra": "mean: 3.8954885260130063 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10384.48939011734,
            "unit": "iter/sec",
            "range": "stddev: 0.000014853669577942555",
            "extra": "mean: 96.29746465451397 usec\nrounds: 3777"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4848.242721967663,
            "unit": "iter/sec",
            "range": "stddev: 0.00006183623600955841",
            "extra": "mean: 206.26030034943244 usec\nrounds: 2001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.54761154419445,
            "unit": "iter/sec",
            "range": "stddev: 0.0002122373952488186",
            "extra": "mean: 12.41501741428205 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.893231587819814,
            "unit": "iter/sec",
            "range": "stddev: 0.0004773073266366506",
            "extra": "mean: 112.44506455556626 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 136.66010591871225,
            "unit": "iter/sec",
            "range": "stddev: 0.00007351354002697325",
            "extra": "mean: 7.317424447152243 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.66924532001073,
            "unit": "iter/sec",
            "range": "stddev: 0.000853074934785121",
            "extra": "mean: 9.933520379746238 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 978.7378185222934,
            "unit": "iter/sec",
            "range": "stddev: 0.000013335248019991851",
            "extra": "mean: 1.021724082870128 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7257777574741918,
            "unit": "iter/sec",
            "range": "stddev: 0.009263689532840565",
            "extra": "mean: 1.377832249200003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 262.58560276749824,
            "unit": "iter/sec",
            "range": "stddev: 0.00030128890161446373",
            "extra": "mean: 3.808281906778538 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.297848038526,
            "unit": "iter/sec",
            "range": "stddev: 0.0008668569909656914",
            "extra": "mean: 11.325304321841246 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4336.092641119736,
            "unit": "iter/sec",
            "range": "stddev: 0.00007774137244014415",
            "extra": "mean: 230.62237889404594 usec\nrounds: 1573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.31708902738346,
            "unit": "iter/sec",
            "range": "stddev: 0.0008379497489524238",
            "extra": "mean: 11.072101755812874 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 269.7778982635445,
            "unit": "iter/sec",
            "range": "stddev: 0.00026876452418316644",
            "extra": "mean: 3.706752875000552 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.3076170751992,
            "unit": "iter/sec",
            "range": "stddev: 0.0008806145797743876",
            "extra": "mean: 10.49234080851045 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2262480.77801497,
            "unit": "iter/sec",
            "range": "stddev: 2.8314290603723998e-8",
            "extra": "mean: 441.9927054042312 nsec\nrounds: 35211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 414635.65766838554,
            "unit": "iter/sec",
            "range": "stddev: 5.076655853229743e-7",
            "extra": "mean: 2.4117559151166232 usec\nrounds: 1733"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3588.9358490703694,
            "unit": "iter/sec",
            "range": "stddev: 0.0003583686673505461",
            "extra": "mean: 278.6341250036628 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 88.06872575587907,
            "unit": "iter/sec",
            "range": "stddev: 0.0009079557910918268",
            "extra": "mean: 11.354768578938415 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 633.753992698075,
            "unit": "iter/sec",
            "range": "stddev: 0.000044015058567908245",
            "extra": "mean: 1.5778993292692476 msec\nrounds: 492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 577.3155225269504,
            "unit": "iter/sec",
            "range": "stddev: 0.000031438702675625835",
            "extra": "mean: 1.7321550538307544 msec\nrounds: 483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.31147407962702,
            "unit": "iter/sec",
            "range": "stddev: 0.00009282251887740258",
            "extra": "mean: 15.549324818178693 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1660798.165113919,
            "unit": "iter/sec",
            "range": "stddev: 8.553402046369265e-8",
            "extra": "mean: 602.1201257356923 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.134912324964257,
            "unit": "iter/sec",
            "range": "stddev: 0.0024404266590620097",
            "extra": "mean: 468.403310199983 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.39791647810424,
            "unit": "iter/sec",
            "range": "stddev: 0.00041054202788955965",
            "extra": "mean: 22.027442613634207 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.48771423580688,
            "unit": "iter/sec",
            "range": "stddev: 0.00022671912528471116",
            "extra": "mean: 13.988417600000957 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.05649742654592,
            "unit": "iter/sec",
            "range": "stddev: 0.000595947547254719",
            "extra": "mean: 26.276721916674873 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12077.465120928853,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028046271132880185",
            "extra": "mean: 82.79883154182043 usec\nrounds: 5675"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 301.50282190769485,
            "unit": "iter/sec",
            "range": "stddev: 0.00003503943908472619",
            "extra": "mean: 3.316718542376198 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.83574223177939,
            "unit": "iter/sec",
            "range": "stddev: 0.00020378630087287166",
            "extra": "mean: 10.544547619567222 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.847680849462304,
            "unit": "iter/sec",
            "range": "stddev: 0.03603342307016755",
            "extra": "mean: 34.664831645162884 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4445774.182182021,
            "unit": "iter/sec",
            "range": "stddev: 5.81597621421129e-8",
            "extra": "mean: 224.93270216200517 nsec\nrounds: 68023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.00405207692845,
            "unit": "iter/sec",
            "range": "stddev: 0.0008792452633491505",
            "extra": "mean: 9.803532111114855 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 266.6356566052527,
            "unit": "iter/sec",
            "range": "stddev: 0.0003231333061564096",
            "extra": "mean: 3.7504361297051676 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4330.61956255747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000717493315280352",
            "extra": "mean: 230.91384166967663 usec\nrounds: 2779"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 81.53438856496946,
            "unit": "iter/sec",
            "range": "stddev: 0.00022009496919246708",
            "extra": "mean: 12.264763587491245 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7228.465399718115,
            "unit": "iter/sec",
            "range": "stddev: 0.00001771990178760837",
            "extra": "mean: 138.34195015154899 usec\nrounds: 3290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 128.45375316953744,
            "unit": "iter/sec",
            "range": "stddev: 0.03206013861782654",
            "extra": "mean: 7.784902934522805 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4341.5838474223365,
            "unit": "iter/sec",
            "range": "stddev: 0.00015919051325472708",
            "extra": "mean: 230.33068924690122 usec\nrounds: 2037"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.99027656759452,
            "unit": "iter/sec",
            "range": "stddev: 0.0011961710904009636",
            "extra": "mean: 10.102002284205762 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6219248949998566,
            "unit": "iter/sec",
            "range": "stddev: 0.01691703130508706",
            "extra": "mean: 1.6079111931999932 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 664137.5911457432,
            "unit": "iter/sec",
            "range": "stddev: 3.8826372709344407e-7",
            "extra": "mean: 1.5057120893802152 usec\nrounds: 18867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4667.774902150159,
            "unit": "iter/sec",
            "range": "stddev: 0.00006381356581584168",
            "extra": "mean: 214.2348380037266 usec\nrounds: 1642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11320.657072360937,
            "unit": "iter/sec",
            "range": "stddev: 0.000004956163143271066",
            "extra": "mean: 88.33409523917756 usec\nrounds: 4893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.90320555865745,
            "unit": "iter/sec",
            "range": "stddev: 0.0006503149112506099",
            "extra": "mean: 50.243162944424405 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 62462.895099432586,
            "unit": "iter/sec",
            "range": "stddev: 9.322220222527718e-7",
            "extra": "mean: 16.00950449716001 usec\nrounds: 10672"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5166236.465975581,
            "unit": "iter/sec",
            "range": "stddev: 3.1311923819311314e-8",
            "extra": "mean: 193.56450417727666 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4915103426683156,
            "unit": "iter/sec",
            "range": "stddev: 0.002088343982938784",
            "extra": "mean: 670.4613246000008 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 264.90734418325775,
            "unit": "iter/sec",
            "range": "stddev: 0.00026937452051256595",
            "extra": "mean: 3.7749047807003016 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.17840236294371,
            "unit": "iter/sec",
            "range": "stddev: 0.0009207522547871909",
            "extra": "mean: 11.60383544578212 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7411402947439519,
            "unit": "iter/sec",
            "range": "stddev: 0.029044883962773056",
            "extra": "mean: 1.3492722054000297 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.31519026322688,
            "unit": "iter/sec",
            "range": "stddev: 0.0009516563610147857",
            "extra": "mean: 10.068953171711003 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.79749595888209,
            "unit": "iter/sec",
            "range": "stddev: 0.00042813894755251215",
            "extra": "mean: 208.44207239999832 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.68217421176757,
            "unit": "iter/sec",
            "range": "stddev: 0.0009918986538864675",
            "extra": "mean: 12.872966161759624 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 123.50326897363318,
            "unit": "iter/sec",
            "range": "stddev: 0.005068815966259357",
            "extra": "mean: 8.096951670271098 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 236.5779038404086,
            "unit": "iter/sec",
            "range": "stddev: 0.00013564525064292904",
            "extra": "mean: 4.226937443298098 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7167317832734094,
            "unit": "iter/sec",
            "range": "stddev: 0.004434194408796583",
            "extra": "mean: 1.3952220668000337 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.17952898175297,
            "unit": "iter/sec",
            "range": "stddev: 0.00011580234293854184",
            "extra": "mean: 9.98207927472032 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.37595372765863,
            "unit": "iter/sec",
            "range": "stddev: 0.00018026174785861556",
            "extra": "mean: 19.85074079998918 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1645765.2778512111,
            "unit": "iter/sec",
            "range": "stddev: 1.7284178328669168e-7",
            "extra": "mean: 607.6200618994995 nsec\nrounds: 138870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.57278353792444,
            "unit": "iter/sec",
            "range": "stddev: 0.000041996716040103006",
            "extra": "mean: 5.828430240388098 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 97.82119383884441,
            "unit": "iter/sec",
            "range": "stddev: 0.0009611673451326294",
            "extra": "mean: 10.22273354839086 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.52180456233941,
            "unit": "iter/sec",
            "range": "stddev: 0.0010087344652768863",
            "extra": "mean: 10.15003738961412 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.55231150743699,
            "unit": "iter/sec",
            "range": "stddev: 0.049223438423633456",
            "extra": "mean: 36.294595454543895 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.19575861051018,
            "unit": "iter/sec",
            "range": "stddev: 0.0009325799403220478",
            "extra": "mean: 10.730102044442447 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1526038.6606224554,
            "unit": "iter/sec",
            "range": "stddev: 1.5142088756423406e-7",
            "extra": "mean: 655.2913932023913 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 235.96871999774473,
            "unit": "iter/sec",
            "range": "stddev: 0.0004841507530691992",
            "extra": "mean: 4.237849830306142 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143981.0413985672,
            "unit": "iter/sec",
            "range": "stddev: 4.81938853276519e-7",
            "extra": "mean: 6.945358849237712 usec\nrounds: 33443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 255.91467390136202,
            "unit": "iter/sec",
            "range": "stddev: 0.0003425875831151974",
            "extra": "mean: 3.907552407039516 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.24051915714559,
            "unit": "iter/sec",
            "range": "stddev: 0.0007730202312671581",
            "extra": "mean: 33.06821535713311 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.19876408923437,
            "unit": "iter/sec",
            "range": "stddev: 0.0009239431225928908",
            "extra": "mean: 11.737259462503857 msec\nrounds: 80"
          }
        ]
      }
    ]
  }
}