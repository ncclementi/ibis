window.BENCHMARK_DATA = {
  "lastUpdate": 1675946964541,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "omrif@diagnosticrobotics.com",
            "name": "Omri Fima"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "6cc174f206ef0682389041bf92b2a81cb8fe29d1",
          "message": "feat(snowflake): add support for bulk upload for temp tables in snowflake",
          "timestamp": "2023-02-09T07:38:03-05:00",
          "tree_id": "a893eb0a7532ca1e677cabad6de371cd113675b9",
          "url": "https://github.com/ibis-project/ibis/commit/6cc174f206ef0682389041bf92b2a81cb8fe29d1"
        },
        "date": 1675946882180,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.7322169576727,
            "unit": "iter/sec",
            "range": "stddev: 0.0003882990248725445",
            "extra": "mean: 18.270774611109804 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.681637528758037,
            "unit": "iter/sec",
            "range": "stddev: 0.00030417112328928015",
            "extra": "mean: 73.09066607692654 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10927.536575887425,
            "unit": "iter/sec",
            "range": "stddev: 0.000014701816548673583",
            "extra": "mean: 91.51193345868897 usec\nrounds: 5320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.54102373789956,
            "unit": "iter/sec",
            "range": "stddev: 0.0005882376807767202",
            "extra": "mean: 12.11518775409663 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.30365828498834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005837214536409921",
            "extra": "mean: 10.95246366666575 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.32406473740906,
            "unit": "iter/sec",
            "range": "stddev: 0.00008466891244809285",
            "extra": "mean: 6.928851413791967 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4455064.000518961,
            "unit": "iter/sec",
            "range": "stddev: 1.3553615680000737e-8",
            "extra": "mean: 224.46366648976795 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4480665.1460449165,
            "unit": "iter/sec",
            "range": "stddev: 1.1657597743405605e-8",
            "extra": "mean: 223.1811499868457 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5004.477392891141,
            "unit": "iter/sec",
            "range": "stddev: 0.00004542379388181322",
            "extra": "mean: 199.82106451724604 usec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6011.614680023658,
            "unit": "iter/sec",
            "range": "stddev: 0.00004793143366331854",
            "extra": "mean: 166.34466000007583 usec\nrounds: 2400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 615.4274112607437,
            "unit": "iter/sec",
            "range": "stddev: 0.00004838653742803332",
            "extra": "mean: 1.6248869999979914 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6121.17247867933,
            "unit": "iter/sec",
            "range": "stddev: 0.000046667527772324533",
            "extra": "mean: 163.36739464262808 usec\nrounds: 2240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6034.530461435113,
            "unit": "iter/sec",
            "range": "stddev: 0.00004718597234800128",
            "extra": "mean: 165.71297574694538 usec\nrounds: 2845"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.51796755440519,
            "unit": "iter/sec",
            "range": "stddev: 0.0005218395350316023",
            "extra": "mean: 10.46923448648988 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5195.915906170758,
            "unit": "iter/sec",
            "range": "stddev: 0.00004634924990161941",
            "extra": "mean: 192.45885000032104 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 226.68926204478123,
            "unit": "iter/sec",
            "range": "stddev: 0.0003558715248180532",
            "extra": "mean: 4.411324960784668 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.13856664184581,
            "unit": "iter/sec",
            "range": "stddev: 0.00007918513029374553",
            "extra": "mean: 10.622638900000918 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10344.441680167976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017449391017223233",
            "extra": "mean: 96.67027287873518 usec\nrounds: 4808"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4482.980204046851,
            "unit": "iter/sec",
            "range": "stddev: 0.00002114097440055763",
            "extra": "mean: 223.06589689985367 usec\nrounds: 1290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1466.5690358888871,
            "unit": "iter/sec",
            "range": "stddev: 0.000008225621403527967",
            "extra": "mean: 681.8635710482598 usec\nrounds: 1126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8704659160267578,
            "unit": "iter/sec",
            "range": "stddev: 0.005340157250073311",
            "extra": "mean: 1.1488100585999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 137.25287277125256,
            "unit": "iter/sec",
            "range": "stddev: 0.00015594584637698984",
            "extra": "mean: 7.285822000000053 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1473628.616693852,
            "unit": "iter/sec",
            "range": "stddev: 1.0345564171650109e-7",
            "extra": "mean: 678.5970282278735 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4190.84052802348,
            "unit": "iter/sec",
            "range": "stddev: 0.00220279532914304",
            "extra": "mean: 238.61561739540312 usec\nrounds: 2219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.25215631632676,
            "unit": "iter/sec",
            "range": "stddev: 0.00008332204322602832",
            "extra": "mean: 5.873640731703922 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.7161995363365,
            "unit": "iter/sec",
            "range": "stddev: 0.0007150855478478138",
            "extra": "mean: 11.27189853968461 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.18437467719384,
            "unit": "iter/sec",
            "range": "stddev: 0.00014861773627772372",
            "extra": "mean: 14.248185648150347 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8665257557836759,
            "unit": "iter/sec",
            "range": "stddev: 0.006884469742910915",
            "extra": "mean: 1.1540337876000137 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.41364151831067,
            "unit": "iter/sec",
            "range": "stddev: 0.00021001781015193117",
            "extra": "mean: 3.977508913044279 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5834886446097384,
            "unit": "iter/sec",
            "range": "stddev: 0.04977700097933047",
            "extra": "mean: 1.7138294108000025 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.79221585964274,
            "unit": "iter/sec",
            "range": "stddev: 0.0006725785871812821",
            "extra": "mean: 10.776766032967652 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.409796439136095,
            "unit": "iter/sec",
            "range": "stddev: 0.0005140020306930676",
            "extra": "mean: 39.354900083331756 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 250.57363817668164,
            "unit": "iter/sec",
            "range": "stddev: 0.00021549690935431304",
            "extra": "mean: 3.990842800849191 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.67865252485598,
            "unit": "iter/sec",
            "range": "stddev: 0.0007472368780780102",
            "extra": "mean: 23.43091782050995 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56996.28891055879,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018193692334782367",
            "extra": "mean: 17.545001948622414 usec\nrounds: 12316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5341454.824437285,
            "unit": "iter/sec",
            "range": "stddev: 4.8221741920517e-9",
            "extra": "mean: 187.2149129530473 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 144.97585894265794,
            "unit": "iter/sec",
            "range": "stddev: 0.009261096636664023",
            "extra": "mean: 6.897700122580604 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7503834263458535,
            "unit": "iter/sec",
            "range": "stddev: 0.001158674823043476",
            "extra": "mean: 1.332652034800003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 149.28834189997445,
            "unit": "iter/sec",
            "range": "stddev: 0.0006760485577724643",
            "extra": "mean: 6.698446692307802 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.30386137289787,
            "unit": "iter/sec",
            "range": "stddev: 0.00001180158270148299",
            "extra": "mean: 3.7835239894173625 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 413.3527168196388,
            "unit": "iter/sec",
            "range": "stddev: 0.000058649062078895146",
            "extra": "mean: 2.4192413870992833 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119939.91762077445,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017406259238921443",
            "extra": "mean: 8.33750781088408 usec\nrounds: 34247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19724.966011410226,
            "unit": "iter/sec",
            "range": "stddev: 0.000012271134385863389",
            "extra": "mean: 50.697172275051514 usec\nrounds: 5468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 391983.6924912156,
            "unit": "iter/sec",
            "range": "stddev: 4.959690016426699e-7",
            "extra": "mean: 2.5511265370367675 usec\nrounds: 1952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.25355857468392,
            "unit": "iter/sec",
            "range": "stddev: 0.0005292030514322363",
            "extra": "mean: 26.843073205885933 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 222.6222791434462,
            "unit": "iter/sec",
            "range": "stddev: 0.00795226641434732",
            "extra": "mean: 4.491913405287042 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.10311430853254,
            "unit": "iter/sec",
            "range": "stddev: 0.0003268961955306493",
            "extra": "mean: 15.847078404255306 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 558824.3574606373,
            "unit": "iter/sec",
            "range": "stddev: 1.6017437310837217e-7",
            "extra": "mean: 1.7894710326230518 usec\nrounds: 21835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5752759119861888,
            "unit": "iter/sec",
            "range": "stddev: 0.0012191632265194938",
            "extra": "mean: 634.809427599987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5795.447295808995,
            "unit": "iter/sec",
            "range": "stddev: 0.00004785753693517123",
            "extra": "mean: 172.54923545300028 usec\nrounds: 2234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 256.0113266970465,
            "unit": "iter/sec",
            "range": "stddev: 0.00021577173296025628",
            "extra": "mean: 3.9060771759655766 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 275.6150865136497,
            "unit": "iter/sec",
            "range": "stddev: 0.00006892490431712428",
            "extra": "mean: 3.6282484121219376 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.253637646556104,
            "unit": "iter/sec",
            "range": "stddev: 0.0012887096399621146",
            "extra": "mean: 443.7270567999917 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15245748549969979,
            "unit": "iter/sec",
            "range": "stddev: 0.0978055800255891",
            "extra": "mean: 6.559205648199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 159.81408618525637,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588252708350362",
            "extra": "mean: 6.257270706668502 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 143.85740615509093,
            "unit": "iter/sec",
            "range": "stddev: 0.0006839993821452429",
            "extra": "mean: 6.951327892857405 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1945293.4724179776,
            "unit": "iter/sec",
            "range": "stddev: 4.333783096651793e-8",
            "extra": "mean: 514.0612530596629 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.13813126700543,
            "unit": "iter/sec",
            "range": "stddev: 0.00022307011228307313",
            "extra": "mean: 10.401699999999892 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.16771612789508,
            "unit": "iter/sec",
            "range": "stddev: 0.00005945826821383688",
            "extra": "mean: 8.185468564813956 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 251.84507857598024,
            "unit": "iter/sec",
            "range": "stddev: 0.00020741776055427364",
            "extra": "mean: 3.9706950227272584 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 240.70970052164907,
            "unit": "iter/sec",
            "range": "stddev: 0.00021710306381795665",
            "extra": "mean: 4.15438180444274 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 324.5704340562512,
            "unit": "iter/sec",
            "range": "stddev: 0.000031009176454642856",
            "extra": "mean: 3.080995355931558 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 517.2093771536678,
            "unit": "iter/sec",
            "range": "stddev: 0.00004170868439957632",
            "extra": "mean: 1.9334529576846606 msec\nrounds: 449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.81121359529842,
            "unit": "iter/sec",
            "range": "stddev: 0.00016202799876551",
            "extra": "mean: 22.82520656098225 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.68133894731757,
            "unit": "iter/sec",
            "range": "stddev: 0.00006948503017904414",
            "extra": "mean: 11.276329517239974 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.03160472569861,
            "unit": "iter/sec",
            "range": "stddev: 0.014044612909930861",
            "extra": "mean: 12.981684641789485 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1545041.7002338995,
            "unit": "iter/sec",
            "range": "stddev: 8.422085356161292e-8",
            "extra": "mean: 647.2317218678388 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 159.57117611343594,
            "unit": "iter/sec",
            "range": "stddev: 0.0007072054600269752",
            "extra": "mean: 6.2667959487189595 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 248.71905345180775,
            "unit": "iter/sec",
            "range": "stddev: 0.00012171011840894928",
            "extra": "mean: 4.020600698344817 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.68094232475396,
            "unit": "iter/sec",
            "range": "stddev: 0.0001235121280017464",
            "extra": "mean: 9.834684623654915 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.23533517902847,
            "unit": "iter/sec",
            "range": "stddev: 0.00008398006446196679",
            "extra": "mean: 14.873131774197095 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.92950726178563,
            "unit": "iter/sec",
            "range": "stddev: 0.0006027234039361963",
            "extra": "mean: 10.534132419357404 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.197914526301805,
            "unit": "iter/sec",
            "range": "stddev: 0.00036469592642537874",
            "extra": "mean: 108.72029710000675 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 142.96484878126117,
            "unit": "iter/sec",
            "range": "stddev: 0.00011749180150167104",
            "extra": "mean: 6.994726385714703 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.896446593377272,
            "unit": "iter/sec",
            "range": "stddev: 0.0013990460399958022",
            "extra": "mean: 204.22973700000284 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.48145800142242,
            "unit": "iter/sec",
            "range": "stddev: 0.0009640271983038677",
            "extra": "mean: 29.001093862061992 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 134.00992322436971,
            "unit": "iter/sec",
            "range": "stddev: 0.014134398971472806",
            "extra": "mean: 7.462133966943052 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9759.965711684757,
            "unit": "iter/sec",
            "range": "stddev: 0.00002026556938635677",
            "extra": "mean: 102.45937634829875 usec\nrounds: 4820"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 980.0210564744302,
            "unit": "iter/sec",
            "range": "stddev: 0.000025948834727324045",
            "extra": "mean: 1.0203862390441314 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 156.6883185468021,
            "unit": "iter/sec",
            "range": "stddev: 0.0007121257958670214",
            "extra": "mean: 6.382096695365995 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1935238.5869311101,
            "unit": "iter/sec",
            "range": "stddev: 3.3816969559967894e-8",
            "extra": "mean: 516.7321521767002 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12040139.05458807,
            "unit": "iter/sec",
            "range": "stddev: 3.122298221929582e-9",
            "extra": "mean: 83.05551916512796 nsec\nrounds: 120482"
          }
        ]
      }
    ]
  }
}