window.BENCHMARK_DATA = {
  "lastUpdate": 1679838202443,
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
          "id": "99cb8e8f24c9700cc3f9c32273675eeff53e3067",
          "message": "test(pyspark): add `execute` assertion",
          "timestamp": "2023-03-26T09:37:07-04:00",
          "tree_id": "ef7d9b0ba5b2c2b6446a217110c68b4f627f33ef",
          "url": "https://github.com/ibis-project/ibis/commit/99cb8e8f24c9700cc3f9c32273675eeff53e3067"
        },
        "date": 1679838117904,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.71570549255023,
            "unit": "iter/sec",
            "range": "stddev: 0.00008365208740624364",
            "extra": "mean: 10.130100322035048 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2521118.491311719,
            "unit": "iter/sec",
            "range": "stddev: 2.6868934514049935e-8",
            "extra": "mean: 396.6493456958032 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.78489118805462,
            "unit": "iter/sec",
            "range": "stddev: 0.000059619396607502834",
            "extra": "mean: 6.258414000001267 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.2592260648956,
            "unit": "iter/sec",
            "range": "stddev: 0.000017778898075388502",
            "extra": "mean: 1.4529409300002765 msec\nrounds: 600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.6251880551851,
            "unit": "iter/sec",
            "range": "stddev: 0.00025370776280627565",
            "extra": "mean: 3.525779945205112 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.0553859091615,
            "unit": "iter/sec",
            "range": "stddev: 0.000029965710755422767",
            "extra": "mean: 3.0763988026319167 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 190.12143444177414,
            "unit": "iter/sec",
            "range": "stddev: 0.000028781993975789495",
            "extra": "mean: 5.259796208334711 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7404723.146522485,
            "unit": "iter/sec",
            "range": "stddev: 3.7123456093588767e-9",
            "extra": "mean: 135.04893838874298 nsec\nrounds: 67115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.39683562326818,
            "unit": "iter/sec",
            "range": "stddev: 0.00022571470339774054",
            "extra": "mean: 96.18311150000238 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 303.2410496693308,
            "unit": "iter/sec",
            "range": "stddev: 0.00014511041444772521",
            "extra": "mean: 3.297706564102881 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.54928426494587,
            "unit": "iter/sec",
            "range": "stddev: 0.0005284184875663227",
            "extra": "mean: 8.227115495145654 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5860510.1112236595,
            "unit": "iter/sec",
            "range": "stddev: 9.421831987017287e-9",
            "extra": "mean: 170.6336105598162 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.83945112381846,
            "unit": "iter/sec",
            "range": "stddev: 0.0003023779857060163",
            "extra": "mean: 10.656498818183929 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.915203793178543,
            "unit": "iter/sec",
            "range": "stddev: 0.003408471498951539",
            "extra": "mean: 1.0926528139999903 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.56138483036662,
            "unit": "iter/sec",
            "range": "stddev: 0.0004997511918561566",
            "extra": "mean: 9.384262428570013 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12615563.93436552,
            "unit": "iter/sec",
            "range": "stddev: 2.8345116671896896e-9",
            "extra": "mean: 79.26716595482524 nsec\nrounds: 121967"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17990024414598899,
            "unit": "iter/sec",
            "range": "stddev: 0.03684672329189834",
            "extra": "mean: 5.558636147200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1838124.2234386143,
            "unit": "iter/sec",
            "range": "stddev: 8.709791798981034e-8",
            "extra": "mean: 544.0328717986648 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 182.13648617294797,
            "unit": "iter/sec",
            "range": "stddev: 0.0039606362207015005",
            "extra": "mean: 5.490388120535324 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11497.550261889082,
            "unit": "iter/sec",
            "range": "stddev: 0.000013114448218477243",
            "extra": "mean: 86.9750492254597 usec\nrounds: 4002"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6754308727839692,
            "unit": "iter/sec",
            "range": "stddev: 0.0017425370599774127",
            "extra": "mean: 1.4805364105999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5352.632189008531,
            "unit": "iter/sec",
            "range": "stddev: 0.00004621854740604892",
            "extra": "mean: 186.82397084063984 usec\nrounds: 2092"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5484.597057626419,
            "unit": "iter/sec",
            "range": "stddev: 0.000054876593319779274",
            "extra": "mean: 182.32879999989868 usec\nrounds: 375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.9071730452677,
            "unit": "iter/sec",
            "range": "stddev: 0.00009799099006634387",
            "extra": "mean: 16.975861313723914 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.21888268283602,
            "unit": "iter/sec",
            "range": "stddev: 0.0004955376224769184",
            "extra": "mean: 9.326715359999582 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.538164697945917,
            "unit": "iter/sec",
            "range": "stddev: 0.00025128715579714016",
            "extra": "mean: 180.56523316666548 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 283.61548877086176,
            "unit": "iter/sec",
            "range": "stddev: 0.005552483448822319",
            "extra": "mean: 3.525900522336841 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.11164230574927,
            "unit": "iter/sec",
            "range": "stddev: 0.0005689423694155312",
            "extra": "mean: 8.325587601695243 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.1330190112551,
            "unit": "iter/sec",
            "range": "stddev: 0.000096354032577739",
            "extra": "mean: 10.623264934065634 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.23128973362316,
            "unit": "iter/sec",
            "range": "stddev: 0.0005820543022818524",
            "extra": "mean: 8.317302444443014 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5734.01660002916,
            "unit": "iter/sec",
            "range": "stddev: 0.00004598680607878319",
            "extra": "mean: 174.39782089136514 usec\nrounds: 3657"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5613.213270215623,
            "unit": "iter/sec",
            "range": "stddev: 0.000020695001937642074",
            "extra": "mean: 178.15107886709362 usec\nrounds: 1306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.469389310328715,
            "unit": "iter/sec",
            "range": "stddev: 0.00029993865711842345",
            "extra": "mean: 21.51954253846264 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.0393280293576,
            "unit": "iter/sec",
            "range": "stddev: 0.0005309271583147612",
            "extra": "mean: 9.800142938145294 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 481812.4507024332,
            "unit": "iter/sec",
            "range": "stddev: 1.877873991627317e-7",
            "extra": "mean: 2.07549638566231 usec\nrounds: 2075"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.01387429547486,
            "unit": "iter/sec",
            "range": "stddev: 0.00007332939718607018",
            "extra": "mean: 13.510980333333789 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5805.628005231695,
            "unit": "iter/sec",
            "range": "stddev: 0.000042703521230470976",
            "extra": "mean: 172.2466542980119 usec\nrounds: 2722"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.66036300459679,
            "unit": "iter/sec",
            "range": "stddev: 0.00018960988899129104",
            "extra": "mean: 9.464287000002969 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.85509771583564,
            "unit": "iter/sec",
            "range": "stddev: 0.0005817957932719402",
            "extra": "mean: 8.78309377500024 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5640.098472325969,
            "unit": "iter/sec",
            "range": "stddev: 0.00005024771498875362",
            "extra": "mean: 177.30186891357613 usec\nrounds: 2937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1192.2168782128958,
            "unit": "iter/sec",
            "range": "stddev: 0.000012145344599565185",
            "extra": "mean: 838.7735640003484 usec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137310.84621014303,
            "unit": "iter/sec",
            "range": "stddev: 2.9776238048134065e-7",
            "extra": "mean: 7.2827458835231536 usec\nrounds: 41843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70093.80839966414,
            "unit": "iter/sec",
            "range": "stddev: 4.2481230920175686e-7",
            "extra": "mean: 14.266595336041002 usec\nrounds: 13851"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.68878494344706,
            "unit": "iter/sec",
            "range": "stddev: 0.0002080505237711912",
            "extra": "mean: 13.949183275862008 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 39.05934972653115,
            "unit": "iter/sec",
            "range": "stddev: 0.018787804062223072",
            "extra": "mean: 25.602064729734803 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.92526522085645,
            "unit": "iter/sec",
            "range": "stddev: 0.0005749325288085379",
            "extra": "mean: 9.622299234693827 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5746.700619168447,
            "unit": "iter/sec",
            "range": "stddev: 0.00004628791089699386",
            "extra": "mean: 174.01289300932837 usec\nrounds: 3047"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.8942950103643,
            "unit": "iter/sec",
            "range": "stddev: 0.000030314852996412536",
            "extra": "mean: 1.8453783499988201 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1703203.1272733281,
            "unit": "iter/sec",
            "range": "stddev: 9.033797043677436e-8",
            "extra": "mean: 587.1290299947418 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9113552138706206,
            "unit": "iter/sec",
            "range": "stddev: 0.0022652808984754123",
            "extra": "mean: 1.0972669983999936 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.71803536921706,
            "unit": "iter/sec",
            "range": "stddev: 0.00012831967069577076",
            "extra": "mean: 14.767114765626754 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.46798406329908,
            "unit": "iter/sec",
            "range": "stddev: 0.010830416319034019",
            "extra": "mean: 8.165399370688897 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5475.676223756595,
            "unit": "iter/sec",
            "range": "stddev: 0.00005216619658005761",
            "extra": "mean: 182.62584549127132 usec\nrounds: 1974"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.1213364449106,
            "unit": "iter/sec",
            "range": "stddev: 0.0006140773415156081",
            "extra": "mean: 8.324915702703779 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.64603911220456,
            "unit": "iter/sec",
            "range": "stddev: 0.00020804451424144145",
            "extra": "mean: 3.2824979537373498 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.8404681246734,
            "unit": "iter/sec",
            "range": "stddev: 0.000585135635223875",
            "extra": "mean: 8.784222486724502 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.68920852122258,
            "unit": "iter/sec",
            "range": "stddev: 0.00007677765785450775",
            "extra": "mean: 8.496955775003556 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.310542899551164,
            "unit": "iter/sec",
            "range": "stddev: 0.0014920617817813769",
            "extra": "mean: 65.31447033333583 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5979430694300842,
            "unit": "iter/sec",
            "range": "stddev: 0.0016053858745937817",
            "extra": "mean: 384.91990519999035 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.91826348913813,
            "unit": "iter/sec",
            "range": "stddev: 0.00006296425779690003",
            "extra": "mean: 6.175955562091873 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.5728875831445,
            "unit": "iter/sec",
            "range": "stddev: 0.000010743268426491037",
            "extra": "mean: 1.3252530225449062 msec\nrounds: 621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 261.45662572160023,
            "unit": "iter/sec",
            "range": "stddev: 0.0037899963238952426",
            "extra": "mean: 3.824726174905978 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5187.808195160328,
            "unit": "iter/sec",
            "range": "stddev: 0.00004981383473130548",
            "extra": "mean: 192.75963227262207 usec\nrounds: 2200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 260.31440165698336,
            "unit": "iter/sec",
            "range": "stddev: 0.009755392208033313",
            "extra": "mean: 3.8415085513313296 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.9103773321132,
            "unit": "iter/sec",
            "range": "stddev: 0.00009713558740458776",
            "extra": "mean: 9.098321962614387 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6320891.058531973,
            "unit": "iter/sec",
            "range": "stddev: 1.4283952354123847e-8",
            "extra": "mean: 158.20554265845448 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7758600087168317,
            "unit": "iter/sec",
            "range": "stddev: 0.0017876392391171056",
            "extra": "mean: 563.1074494000018 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 297.7967347639227,
            "unit": "iter/sec",
            "range": "stddev: 0.00004571529242324521",
            "extra": "mean: 3.357995180144425 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.14254490410784,
            "unit": "iter/sec",
            "range": "stddev: 0.00004519295399907885",
            "extra": "mean: 6.529864059828461 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 354.28542704951724,
            "unit": "iter/sec",
            "range": "stddev: 0.00003518437891659361",
            "extra": "mean: 2.8225829335628685 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1887928.284561374,
            "unit": "iter/sec",
            "range": "stddev: 8.141160782573297e-8",
            "extra": "mean: 529.6811368194168 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8574045984654683,
            "unit": "iter/sec",
            "range": "stddev: 0.0028933416340845715",
            "extra": "mean: 1.1663105164000058 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.40269257726808,
            "unit": "iter/sec",
            "range": "stddev: 0.019069876351686086",
            "extra": "mean: 25.378976272725914 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.68068846443856,
            "unit": "iter/sec",
            "range": "stddev: 0.00020369541602066087",
            "extra": "mean: 3.2187388438675453 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.37534539595828,
            "unit": "iter/sec",
            "range": "stddev: 0.0005659193838401377",
            "extra": "mean: 8.376939113207017 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.073142599289316,
            "unit": "iter/sec",
            "range": "stddev: 0.00037880689689706793",
            "extra": "mean: 35.62123465384012 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.5994816986313,
            "unit": "iter/sec",
            "range": "stddev: 0.014751351413106588",
            "extra": "mean: 10.91709233999893 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.0711888254926,
            "unit": "iter/sec",
            "range": "stddev: 0.0002293677758314969",
            "extra": "mean: 20.378556622221012 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11897.657216324193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015709376875790007",
            "extra": "mean: 84.05016061716327 usec\nrounds: 6998"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.5441021443044,
            "unit": "iter/sec",
            "range": "stddev: 0.0001984806859270417",
            "extra": "mean: 3.3162644962674426 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13246.346269438982,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015664624162254808",
            "extra": "mean: 75.49251541967676 usec\nrounds: 7231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1762.0383703988825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056894814961397716",
            "extra": "mean: 567.5245311335782 usec\nrounds: 1333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8079.9534963451215,
            "unit": "iter/sec",
            "range": "stddev: 0.000011818409342370576",
            "extra": "mean: 123.76308854405401 usec\nrounds: 3806"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.03827559501353,
            "unit": "iter/sec",
            "range": "stddev: 0.0005984760669247223",
            "extra": "mean: 9.89723937894831 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 708104.0045244539,
            "unit": "iter/sec",
            "range": "stddev: 1.603678392021378e-7",
            "extra": "mean: 1.4122219244778549 usec\nrounds: 26883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 107.55405615118718,
            "unit": "iter/sec",
            "range": "stddev: 0.01096018972828003",
            "extra": "mean: 9.297650277310922 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.43544822586813,
            "unit": "iter/sec",
            "range": "stddev: 0.00022207132755522235",
            "extra": "mean: 3.210938272109447 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.93309882004081,
            "unit": "iter/sec",
            "range": "stddev: 0.0006054839397728254",
            "extra": "mean: 9.907552742266986 msec\nrounds: 97"
          }
        ]
      }
    ]
  }
}