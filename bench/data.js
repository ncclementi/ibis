window.BENCHMARK_DATA = {
  "lastUpdate": 1677665537632,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "120908425+krzysztof-kwitt@users.noreply.github.com",
            "name": "Krzysztof Kwitt",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "764d9c3ffbf786163e09cbd6cbc4f7b46e9e1217",
          "message": "docs: add Apache Druid to backend matrix",
          "timestamp": "2023-03-01T04:58:39-05:00",
          "tree_id": "0b0a870b535127981b3a97a49e96d181c21791b2",
          "url": "https://github.com/ibis-project/ibis/commit/764d9c3ffbf786163e09cbd6cbc4f7b46e9e1217"
        },
        "date": 1677665453129,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 143.27512382679296,
            "unit": "iter/sec",
            "range": "stddev: 0.0004970910233977432",
            "extra": "mean: 6.979578682541654 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.1511128063547,
            "unit": "iter/sec",
            "range": "stddev: 0.00004484525793829412",
            "extra": "mean: 1.338417333334252 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1674569.1435271294,
            "unit": "iter/sec",
            "range": "stddev: 9.616798974703236e-8",
            "extra": "mean: 597.1685336884384 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.790092097868352,
            "unit": "iter/sec",
            "range": "stddev: 0.002170478932498656",
            "extra": "mean: 558.6304756000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70802.82021210747,
            "unit": "iter/sec",
            "range": "stddev: 6.656800545977002e-7",
            "extra": "mean: 14.123731187603138 usec\nrounds: 13794"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 144.28056576847698,
            "unit": "iter/sec",
            "range": "stddev: 0.0003287923673879376",
            "extra": "mean: 6.930940384616126 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5733567.858292989,
            "unit": "iter/sec",
            "range": "stddev: 1.1510797991770257e-8",
            "extra": "mean: 174.4114702599708 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1826001772964238,
            "unit": "iter/sec",
            "range": "stddev: 0.03587781307017264",
            "extra": "mean: 5.476445942199996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140660.7340469762,
            "unit": "iter/sec",
            "range": "stddev: 3.061610622878776e-7",
            "extra": "mean: 7.109304574409741 usec\nrounds: 40486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.18434229043453,
            "unit": "iter/sec",
            "range": "stddev: 0.0005009944231741955",
            "extra": "mean: 9.691392878052028 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.916676007717407,
            "unit": "iter/sec",
            "range": "stddev: 0.004475571029023164",
            "extra": "mean: 1.090897974400002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.5421672224683,
            "unit": "iter/sec",
            "range": "stddev: 0.0002006828161070957",
            "extra": "mean: 3.2201746028377944 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 307.01796676682153,
            "unit": "iter/sec",
            "range": "stddev: 0.00020185927266522173",
            "extra": "mean: 3.257138370535476 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5375.437904067773,
            "unit": "iter/sec",
            "range": "stddev: 0.000034684716758851546",
            "extra": "mean: 186.03135555584535 usec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.9972966917785,
            "unit": "iter/sec",
            "range": "stddev: 0.0002455366195119962",
            "extra": "mean: 3.5461332847207907 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 712906.4250079343,
            "unit": "iter/sec",
            "range": "stddev: 1.8193614628029707e-7",
            "extra": "mean: 1.4027086373767363 usec\nrounds: 24938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 142.4573893328164,
            "unit": "iter/sec",
            "range": "stddev: 0.0005098351308582465",
            "extra": "mean: 7.01964288889043 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 134.0721575219617,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490128112690881",
            "extra": "mean: 7.458670155555561 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5316.4643254057055,
            "unit": "iter/sec",
            "range": "stddev: 0.000027890293142055676",
            "extra": "mean: 188.09493279609072 usec\nrounds: 1488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.22394952850229,
            "unit": "iter/sec",
            "range": "stddev: 0.00007595950860898019",
            "extra": "mean: 10.180816438355734 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 90.25609443559465,
            "unit": "iter/sec",
            "range": "stddev: 0.010607315900540258",
            "extra": "mean: 11.079584223684579 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.620200026429307,
            "unit": "iter/sec",
            "range": "stddev: 0.0004787085842638292",
            "extra": "mean: 64.01966673333277 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 311.10673775051066,
            "unit": "iter/sec",
            "range": "stddev: 0.0001657843620177072",
            "extra": "mean: 3.2143308988760677 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.69334678965583,
            "unit": "iter/sec",
            "range": "stddev: 0.00019601494624284336",
            "extra": "mean: 3.314623973783591 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.664810869275853,
            "unit": "iter/sec",
            "range": "stddev: 0.00012921204449067348",
            "extra": "mean: 176.5284001666648 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2478878.035732919,
            "unit": "iter/sec",
            "range": "stddev: 2.0075632092699103e-8",
            "extra": "mean: 403.40831036678645 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5580.70164237413,
            "unit": "iter/sec",
            "range": "stddev: 0.00005189313425660697",
            "extra": "mean: 179.18893789394235 usec\nrounds: 2061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.854002010549257,
            "unit": "iter/sec",
            "range": "stddev: 0.004173495098557859",
            "extra": "mean: 1.1709574306000092 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5859.988984762376,
            "unit": "iter/sec",
            "range": "stddev: 0.000042423937460468144",
            "extra": "mean: 170.6487849380403 usec\nrounds: 2576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4921374695186653,
            "unit": "iter/sec",
            "range": "stddev: 0.009318634384452205",
            "extra": "mean: 401.2619738000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.5273665821452,
            "unit": "iter/sec",
            "range": "stddev: 0.0001217359665520947",
            "extra": "mean: 6.229467419116223 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.75291291993545,
            "unit": "iter/sec",
            "range": "stddev: 0.005583784026965826",
            "extra": "mean: 3.679813361539284 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.803698889506,
            "unit": "iter/sec",
            "range": "stddev: 0.000053211512476282394",
            "extra": "mean: 1.8456869195423071 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 350.82466264255714,
            "unit": "iter/sec",
            "range": "stddev: 0.00004002889818728075",
            "extra": "mean: 2.8504267415739375 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 315.8691723437851,
            "unit": "iter/sec",
            "range": "stddev: 0.00019891500580444026",
            "extra": "mean: 3.1658676678698536 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7013885.724433835,
            "unit": "iter/sec",
            "range": "stddev: 1.1296475365310227e-8",
            "extra": "mean: 142.57432175093155 nsec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13467.174834088566,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016970573864196326",
            "extra": "mean: 74.2546237291556 usec\nrounds: 1770"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.218592505711435,
            "unit": "iter/sec",
            "range": "stddev: 0.0006444610758288521",
            "extra": "mean: 22.11479713513181 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.9000898266365,
            "unit": "iter/sec",
            "range": "stddev: 0.0005043832248118596",
            "extra": "mean: 9.718164499999707 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5638.039532512848,
            "unit": "iter/sec",
            "range": "stddev: 0.00010126335405430491",
            "extra": "mean: 177.36661728483918 usec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.28983962319298,
            "unit": "iter/sec",
            "range": "stddev: 0.00006696223147538554",
            "extra": "mean: 8.382943619999423 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12039.541133598574,
            "unit": "iter/sec",
            "range": "stddev: 0.000002071370253878565",
            "extra": "mean: 83.05964396012689 usec\nrounds: 5182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.72735019415908,
            "unit": "iter/sec",
            "range": "stddev: 0.00023795725789750247",
            "extra": "mean: 20.109657886364893 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2473108.666353665,
            "unit": "iter/sec",
            "range": "stddev: 1.502883360076269e-8",
            "extra": "mean: 404.34939782668414 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.3742293995007,
            "unit": "iter/sec",
            "range": "stddev: 0.0006144791868049063",
            "extra": "mean: 9.400773153847108 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.83179273002557,
            "unit": "iter/sec",
            "range": "stddev: 0.0001118647280885401",
            "extra": "mean: 13.187081090910969 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5693.335808766907,
            "unit": "iter/sec",
            "range": "stddev: 0.00004235286793791004",
            "extra": "mean: 175.6439517339107 usec\nrounds: 2134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 284.2661641860526,
            "unit": "iter/sec",
            "range": "stddev: 0.00015403544840688995",
            "extra": "mean: 3.5178298580252365 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 128.61586935814233,
            "unit": "iter/sec",
            "range": "stddev: 0.008508240789537064",
            "extra": "mean: 7.775090313431003 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.59214948103423,
            "unit": "iter/sec",
            "range": "stddev: 0.0005751093470951581",
            "extra": "mean: 9.381553940592298 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8036.05530301251,
            "unit": "iter/sec",
            "range": "stddev: 0.000012344670458104036",
            "extra": "mean: 124.43916353153094 usec\nrounds: 4519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.606592670781435,
            "unit": "iter/sec",
            "range": "stddev: 0.0004292242901690083",
            "extra": "mean: 36.223231599979044 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.48753931623304,
            "unit": "iter/sec",
            "range": "stddev: 0.0005801096565690334",
            "extra": "mean: 9.303403969998385 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 162.19418698237212,
            "unit": "iter/sec",
            "range": "stddev: 0.0110023783152744",
            "extra": "mean: 6.165449074378257 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.6617583071132,
            "unit": "iter/sec",
            "range": "stddev: 0.0007632375898533222",
            "extra": "mean: 26.552132586202948 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 142.7413334148309,
            "unit": "iter/sec",
            "range": "stddev: 0.0005780706342789277",
            "extra": "mean: 7.00567926666222 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5777.1101524901305,
            "unit": "iter/sec",
            "range": "stddev: 0.000051238294103805586",
            "extra": "mean: 173.0969245183885 usec\nrounds: 3577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6081021.338916856,
            "unit": "iter/sec",
            "range": "stddev: 1.1832550787492323e-8",
            "extra": "mean: 164.4460600064216 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11481.180833383034,
            "unit": "iter/sec",
            "range": "stddev: 0.00003583560790980112",
            "extra": "mean: 87.09905492406924 usec\nrounds: 4315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 132.33907501515722,
            "unit": "iter/sec",
            "range": "stddev: 0.0005600990326600422",
            "extra": "mean: 7.556347207999352 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.15002257592958,
            "unit": "iter/sec",
            "range": "stddev: 0.0006654146240377049",
            "extra": "mean: 10.735370452378236 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.4678440196461,
            "unit": "iter/sec",
            "range": "stddev: 0.00015764012723113355",
            "extra": "mean: 7.3277335564562645 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1177.4497965983064,
            "unit": "iter/sec",
            "range": "stddev: 0.00006495853367565297",
            "extra": "mean: 849.2931103211661 usec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.573767295155356,
            "unit": "iter/sec",
            "range": "stddev: 0.023316671342000564",
            "extra": "mean: 17.369021465512937 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.02139647539242,
            "unit": "iter/sec",
            "range": "stddev: 0.00005897415131986221",
            "extra": "mean: 10.307004808507683 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.03370110671969,
            "unit": "iter/sec",
            "range": "stddev: 0.00022157703497911868",
            "extra": "mean: 9.342851734174209 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6835429348842069,
            "unit": "iter/sec",
            "range": "stddev: 0.0026509151142297353",
            "extra": "mean: 1.4629658927999913 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 311.4421032304937,
            "unit": "iter/sec",
            "range": "stddev: 0.0002209512631053142",
            "extra": "mean: 3.2108696596487944 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1738.15533040994,
            "unit": "iter/sec",
            "range": "stddev: 0.000035420495438062506",
            "extra": "mean: 575.3225747460397 usec\nrounds: 1378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11375676.18671633,
            "unit": "iter/sec",
            "range": "stddev: 6.290044504340968e-9",
            "extra": "mean: 87.90686228988389 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.473046467639112,
            "unit": "iter/sec",
            "range": "stddev: 0.00041305848590892405",
            "extra": "mean: 95.48320090910713 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.38674987315574,
            "unit": "iter/sec",
            "range": "stddev: 0.00019912580446709624",
            "extra": "mean: 3.170710248297325 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 140.13851514242148,
            "unit": "iter/sec",
            "range": "stddev: 0.0011559598301687255",
            "extra": "mean: 7.135797028987422 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.83515708146078,
            "unit": "iter/sec",
            "range": "stddev: 0.00041439825971310184",
            "extra": "mean: 14.962185228070442 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2478497.583625528,
            "unit": "iter/sec",
            "range": "stddev: 1.5797626452860908e-8",
            "extra": "mean: 403.47023398652817 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5604.358482962196,
            "unit": "iter/sec",
            "range": "stddev: 0.00007955687618385024",
            "extra": "mean: 178.4325544199392 usec\nrounds: 2545"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 497203.3504362071,
            "unit": "iter/sec",
            "range": "stddev: 2.653256078739653e-7",
            "extra": "mean: 2.0112495201866176 usec\nrounds: 2080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.63481047075101,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424962337186013",
            "extra": "mean: 24.609441717952674 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.409442010984165,
            "unit": "iter/sec",
            "range": "stddev: 0.00008962012906097065",
            "extra": "mean: 16.832341226418368 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.2018910285095,
            "unit": "iter/sec",
            "range": "stddev: 0.000043802196836013185",
            "extra": "mean: 6.570220601350389 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.40729454274661,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251924097480051",
            "extra": "mean: 9.487009455445822 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.66167044104907,
            "unit": "iter/sec",
            "range": "stddev: 0.00006129527097503411",
            "extra": "mean: 7.426018084617262 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5317.6921744291485,
            "unit": "iter/sec",
            "range": "stddev: 0.00004604127012926786",
            "extra": "mean: 188.0515018918615 usec\nrounds: 2642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9204522012301469,
            "unit": "iter/sec",
            "range": "stddev: 0.004580041989976957",
            "extra": "mean: 1.0864225199999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.7354767007677,
            "unit": "iter/sec",
            "range": "stddev: 0.000021687831928417398",
            "extra": "mean: 1.4498311798942545 msec\nrounds: 567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 197.746869449159,
            "unit": "iter/sec",
            "range": "stddev: 0.00004983854182258181",
            "extra": "mean: 5.056970068783321 msec\nrounds: 189"
          }
        ]
      }
    ]
  }
}