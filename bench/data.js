window.BENCHMARK_DATA = {
  "lastUpdate": 1684494558496,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "05ff4883c762a4a26ae560cebbb88dc9ebbdb82b",
          "message": "feat(polars): add correlation operation",
          "timestamp": "2023-05-19T06:04:09-05:00",
          "tree_id": "cfff927f9f48f3600869ec5c5276194531dcba49",
          "url": "https://github.com/ibis-project/ibis/commit/05ff4883c762a4a26ae560cebbb88dc9ebbdb82b"
        },
        "date": 1684494469548,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 240.23792399150872,
            "unit": "iter/sec",
            "range": "stddev: 0.0036992065567551945",
            "extra": "mean: 4.162540132653433 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.50582507138812,
            "unit": "iter/sec",
            "range": "stddev: 0.00009261681754500197",
            "extra": "mean: 7.904774340910333 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 283.5994207726847,
            "unit": "iter/sec",
            "range": "stddev: 0.0002455667144511242",
            "extra": "mean: 3.5261002905980425 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.54591795266933,
            "unit": "iter/sec",
            "range": "stddev: 0.00009036640893918388",
            "extra": "mean: 5.113888392403282 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.94472822453895,
            "unit": "iter/sec",
            "range": "stddev: 0.00024021200329572945",
            "extra": "mean: 3.5342591688310985 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9974.990322112197,
            "unit": "iter/sec",
            "range": "stddev: 0.0010645867545359638",
            "extra": "mean: 100.2507238311035 usec\nrounds: 4834"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 431.7447655304133,
            "unit": "iter/sec",
            "range": "stddev: 0.000046118925855854516",
            "extra": "mean: 2.316183263441458 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 760.8679038053144,
            "unit": "iter/sec",
            "range": "stddev: 0.00001834516518158269",
            "extra": "mean: 1.3142885841270457 msec\nrounds: 630"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 233.52276878830432,
            "unit": "iter/sec",
            "range": "stddev: 0.0002715127750057676",
            "extra": "mean: 4.282237681527882 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2307.166424639286,
            "unit": "iter/sec",
            "range": "stddev: 0.00008034089907179438",
            "extra": "mean: 433.43210499274886 usec\nrounds: 1362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.38927235164212,
            "unit": "iter/sec",
            "range": "stddev: 0.0006909956429693208",
            "extra": "mean: 9.579528408162808 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.489259065247234,
            "unit": "iter/sec",
            "range": "stddev: 0.0015469218904482103",
            "extra": "mean: 117.7959103749977 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.10492755869393,
            "unit": "iter/sec",
            "range": "stddev: 0.0002587172029157944",
            "extra": "mean: 3.648237953642299 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.89086979960468,
            "unit": "iter/sec",
            "range": "stddev: 0.00047533319744382316",
            "extra": "mean: 17.892009975609167 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2349.4538945745085,
            "unit": "iter/sec",
            "range": "stddev: 0.00008587018464050169",
            "extra": "mean: 425.6308252352841 usec\nrounds: 1276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2352.325269396685,
            "unit": "iter/sec",
            "range": "stddev: 0.00009700004658721226",
            "extra": "mean: 425.1112773432375 usec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.1885172186984,
            "unit": "iter/sec",
            "range": "stddev: 0.0006293483971540723",
            "extra": "mean: 9.981183750001321 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 91.50033538213314,
            "unit": "iter/sec",
            "range": "stddev: 0.010571135725769924",
            "extra": "mean: 10.928921689999243 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.886755531209,
            "unit": "iter/sec",
            "range": "stddev: 0.00021875808965439263",
            "extra": "mean: 9.183853399997588 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.432062248787,
            "unit": "iter/sec",
            "range": "stddev: 0.000025829827753816882",
            "extra": "mean: 1.8469537911120266 msec\nrounds: 450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.27930642668354,
            "unit": "iter/sec",
            "range": "stddev: 0.00019180983072208642",
            "extra": "mean: 20.712807909090195 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.08663066797963,
            "unit": "iter/sec",
            "range": "stddev: 0.0008101156597401477",
            "extra": "mean: 9.991344431578778 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.91777267601353,
            "unit": "iter/sec",
            "range": "stddev: 0.0001493091333017549",
            "extra": "mean: 6.138065746753426 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1920524.0807815732,
            "unit": "iter/sec",
            "range": "stddev: 1.0813535302217079e-7",
            "extra": "mean: 520.6912061175727 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 223.6632338473836,
            "unit": "iter/sec",
            "range": "stddev: 0.009212129892755697",
            "extra": "mean: 4.4710075178576245 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.99428822852482,
            "unit": "iter/sec",
            "range": "stddev: 0.0007013889198045893",
            "extra": "mean: 9.80447059701456 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8782560284835791,
            "unit": "iter/sec",
            "range": "stddev: 0.003688191322785219",
            "extra": "mean: 1.1386201375999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2342.2113823935438,
            "unit": "iter/sec",
            "range": "stddev: 0.00007893584175732598",
            "extra": "mean: 426.94694745189213 usec\nrounds: 1256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13056.509396654286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033652890962035196",
            "extra": "mean: 76.59014899160174 usec\nrounds: 7289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.94557134453319,
            "unit": "iter/sec",
            "range": "stddev: 0.0006968247386726329",
            "extra": "mean: 9.906328595505602 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.57732449573184,
            "unit": "iter/sec",
            "range": "stddev: 0.0006646620381690625",
            "extra": "mean: 22.432929999999153 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.158003689133,
            "unit": "iter/sec",
            "range": "stddev: 0.000838476631406117",
            "extra": "mean: 10.39955034042592 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 87.32207329387046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005592911704318675",
            "extra": "mean: 11.45185818750131 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17582416491148475,
            "unit": "iter/sec",
            "range": "stddev: 0.05938201041375178",
            "extra": "mean: 5.687500353000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8053.149191668649,
            "unit": "iter/sec",
            "range": "stddev: 0.000018475603363434622",
            "extra": "mean: 124.17502472629536 usec\nrounds: 364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 192.4234975555667,
            "unit": "iter/sec",
            "range": "stddev: 0.00006887568327955901",
            "extra": "mean: 5.196870510636192 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7435773.8955207635,
            "unit": "iter/sec",
            "range": "stddev: 4.470007142924997e-9",
            "extra": "mean: 134.4849929612877 nsec\nrounds: 72464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.73983671043021,
            "unit": "iter/sec",
            "range": "stddev: 0.0000807558582970822",
            "extra": "mean: 8.949359775703487 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 90.270870927758,
            "unit": "iter/sec",
            "range": "stddev: 0.01119318140145252",
            "extra": "mean: 11.07777060000097 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.93330670528,
            "unit": "iter/sec",
            "range": "stddev: 0.000017342399032865135",
            "extra": "mean: 1.4536292839044258 msec\nrounds: 553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 244.18409924628045,
            "unit": "iter/sec",
            "range": "stddev: 0.006851866669635938",
            "extra": "mean: 4.095270753037096 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9336.495597638275,
            "unit": "iter/sec",
            "range": "stddev: 0.000001659678549075723",
            "extra": "mean: 107.10656793464952 usec\nrounds: 4416"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.41862720778892,
            "unit": "iter/sec",
            "range": "stddev: 0.0006871202464325941",
            "extra": "mean: 27.458475968751728 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.32578626024758,
            "unit": "iter/sec",
            "range": "stddev: 0.00009676835818286848",
            "extra": "mean: 9.585357904760324 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 401.9311849774047,
            "unit": "iter/sec",
            "range": "stddev: 0.000033005105497834616",
            "extra": "mean: 2.4879880869562703 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2284.4971270417395,
            "unit": "iter/sec",
            "range": "stddev: 0.00008646072111422954",
            "extra": "mean: 437.7330959023479 usec\nrounds: 1220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.112857191064116,
            "unit": "iter/sec",
            "range": "stddev: 0.022167670545634094",
            "extra": "mean: 24.929662707316908 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.8794636191411,
            "unit": "iter/sec",
            "range": "stddev: 0.00013279771755935756",
            "extra": "mean: 5.784377039733484 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.5894519828219,
            "unit": "iter/sec",
            "range": "stddev: 0.0006926661056896367",
            "extra": "mean: 9.747590816329197 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12569569.52325598,
            "unit": "iter/sec",
            "range": "stddev: 3.368120407234585e-9",
            "extra": "mean: 79.55721937403172 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.36041231098268,
            "unit": "iter/sec",
            "range": "stddev: 0.00008516883919361334",
            "extra": "mean: 10.16669182758542 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1774.0981369054423,
            "unit": "iter/sec",
            "range": "stddev: 0.000005378334012566672",
            "extra": "mean: 563.6666761537211 usec\nrounds: 1300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.18588175263204,
            "unit": "iter/sec",
            "range": "stddev: 0.015468617843161",
            "extra": "mean: 11.602828440859582 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2381.1323800073324,
            "unit": "iter/sec",
            "range": "stddev: 0.00009301994496302249",
            "extra": "mean: 419.96825056695116 usec\nrounds: 1768"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6304299.079575088,
            "unit": "iter/sec",
            "range": "stddev: 8.35888519509356e-9",
            "extra": "mean: 158.62191615190986 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.93162669384205,
            "unit": "iter/sec",
            "range": "stddev: 0.0008055079909546893",
            "extra": "mean: 9.621710270597065 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.35170367357145,
            "unit": "iter/sec",
            "range": "stddev: 0.0008950298153248061",
            "extra": "mean: 10.065252663261678 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4708.263573805657,
            "unit": "iter/sec",
            "range": "stddev: 0.00003508475696486955",
            "extra": "mean: 212.39252737749916 usec\nrounds: 2082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.8390104007181,
            "unit": "iter/sec",
            "range": "stddev: 0.0002576434465018299",
            "extra": "mean: 3.7616751525392327 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1613497.1012127378,
            "unit": "iter/sec",
            "range": "stddev: 1.0836973043580422e-7",
            "extra": "mean: 619.7717983183107 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2585305.4889560794,
            "unit": "iter/sec",
            "range": "stddev: 1.7997923306497534e-8",
            "extra": "mean: 386.8014841078323 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2293.0766460871205,
            "unit": "iter/sec",
            "range": "stddev: 0.000127084325448285",
            "extra": "mean: 436.09532272128297 usec\nrounds: 1382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.80430239287783,
            "unit": "iter/sec",
            "range": "stddev: 0.0003586517866713926",
            "extra": "mean: 15.431074220002756 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6390344.023137027,
            "unit": "iter/sec",
            "range": "stddev: 4.342558676980629e-9",
            "extra": "mean: 156.48609783440253 nsec\nrounds: 48781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.35137045784216,
            "unit": "iter/sec",
            "range": "stddev: 0.00009110179115424438",
            "extra": "mean: 51.67592663158123 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.335904277856898,
            "unit": "iter/sec",
            "range": "stddev: 0.0028646707793682506",
            "extra": "mean: 428.0997339999999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5753672.508891959,
            "unit": "iter/sec",
            "range": "stddev: 9.279430981739298e-9",
            "extra": "mean: 173.8020366045779 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.76205125635568,
            "unit": "iter/sec",
            "range": "stddev: 0.0008880967601699892",
            "extra": "mean: 10.552747505377898 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.52653511042007,
            "unit": "iter/sec",
            "range": "stddev: 0.00019009609811726535",
            "extra": "mean: 9.387332451613581 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.59344045911365,
            "unit": "iter/sec",
            "range": "stddev: 0.0002249412556831002",
            "extra": "mean: 18.31721891110571 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.45145929227118,
            "unit": "iter/sec",
            "range": "stddev: 0.00019444446489406153",
            "extra": "mean: 6.602775600003952 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.133909209969833,
            "unit": "iter/sec",
            "range": "stddev: 0.0003399367957378598",
            "extra": "mean: 38.26446292307887 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1810870.0953189074,
            "unit": "iter/sec",
            "range": "stddev: 1.1720592016373568e-7",
            "extra": "mean: 552.2207267020402 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.4040782279837,
            "unit": "iter/sec",
            "range": "stddev: 0.0004232450930664138",
            "extra": "mean: 3.9776602155719942 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139585.8666100956,
            "unit": "iter/sec",
            "range": "stddev: 3.60095764975915e-7",
            "extra": "mean: 7.1640490852365035 usec\nrounds: 41153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 236.2109616499075,
            "unit": "iter/sec",
            "range": "stddev: 0.009634755170884938",
            "extra": "mean: 4.233503784139019 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2399.722664459776,
            "unit": "iter/sec",
            "range": "stddev: 0.00008316079642104047",
            "extra": "mean: 416.7148207624731 usec\nrounds: 1339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.358232703355083,
            "unit": "iter/sec",
            "range": "stddev: 0.001630252872391078",
            "extra": "mean: 736.2508629999979 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.044983770333612,
            "unit": "iter/sec",
            "range": "stddev: 0.00018492764886694142",
            "extra": "mean: 33.28342619999679 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4594941.929945524,
            "unit": "iter/sec",
            "range": "stddev: 1.2996823586426372e-8",
            "extra": "mean: 217.63060670737295 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.54280869407725,
            "unit": "iter/sec",
            "range": "stddev: 0.015036174083336781",
            "extra": "mean: 11.55497510526761 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.879439656706765,
            "unit": "iter/sec",
            "range": "stddev: 0.002310288522230951",
            "extra": "mean: 1.137087681199978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1040620.6614090998,
            "unit": "iter/sec",
            "range": "stddev: 1.3397083243293686e-7",
            "extra": "mean: 960.9649674319405 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 170.54399044580728,
            "unit": "iter/sec",
            "range": "stddev: 0.004200914032995557",
            "extra": "mean: 5.863589783409952 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.85917929923504,
            "unit": "iter/sec",
            "range": "stddev: 0.001098192123476536",
            "extra": "mean: 10.541942354840343 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 95.8968416960158,
            "unit": "iter/sec",
            "range": "stddev: 0.0007313038792208691",
            "extra": "mean: 10.427872100000002 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.80170567843463,
            "unit": "iter/sec",
            "range": "stddev: 0.01922599189656772",
            "extra": "mean: 11.792215640001018 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7474479437136401,
            "unit": "iter/sec",
            "range": "stddev: 0.0022130106257608056",
            "extra": "mean: 1.3378858132000118 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.39889474772048,
            "unit": "iter/sec",
            "range": "stddev: 0.0007342755643424042",
            "extra": "mean: 9.862040434345866 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1179.3372906529526,
            "unit": "iter/sec",
            "range": "stddev: 0.00001347552936633351",
            "extra": "mean: 847.9338421041019 usec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.561955619417765,
            "unit": "iter/sec",
            "range": "stddev: 0.0009378018804573866",
            "extra": "mean: 640.2230559999907 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2307.115620065792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000828591078668277",
            "extra": "mean: 433.44164952230835 usec\nrounds: 1361"
          }
        ]
      }
    ]
  }
}