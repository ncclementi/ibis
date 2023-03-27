window.BENCHMARK_DATA = {
  "lastUpdate": 1679945289471,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "7e0e15b0f226b523968384a59942dda840f60911",
          "message": "feat(api): thread kwargs around properly to support more complex connection arguments",
          "timestamp": "2023-03-27T15:23:12-04:00",
          "tree_id": "62ed63987a46ccb90aebad0458971e80b1123cfb",
          "url": "https://github.com/ibis-project/ibis/commit/7e0e15b0f226b523968384a59942dda840f60911"
        },
        "date": 1679945212102,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.60592545658299,
            "unit": "iter/sec",
            "range": "stddev: 0.0003666328446220262",
            "extra": "mean: 21.005788468748676 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5447.329502203697,
            "unit": "iter/sec",
            "range": "stddev: 0.00004901672320899158",
            "extra": "mean: 183.57619079136916 usec\nrounds: 304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2722120.1750485604,
            "unit": "iter/sec",
            "range": "stddev: 2.0831462627644034e-8",
            "extra": "mean: 367.3607099222292 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12067.271660656097,
            "unit": "iter/sec",
            "range": "stddev: 0.000016625735975938417",
            "extra": "mean: 82.8687733334438 usec\nrounds: 4350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.33929008981556,
            "unit": "iter/sec",
            "range": "stddev: 0.00005874123431909977",
            "extra": "mean: 6.236774526317539 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.52147478677178,
            "unit": "iter/sec",
            "range": "stddev: 0.0004971145947915118",
            "extra": "mean: 9.850132714288543 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.13336837191214,
            "unit": "iter/sec",
            "range": "stddev: 0.0006301177661461712",
            "extra": "mean: 8.998197522938934 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.29549326171409,
            "unit": "iter/sec",
            "range": "stddev: 0.00010957974519912642",
            "extra": "mean: 8.525476744181148 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.3141767386487,
            "unit": "iter/sec",
            "range": "stddev: 0.00008998743279658764",
            "extra": "mean: 6.39737240002205 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 278.8444351998503,
            "unit": "iter/sec",
            "range": "stddev: 0.0002843934353270554",
            "extra": "mean: 3.5862289999916657 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 97.33045287737295,
            "unit": "iter/sec",
            "range": "stddev: 0.012416300058477494",
            "extra": "mean: 10.274276656864057 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 335.51097203603433,
            "unit": "iter/sec",
            "range": "stddev: 0.000015371674053767635",
            "extra": "mean: 2.9805284576284996 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147336.26976037113,
            "unit": "iter/sec",
            "range": "stddev: 3.566651594646812e-7",
            "extra": "mean: 6.787195044549504 usec\nrounds: 52629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5512.980335653521,
            "unit": "iter/sec",
            "range": "stddev: 0.00006043773821207989",
            "extra": "mean: 181.39009013560317 usec\nrounds: 1997"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5748.453829842632,
            "unit": "iter/sec",
            "range": "stddev: 0.000046360804230129754",
            "extra": "mean: 173.95982112765367 usec\nrounds: 2499"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.860778033103797,
            "unit": "iter/sec",
            "range": "stddev: 0.011808457288035146",
            "extra": "mean: 1.1617396838000105 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.37645410231916,
            "unit": "iter/sec",
            "range": "stddev: 0.00037695318871262985",
            "extra": "mean: 96.37203520001094 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.855391064925862,
            "unit": "iter/sec",
            "range": "stddev: 0.008356236389915025",
            "extra": "mean: 1.169055933599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 117.61051092016018,
            "unit": "iter/sec",
            "range": "stddev: 0.0006331499229880265",
            "extra": "mean: 8.502641406590346 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.18246355522625,
            "unit": "iter/sec",
            "range": "stddev: 0.00023603436854229242",
            "extra": "mean: 13.48027487999957 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.668086357837786,
            "unit": "iter/sec",
            "range": "stddev: 0.0616125059397355",
            "extra": "mean: 1.4968124828000213 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 311.3357707592904,
            "unit": "iter/sec",
            "range": "stddev: 0.00020282602992090608",
            "extra": "mean: 3.211966288233391 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.8145470185084,
            "unit": "iter/sec",
            "range": "stddev: 0.0005917703039311314",
            "extra": "mean: 9.362020697674483 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.10575731788438,
            "unit": "iter/sec",
            "range": "stddev: 0.000016666020957557927",
            "extra": "mean: 5.02245647474392 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.3571746153983,
            "unit": "iter/sec",
            "range": "stddev: 0.0006399544092302163",
            "extra": "mean: 9.402280604163593 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.74939671476855,
            "unit": "iter/sec",
            "range": "stddev: 0.02327667474823472",
            "extra": "mean: 26.49048957142072 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17127327483995147,
            "unit": "iter/sec",
            "range": "stddev: 0.17088155915618541",
            "extra": "mean: 5.838622522599996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.02939549679071,
            "unit": "iter/sec",
            "range": "stddev: 0.0006938816724279152",
            "extra": "mean: 9.898109308510767 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 233.42466003329488,
            "unit": "iter/sec",
            "range": "stddev: 0.003525171670016173",
            "extra": "mean: 4.284037512820468 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 295.1635498761085,
            "unit": "iter/sec",
            "range": "stddev: 0.00026063484475557244",
            "extra": "mean: 3.3879522062251195 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.60733076456248,
            "unit": "iter/sec",
            "range": "stddev: 0.0010054492133261478",
            "extra": "mean: 28.08410455172987 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1941880.9749594652,
            "unit": "iter/sec",
            "range": "stddev: 1.3405221114828007e-7",
            "extra": "mean: 514.9646208469981 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12722.462278005953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017541373817873322",
            "extra": "mean: 78.60113696141643 usec\nrounds: 4483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72070.9712016145,
            "unit": "iter/sec",
            "range": "stddev: 5.461287201584994e-7",
            "extra": "mean: 13.875211938001446 usec\nrounds: 12532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 308.4766178234541,
            "unit": "iter/sec",
            "range": "stddev: 0.00030254606033408544",
            "extra": "mean: 3.241736787234601 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 300.55146612207733,
            "unit": "iter/sec",
            "range": "stddev: 0.00023552586253089853",
            "extra": "mean: 3.3272171748243022 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.5351560960622,
            "unit": "iter/sec",
            "range": "stddev: 0.0001424207661698003",
            "extra": "mean: 10.578075303370175 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8308.249155387868,
            "unit": "iter/sec",
            "range": "stddev: 0.000014212464224675506",
            "extra": "mean: 120.3623027303537 usec\nrounds: 3736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1618748.4624825271,
            "unit": "iter/sec",
            "range": "stddev: 1.5519432152011085e-7",
            "extra": "mean: 617.7612045211713 nsec\nrounds: 96145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5526.686682871761,
            "unit": "iter/sec",
            "range": "stddev: 0.000058127183345317824",
            "extra": "mean: 180.9402373214294 usec\nrounds: 2031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 671.2979431845158,
            "unit": "iter/sec",
            "range": "stddev: 0.000024509323541839342",
            "extra": "mean: 1.4896515178583465 msec\nrounds: 560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.6186634653881,
            "unit": "iter/sec",
            "range": "stddev: 0.0006531482055696983",
            "extra": "mean: 10.796959949370283 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.44744626486904,
            "unit": "iter/sec",
            "range": "stddev: 0.0005993109955320209",
            "extra": "mean: 16.013465078436177 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 112.01192914826964,
            "unit": "iter/sec",
            "range": "stddev: 0.0006495977965282282",
            "extra": "mean: 8.927620545453733 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 296.7809609898648,
            "unit": "iter/sec",
            "range": "stddev: 0.00020731268462247782",
            "extra": "mean: 3.36948838181756 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5642548.81990571,
            "unit": "iter/sec",
            "range": "stddev: 8.915412911775677e-9",
            "extra": "mean: 177.22487335359833 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7116159.054335053,
            "unit": "iter/sec",
            "range": "stddev: 4.0636116275849815e-9",
            "extra": "mean: 140.5252457631403 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.4437785330332,
            "unit": "iter/sec",
            "range": "stddev: 0.0034274803097897395",
            "extra": "mean: 6.044349378785107 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5189.459764256556,
            "unit": "iter/sec",
            "range": "stddev: 0.00005380776108958039",
            "extra": "mean: 192.69828564578157 usec\nrounds: 2111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1967365.1572442106,
            "unit": "iter/sec",
            "range": "stddev: 7.914649689648068e-8",
            "extra": "mean: 508.29404816783045 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1166.1933584245207,
            "unit": "iter/sec",
            "range": "stddev: 0.000011972645600190038",
            "extra": "mean: 857.4907349420673 usec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.417995909109269,
            "unit": "iter/sec",
            "range": "stddev: 0.0008354162416944195",
            "extra": "mean: 64.85927262499658 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 288.59862015864667,
            "unit": "iter/sec",
            "range": "stddev: 0.00008185240881755755",
            "extra": "mean: 3.4650200318015587 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 92.60583650949715,
            "unit": "iter/sec",
            "range": "stddev: 0.02408412704455578",
            "extra": "mean: 10.798455450455819 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 116.65328678822362,
            "unit": "iter/sec",
            "range": "stddev: 0.0007491302403708079",
            "extra": "mean: 8.5724116956553 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 309.9371163908463,
            "unit": "iter/sec",
            "range": "stddev: 0.00024841304850152355",
            "extra": "mean: 3.2264609403507185 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 290.55609524030126,
            "unit": "iter/sec",
            "range": "stddev: 0.000023370969949804",
            "extra": "mean: 3.441676207731801 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1679.7353039989405,
            "unit": "iter/sec",
            "range": "stddev: 0.00002089670295753579",
            "extra": "mean: 595.3318940307458 usec\nrounds: 1340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4960.219923921119,
            "unit": "iter/sec",
            "range": "stddev: 0.00005979395069273864",
            "extra": "mean: 201.60396420679004 usec\nrounds: 2291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12012086.301189963,
            "unit": "iter/sec",
            "range": "stddev: 4.400263370810303e-9",
            "extra": "mean: 83.24948513735629 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.30229288533386,
            "unit": "iter/sec",
            "range": "stddev: 0.00018378203810755334",
            "extra": "mean: 11.073915933339624 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 740.7047052755119,
            "unit": "iter/sec",
            "range": "stddev: 0.000011352089128737386",
            "extra": "mean: 1.3500656778304665 msec\nrounds: 627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 307.90290108593234,
            "unit": "iter/sec",
            "range": "stddev: 0.0001987637463082946",
            "extra": "mean: 3.2477771286763906 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.588983512057215,
            "unit": "iter/sec",
            "range": "stddev: 0.0007473083486225876",
            "extra": "mean: 40.668618916664435 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6180022.100458745,
            "unit": "iter/sec",
            "range": "stddev: 9.283259000546251e-9",
            "extra": "mean: 161.81171907537012 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.4014920929783,
            "unit": "iter/sec",
            "range": "stddev: 0.00046842171615713154",
            "extra": "mean: 18.050055372547305 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5401.291743017316,
            "unit": "iter/sec",
            "range": "stddev: 0.00007723744563029103",
            "extra": "mean: 185.140897321975 usec\nrounds: 2240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13849.607838789754,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015864939418097683",
            "extra": "mean: 72.20421051917559 usec\nrounds: 6940"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 116.61026106871351,
            "unit": "iter/sec",
            "range": "stddev: 0.0006808598893712493",
            "extra": "mean: 8.57557466071311 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 497627.2939484625,
            "unit": "iter/sec",
            "range": "stddev: 1.3881926606341347e-7",
            "extra": "mean: 2.0095360768205097 usec\nrounds: 2065"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5393.111231934413,
            "unit": "iter/sec",
            "range": "stddev: 0.000046864933226850754",
            "extra": "mean: 185.421727272871 usec\nrounds: 2365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 528.2367783057103,
            "unit": "iter/sec",
            "range": "stddev: 0.000024793579731741594",
            "extra": "mean: 1.8930904493387293 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.33273421285358,
            "unit": "iter/sec",
            "range": "stddev: 0.00005566832242079616",
            "extra": "mean: 6.160187006329741 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8125629688461264,
            "unit": "iter/sec",
            "range": "stddev: 0.003672121605342433",
            "extra": "mean: 1.230673853399992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.45572810894335,
            "unit": "iter/sec",
            "range": "stddev: 0.00014364006888135277",
            "extra": "mean: 9.856515927086917 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.76899920013014,
            "unit": "iter/sec",
            "range": "stddev: 0.000662369069638124",
            "extra": "mean: 9.82617504210183 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4880377719045637,
            "unit": "iter/sec",
            "range": "stddev: 0.0016075757782164429",
            "extra": "mean: 401.9231586000046 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 757484.3247929448,
            "unit": "iter/sec",
            "range": "stddev: 1.7041944728545094e-7",
            "extra": "mean: 1.32015933171072 usec\nrounds: 25381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5122.919308219378,
            "unit": "iter/sec",
            "range": "stddev: 0.000057350064766553426",
            "extra": "mean: 195.20120068953022 usec\nrounds: 2322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.74459158478861,
            "unit": "iter/sec",
            "range": "stddev: 0.0007245015492332866",
            "extra": "mean: 9.456748425740294 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6943892566519758,
            "unit": "iter/sec",
            "range": "stddev: 0.00218923307566289",
            "extra": "mean: 590.1831566000055 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.591749385709774,
            "unit": "iter/sec",
            "range": "stddev: 0.0004426590184479548",
            "extra": "mean: 178.83491033335494 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.04858441311612,
            "unit": "iter/sec",
            "range": "stddev: 0.00042082126120517114",
            "extra": "mean: 7.350315362072906 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.436087644050836,
            "unit": "iter/sec",
            "range": "stddev: 0.0008319650568243508",
            "extra": "mean: 23.02233129730236 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.91867057895305,
            "unit": "iter/sec",
            "range": "stddev: 0.0007282996589632582",
            "extra": "mean: 9.71640999999956 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 116.38170842912376,
            "unit": "iter/sec",
            "range": "stddev: 0.0006978362875277587",
            "extra": "mean: 8.592415539328485 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.05419535319642,
            "unit": "iter/sec",
            "range": "stddev: 0.00016764480326020374",
            "extra": "mean: 15.611779907404586 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 117.3868233904906,
            "unit": "iter/sec",
            "range": "stddev: 0.0006986012178717516",
            "extra": "mean: 8.518843692306687 msec\nrounds: 117"
          }
        ]
      }
    ]
  }
}