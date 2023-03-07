window.BENCHMARK_DATA = {
  "lastUpdate": 1678197501345,
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
          "id": "1f5a9c10337f2e063cf526cc4c857eb06a2eefe2",
          "message": "ci: remove bigquery test reason that is a tuple",
          "timestamp": "2023-03-07T08:53:12-05:00",
          "tree_id": "d081c3eb7dc36c15c115e4e7a6e78a3ebdb60284",
          "url": "https://github.com/ibis-project/ibis/commit/1f5a9c10337f2e063cf526cc4c857eb06a2eefe2"
        },
        "date": 1678197424399,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12024.049389988715,
            "unit": "iter/sec",
            "range": "stddev: 0.000033294798801327185",
            "extra": "mean: 83.16665771787375 usec\nrounds: 745"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.74584410469984,
            "unit": "iter/sec",
            "range": "stddev: 0.0007105305387527202",
            "extra": "mean: 11.662372800003595 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.4001442290307,
            "unit": "iter/sec",
            "range": "stddev: 0.00003011732285302647",
            "extra": "mean: 1.8712569799970424 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.950689238192126,
            "unit": "iter/sec",
            "range": "stddev: 0.0007555957497206375",
            "extra": "mean: 26.349982571426875 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.52191598093736,
            "unit": "iter/sec",
            "range": "stddev: 0.00008066867099267128",
            "extra": "mean: 64.42503626666394 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.67650956855938,
            "unit": "iter/sec",
            "range": "stddev: 0.0006103104383675318",
            "extra": "mean: 9.645386444445434 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.46552351542222,
            "unit": "iter/sec",
            "range": "stddev: 0.0006631773664859422",
            "extra": "mean: 9.219519415842903 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 321.8506549619738,
            "unit": "iter/sec",
            "range": "stddev: 0.00023878109529973994",
            "extra": "mean: 3.1070311170196265 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.30437058761058,
            "unit": "iter/sec",
            "range": "stddev: 0.00007364341863209732",
            "extra": "mean: 13.10540919608042 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.49689169005202,
            "unit": "iter/sec",
            "range": "stddev: 0.0007019145947252175",
            "extra": "mean: 9.478952260868331 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1744042.1682270258,
            "unit": "iter/sec",
            "range": "stddev: 8.204993844527835e-8",
            "extra": "mean: 573.380631625776 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.65093720841416,
            "unit": "iter/sec",
            "range": "stddev: 0.00047221731174658675",
            "extra": "mean: 18.297947868422614 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5142.79931506155,
            "unit": "iter/sec",
            "range": "stddev: 0.00005209455317722738",
            "extra": "mean: 194.4466308594489 usec\nrounds: 2048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.12984980056194,
            "unit": "iter/sec",
            "range": "stddev: 0.00012646904706639485",
            "extra": "mean: 10.08777882758712 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 336.1659370472318,
            "unit": "iter/sec",
            "range": "stddev: 0.000012842737087253399",
            "extra": "mean: 2.974721379517695 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1163.9274718519664,
            "unit": "iter/sec",
            "range": "stddev: 0.00006824400468162807",
            "extra": "mean: 859.1600629623979 usec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 744.263601902883,
            "unit": "iter/sec",
            "range": "stddev: 0.000011790048529286945",
            "extra": "mean: 1.3436099756098072 msec\nrounds: 615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14035.626148546324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014582726403021618",
            "extra": "mean: 71.24726673512677 usec\nrounds: 6812"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 306.7865024710988,
            "unit": "iter/sec",
            "range": "stddev: 0.00020002655327423655",
            "extra": "mean: 3.259595816456124 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.554053214864247,
            "unit": "iter/sec",
            "range": "stddev: 0.0003214603575838341",
            "extra": "mean: 94.75032763636322 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5687.403612897824,
            "unit": "iter/sec",
            "range": "stddev: 0.00005059209606953024",
            "extra": "mean: 175.82715559912302 usec\nrounds: 2063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.87382375717533,
            "unit": "iter/sec",
            "range": "stddev: 0.00024348505982779974",
            "extra": "mean: 3.237567974637311 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.428882792301042,
            "unit": "iter/sec",
            "range": "stddev: 0.030169445717149867",
            "extra": "mean: 32.86351348571413 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73377.24462432698,
            "unit": "iter/sec",
            "range": "stddev: 9.396210632359773e-7",
            "extra": "mean: 13.628203200048574 usec\nrounds: 12500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 742409.883766155,
            "unit": "iter/sec",
            "range": "stddev: 2.6288169112611535e-7",
            "extra": "mean: 1.346964826124245 usec\nrounds: 24450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8864568136968526,
            "unit": "iter/sec",
            "range": "stddev: 0.00837625778457119",
            "extra": "mean: 1.1280865402000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.951914894626896,
            "unit": "iter/sec",
            "range": "stddev: 0.00033064387466039585",
            "extra": "mean: 21.761878744185456 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7349475402298555,
            "unit": "iter/sec",
            "range": "stddev: 0.0010871900775479145",
            "extra": "mean: 576.3863038000068 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.39690086403807,
            "unit": "iter/sec",
            "range": "stddev: 0.0007169210093990943",
            "extra": "mean: 8.818583156862386 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.65707606654358,
            "unit": "iter/sec",
            "range": "stddev: 0.0008023209931060779",
            "extra": "mean: 8.427647411766612 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6731815893763328,
            "unit": "iter/sec",
            "range": "stddev: 0.07652585602095295",
            "extra": "mean: 1.485483286799996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5560.638505426686,
            "unit": "iter/sec",
            "range": "stddev: 0.00005777290361063845",
            "extra": "mean: 179.83546296420627 usec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12038855.138402043,
            "unit": "iter/sec",
            "range": "stddev: 3.6683658064189275e-9",
            "extra": "mean: 83.06437684503044 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.40542474900934,
            "unit": "iter/sec",
            "range": "stddev: 0.0001542116019784752",
            "extra": "mean: 7.3310867352968865 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5182.421227215325,
            "unit": "iter/sec",
            "range": "stddev: 0.000022973726989096898",
            "extra": "mean: 192.9599999993306 usec\nrounds: 3272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.9057047396672,
            "unit": "iter/sec",
            "range": "stddev: 0.000040390863785535704",
            "extra": "mean: 3.402451820000465 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.20007317427908,
            "unit": "iter/sec",
            "range": "stddev: 0.00015689966688288873",
            "extra": "mean: 15.822766490197294 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.51764907530446,
            "unit": "iter/sec",
            "range": "stddev: 0.00006745174586569297",
            "extra": "mean: 6.078375211538984 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.898828218907,
            "unit": "iter/sec",
            "range": "stddev: 0.00006355265120622945",
            "extra": "mean: 6.176696959460866 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148182.83435001737,
            "unit": "iter/sec",
            "range": "stddev: 4.487220516645505e-7",
            "extra": "mean: 6.748419979860392 usec\nrounds: 38759"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.5127311957762,
            "unit": "iter/sec",
            "range": "stddev: 0.0036796311977220957",
            "extra": "mean: 6.153364063491849 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 304.4347870862965,
            "unit": "iter/sec",
            "range": "stddev: 0.00022928782118801974",
            "extra": "mean: 3.284775730036841 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8771930478608863,
            "unit": "iter/sec",
            "range": "stddev: 0.006388398597547719",
            "extra": "mean: 1.1399999149999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5618.7289546029015,
            "unit": "iter/sec",
            "range": "stddev: 0.000055089718523387856",
            "extra": "mean: 177.97619498637553 usec\nrounds: 2154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.05796165116553,
            "unit": "iter/sec",
            "range": "stddev: 0.000779998149955359",
            "extra": "mean: 10.74599080246967 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.4206848359883,
            "unit": "iter/sec",
            "range": "stddev: 0.00010755425263541647",
            "extra": "mean: 5.06532535246128 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 287.1334431757381,
            "unit": "iter/sec",
            "range": "stddev: 0.0002731280695943911",
            "extra": "mean: 3.4827012448980272 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2724340.8491043365,
            "unit": "iter/sec",
            "range": "stddev: 1.9919918290061946e-8",
            "extra": "mean: 367.06126560053525 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 319.37287622638013,
            "unit": "iter/sec",
            "range": "stddev: 0.000217080874613912",
            "extra": "mean: 3.131136281251301 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2712506.6527038612,
            "unit": "iter/sec",
            "range": "stddev: 1.995055785445496e-8",
            "extra": "mean: 368.66269028434743 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.663953758698085,
            "unit": "iter/sec",
            "range": "stddev: 0.001337874170611828",
            "extra": "mean: 26.550584848492196 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.66944971766787,
            "unit": "iter/sec",
            "range": "stddev: 0.000725564673035277",
            "extra": "mean: 9.646043291667775 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.52429672716892,
            "unit": "iter/sec",
            "range": "stddev: 0.0010657742616718832",
            "extra": "mean: 42.50924104545364 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6091706.919488606,
            "unit": "iter/sec",
            "range": "stddev: 1.1136690902658598e-8",
            "extra": "mean: 164.1576020013872 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.23683356676761,
            "unit": "iter/sec",
            "range": "stddev: 0.0000678323717865002",
            "extra": "mean: 8.98982799074167 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 221.8651726824516,
            "unit": "iter/sec",
            "range": "stddev: 0.0036669208345918754",
            "extra": "mean: 4.507241888889283 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5509341.469342133,
            "unit": "iter/sec",
            "range": "stddev: 1.3539580779591584e-8",
            "extra": "mean: 181.50989652128786 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 318.83812008582925,
            "unit": "iter/sec",
            "range": "stddev: 0.00031247662471303386",
            "extra": "mean: 3.136387831325834 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5374.802117088099,
            "unit": "iter/sec",
            "range": "stddev: 0.000056682551578034796",
            "extra": "mean: 186.05336126156195 usec\nrounds: 2566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.0314812406773,
            "unit": "iter/sec",
            "range": "stddev: 0.000006541072390944518",
            "extra": "mean: 570.1151950207136 usec\nrounds: 964"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 290.82080639888767,
            "unit": "iter/sec",
            "range": "stddev: 0.000025738334017800736",
            "extra": "mean: 3.438543522324216 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.33759205860393,
            "unit": "iter/sec",
            "range": "stddev: 0.000054469322560421695",
            "extra": "mean: 10.273523094735394 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16572391931541414,
            "unit": "iter/sec",
            "range": "stddev: 0.012429583978590479",
            "extra": "mean: 6.034131971600004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.96657653618729,
            "unit": "iter/sec",
            "range": "stddev: 0.0007825613912178429",
            "extra": "mean: 9.436937878789571 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2735055.5851210123,
            "unit": "iter/sec",
            "range": "stddev: 2.0298241180047674e-8",
            "extra": "mean: 365.6232821882114 nsec\nrounds: 123442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.4416834902297,
            "unit": "iter/sec",
            "range": "stddev: 0.00046143240554449475",
            "extra": "mean: 8.514864316324218 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8442.150592788184,
            "unit": "iter/sec",
            "range": "stddev: 0.000013643262643734165",
            "extra": "mean: 118.45322930560641 usec\nrounds: 5412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 677.5706746025902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000250375318376948",
            "extra": "mean: 1.475860803135439 msec\nrounds: 574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 89.07756887794314,
            "unit": "iter/sec",
            "range": "stddev: 0.01912732925722645",
            "extra": "mean: 11.226170769997452 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5025.140363905724,
            "unit": "iter/sec",
            "range": "stddev: 0.00004898492073596415",
            "extra": "mean: 198.9994164506806 usec\nrounds: 389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12405.777138167032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016475801561714097",
            "extra": "mean: 80.60760634845252 usec\nrounds: 2111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.24231614061881,
            "unit": "iter/sec",
            "range": "stddev: 0.0007167437044260713",
            "extra": "mean: 8.753323932693364 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 116.98468784294548,
            "unit": "iter/sec",
            "range": "stddev: 0.000880150491976505",
            "extra": "mean: 8.548127267241352 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.03505329339449,
            "unit": "iter/sec",
            "range": "stddev: 0.0011605297701785264",
            "extra": "mean: 18.855453853660027 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5421.375637098506,
            "unit": "iter/sec",
            "range": "stddev: 0.00005909129222635081",
            "extra": "mean: 184.45502893343047 usec\nrounds: 2212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.95433403673016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000904063791964098",
            "extra": "mean: 6.412133437500245 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 118.76370545534586,
            "unit": "iter/sec",
            "range": "stddev: 0.0008375055353661217",
            "extra": "mean: 8.420080833331625 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.832800270788397,
            "unit": "iter/sec",
            "range": "stddev: 0.0024701971534468172",
            "extra": "mean: 1.2007681014000127 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.00760813195284,
            "unit": "iter/sec",
            "range": "stddev: 0.0008676910009022785",
            "extra": "mean: 9.999239244683984 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 315.76112531161436,
            "unit": "iter/sec",
            "range": "stddev: 0.0002145244432043988",
            "extra": "mean: 3.1669509633686936 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.453904767003692,
            "unit": "iter/sec",
            "range": "stddev: 0.002080047428738824",
            "extra": "mean: 407.5137770000083 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7002903.434740155,
            "unit": "iter/sec",
            "range": "stddev: 5.241619030968126e-9",
            "extra": "mean: 142.79791365380171 nsec\nrounds: 68028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 499397.98585306975,
            "unit": "iter/sec",
            "range": "stddev: 3.397485991709074e-7",
            "extra": "mean: 2.0024109594511157 usec\nrounds: 2117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.682892275366434,
            "unit": "iter/sec",
            "range": "stddev: 0.0003269673448094031",
            "extra": "mean: 175.96673516664887 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.77258341798267,
            "unit": "iter/sec",
            "range": "stddev: 0.0007949698023284893",
            "extra": "mean: 8.34915613793014 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.03511413032155,
            "unit": "iter/sec",
            "range": "stddev: 0.0008034304930573797",
            "extra": "mean: 8.400882439657124 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5286.897614253066,
            "unit": "iter/sec",
            "range": "stddev: 0.00006574859064644439",
            "extra": "mean: 189.1468443239902 usec\nrounds: 3154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 118.04750265093185,
            "unit": "iter/sec",
            "range": "stddev: 0.0008697637469703746",
            "extra": "mean: 8.471166077583314 msec\nrounds: 116"
          }
        ]
      }
    ]
  }
}