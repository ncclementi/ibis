window.BENCHMARK_DATA = {
  "lastUpdate": 1676675437634,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "50f6fccd791bf7cee1d86865719b0ed7f4bd397f",
          "message": "feat(trino): implement `ArrayFilter` translation",
          "timestamp": "2023-02-18T00:03:09+01:00",
          "tree_id": "81e028399d00c44dd979cc9d3afc02a7337ab487",
          "url": "https://github.com/ibis-project/ibis/commit/50f6fccd791bf7cee1d86865719b0ed7f4bd397f"
        },
        "date": 1676675350668,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 123.79823850361016,
            "unit": "iter/sec",
            "range": "stddev: 0.007361726618717446",
            "extra": "mean: 8.077659359998393 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 91.42225136726704,
            "unit": "iter/sec",
            "range": "stddev: 0.015791794554036436",
            "extra": "mean: 10.938256114288183 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 74.84341021144343,
            "unit": "iter/sec",
            "range": "stddev: 0.0008880554256636278",
            "extra": "mean: 13.36122976191031 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 328.0206292183722,
            "unit": "iter/sec",
            "range": "stddev: 0.0001589804783937077",
            "extra": "mean: 3.0485887499906994 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 47856.438753049486,
            "unit": "iter/sec",
            "range": "stddev: 0.00000859145979610026",
            "extra": "mean: 20.895829820522916 usec\nrounds: 5741"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 510880.8532846165,
            "unit": "iter/sec",
            "range": "stddev: 9.242631995297881e-7",
            "extra": "mean: 1.9574035581303937 usec\nrounds: 17482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 178.554985732416,
            "unit": "iter/sec",
            "range": "stddev: 0.010019825093631654",
            "extra": "mean: 5.600515694916571 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.494418836891434,
            "unit": "iter/sec",
            "range": "stddev: 0.0005529853591811025",
            "extra": "mean: 48.79377200001045 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.720932639480625,
            "unit": "iter/sec",
            "range": "stddev: 0.010060811602848073",
            "extra": "mean: 1.3870921431999819 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.896475765771208,
            "unit": "iter/sec",
            "range": "stddev: 0.004728700364029264",
            "extra": "mean: 527.2938457999999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4693005.113769258,
            "unit": "iter/sec",
            "range": "stddev: 1.9141983867125725e-8",
            "extra": "mean: 213.08308338849804 nsec\nrounds: 48544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 121.10656766374659,
            "unit": "iter/sec",
            "range": "stddev: 0.00011612771892592154",
            "extra": "mean: 8.257190499994257 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 76.54889353488439,
            "unit": "iter/sec",
            "range": "stddev: 0.00028104840300734033",
            "extra": "mean: 13.063546105265209 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 79.30376388618944,
            "unit": "iter/sec",
            "range": "stddev: 0.0003386234420475888",
            "extra": "mean: 12.609741971832783 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.000266440412666,
            "unit": "iter/sec",
            "range": "stddev: 0.0007686805093002015",
            "extra": "mean: 31.249739806450943 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 68.88393951482698,
            "unit": "iter/sec",
            "range": "stddev: 0.0008293961605016216",
            "extra": "mean: 14.51717202940686 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119009.76857539809,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010107425259238304",
            "extra": "mean: 8.40267157873225 usec\nrounds: 30674"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9061577.520945488,
            "unit": "iter/sec",
            "range": "stddev: 1.5564582658736653e-8",
            "extra": "mean: 110.35606081705747 nsec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4152.213670149413,
            "unit": "iter/sec",
            "range": "stddev: 0.00019259734056091543",
            "extra": "mean: 240.8353903338544 usec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 57.334434221575044,
            "unit": "iter/sec",
            "range": "stddev: 0.025430912542024228",
            "extra": "mean: 17.441525560981262 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3472465336676718,
            "unit": "iter/sec",
            "range": "stddev: 0.006163079601888174",
            "extra": "mean: 742.2546467999837 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 235.43363817091253,
            "unit": "iter/sec",
            "range": "stddev: 0.00008340233753715369",
            "extra": "mean: 4.247481403970202 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.2532550388358725,
            "unit": "iter/sec",
            "range": "stddev: 0.002430616928721074",
            "extra": "mean: 235.11404580001454 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5079725427539888,
            "unit": "iter/sec",
            "range": "stddev: 0.015499353938116703",
            "extra": "mean: 1.9686103398 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 321784.9745565826,
            "unit": "iter/sec",
            "range": "stddev: 7.78007117060955e-7",
            "extra": "mean: 3.107665301582191 usec\nrounds: 1709"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 214.69245589083403,
            "unit": "iter/sec",
            "range": "stddev: 0.00029022278933424133",
            "extra": "mean: 4.657825520000927 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 189.81104913189748,
            "unit": "iter/sec",
            "range": "stddev: 0.0005269575213224706",
            "extra": "mean: 5.268397201182486 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 86.28026843660018,
            "unit": "iter/sec",
            "range": "stddev: 0.00027482333630614645",
            "extra": "mean: 11.59013547500507 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 70.49271899272524,
            "unit": "iter/sec",
            "range": "stddev: 0.0004188343453014241",
            "extra": "mean: 14.185862232143418 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 58.14437669787064,
            "unit": "iter/sec",
            "range": "stddev: 0.0003478375965366127",
            "extra": "mean: 17.198567716981337 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.56059540985777,
            "unit": "iter/sec",
            "range": "stddev: 0.00046619384510823605",
            "extra": "mean: 30.711969096770527 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 824.3844885081912,
            "unit": "iter/sec",
            "range": "stddev: 0.00003365781463051495",
            "extra": "mean: 1.2130262200949502 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 135.62045839840073,
            "unit": "iter/sec",
            "range": "stddev: 0.0008387455980580071",
            "extra": "mean: 7.373518802468464 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11431249718123253,
            "unit": "iter/sec",
            "range": "stddev: 0.13226487484150076",
            "extra": "mean: 8.747949914999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 79.56790267664692,
            "unit": "iter/sec",
            "range": "stddev: 0.0008127533065613239",
            "extra": "mean: 12.56788185135234 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 217.14873912595286,
            "unit": "iter/sec",
            "range": "stddev: 0.0003112216501590874",
            "extra": "mean: 4.605138413536769 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 123.62328716210291,
            "unit": "iter/sec",
            "range": "stddev: 0.0009498449819057779",
            "extra": "mean: 8.089090841669133 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 130.03906951266595,
            "unit": "iter/sec",
            "range": "stddev: 0.0009789654878904674",
            "extra": "mean: 7.689996581393555 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.748138656176168,
            "unit": "iter/sec",
            "range": "stddev: 0.0005439047905261031",
            "extra": "mean: 129.06325562499887 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 111.58036433453866,
            "unit": "iter/sec",
            "range": "stddev: 0.01674876048887138",
            "extra": "mean: 8.962150338583 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3616264.8350992375,
            "unit": "iter/sec",
            "range": "stddev: 5.1277116432009766e-8",
            "extra": "mean: 276.5284196816371 nsec\nrounds: 178540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3829.620634844714,
            "unit": "iter/sec",
            "range": "stddev: 0.0001000196557213588",
            "extra": "mean: 261.1224701740068 usec\nrounds: 1425"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9427.128466437134,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062538517414674255",
            "extra": "mean: 106.07684021282226 usec\nrounds: 4143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4641.026701798777,
            "unit": "iter/sec",
            "range": "stddev: 0.00005997470533345968",
            "extra": "mean: 215.46956401100178 usec\nrounds: 1945"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3501102.8164396696,
            "unit": "iter/sec",
            "range": "stddev: 5.702668563206993e-8",
            "extra": "mean: 285.6242882399022 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8166.040444979002,
            "unit": "iter/sec",
            "range": "stddev: 0.00006866592373999425",
            "extra": "mean: 122.45836972493359 usec\nrounds: 2299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4006.3459221036674,
            "unit": "iter/sec",
            "range": "stddev: 0.00006180634074050406",
            "extra": "mean: 249.60400810195546 usec\nrounds: 1975"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.707117625869934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002808782734556947",
            "extra": "mean: 18.9727696190538 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1287227.3055322417,
            "unit": "iter/sec",
            "range": "stddev: 4.2917964891859715e-7",
            "extra": "mean: 776.8635700176674 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 439.8302284249662,
            "unit": "iter/sec",
            "range": "stddev: 0.00010197291691441087",
            "extra": "mean: 2.273604530504881 msec\nrounds: 377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 100.29573212939994,
            "unit": "iter/sec",
            "range": "stddev: 0.0004625443186047962",
            "extra": "mean: 9.970513986675087 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1479933.8263648853,
            "unit": "iter/sec",
            "range": "stddev: 3.857946277764326e-7",
            "extra": "mean: 675.7058877803128 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 229.9218542613303,
            "unit": "iter/sec",
            "range": "stddev: 0.000260866682909111",
            "extra": "mean: 4.349303824174083 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 206.74172356046066,
            "unit": "iter/sec",
            "range": "stddev: 0.00030739595546421216",
            "extra": "mean: 4.836952999995448 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 230.99295540449606,
            "unit": "iter/sec",
            "range": "stddev: 0.00013361128852997805",
            "extra": "mean: 4.329136350712001 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 134.66274381419936,
            "unit": "iter/sec",
            "range": "stddev: 0.0008810196468577869",
            "extra": "mean: 7.42595889312747 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 217.43218295494813,
            "unit": "iter/sec",
            "range": "stddev: 0.00030357276454240253",
            "extra": "mean: 4.599135171297064 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16825.00140309707,
            "unit": "iter/sec",
            "range": "stddev: 0.000015614053044152648",
            "extra": "mean: 59.435359085077074 usec\nrounds: 4634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.793828265996996,
            "unit": "iter/sec",
            "range": "stddev: 0.0008848705580239807",
            "extra": "mean: 31.452645199995764 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9436.671353205891,
            "unit": "iter/sec",
            "range": "stddev: 0.000007932111066349573",
            "extra": "mean: 105.96956941393037 usec\nrounds: 3688"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1246158.3775538607,
            "unit": "iter/sec",
            "range": "stddev: 3.6595209931922894e-7",
            "extra": "mean: 802.4662177876172 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.884848880897078,
            "unit": "iter/sec",
            "range": "stddev: 0.0012124963370494272",
            "extra": "mean: 34.62022613043157 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1249078.8836488842,
            "unit": "iter/sec",
            "range": "stddev: 3.446809618817455e-7",
            "extra": "mean: 800.5899491941934 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 122.13012709066506,
            "unit": "iter/sec",
            "range": "stddev: 0.00021485493019631676",
            "extra": "mean: 8.187987876714775 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 80.32523718525066,
            "unit": "iter/sec",
            "range": "stddev: 0.0009440927311811663",
            "extra": "mean: 12.449387453332292 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4636.058449681585,
            "unit": "iter/sec",
            "range": "stddev: 0.00007489042278635722",
            "extra": "mean: 215.700472902511 usec\nrounds: 2897"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3925.263553376262,
            "unit": "iter/sec",
            "range": "stddev: 0.00005919883327025236",
            "extra": "mean: 254.75996360546637 usec\nrounds: 1786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.06132497275586,
            "unit": "iter/sec",
            "range": "stddev: 0.0009654526150679377",
            "extra": "mean: 12.810441026321415 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 148.08634885696816,
            "unit": "iter/sec",
            "range": "stddev: 0.0001673585401866355",
            "extra": "mean: 6.752816905262941 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3525.8709969309066,
            "unit": "iter/sec",
            "range": "stddev: 0.000029522141327183493",
            "extra": "mean: 283.61786374783696 usec\nrounds: 1644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4632.506211419284,
            "unit": "iter/sec",
            "range": "stddev: 0.00005737554933039797",
            "extra": "mean: 215.86587353838107 usec\nrounds: 1795"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 121.69395121852334,
            "unit": "iter/sec",
            "range": "stddev: 0.00021281259585711557",
            "extra": "mean: 8.217335290595672 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 214.19813364317167,
            "unit": "iter/sec",
            "range": "stddev: 0.0002170127454285899",
            "extra": "mean: 4.668574758293085 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 213.17905517734442,
            "unit": "iter/sec",
            "range": "stddev: 0.00030328503595252333",
            "extra": "mean: 4.690892354167235 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 76.05260809977895,
            "unit": "iter/sec",
            "range": "stddev: 0.0009579440278079043",
            "extra": "mean: 13.148792986665587 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.087933351377735,
            "unit": "iter/sec",
            "range": "stddev: 0.0009360710533269321",
            "extra": "mean: 21.23686322221532 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 535.0362744227799,
            "unit": "iter/sec",
            "range": "stddev: 0.000057592753028978407",
            "extra": "mean: 1.8690321531541816 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.004157978022775,
            "unit": "iter/sec",
            "range": "stddev: 0.00048424854786420155",
            "extra": "mean: 22.725125214290777 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6385258075772497,
            "unit": "iter/sec",
            "range": "stddev: 0.008156654674172299",
            "extra": "mean: 1.5661074119999738 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7364404768133745,
            "unit": "iter/sec",
            "range": "stddev: 0.009278973700337133",
            "extra": "mean: 1.3578829946000042 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1264.6249816939933,
            "unit": "iter/sec",
            "range": "stddev: 0.000032622956463754986",
            "extra": "mean: 790.7482569737613 usec\nrounds: 1004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.692400444823866,
            "unit": "iter/sec",
            "range": "stddev: 0.0013648965684153129",
            "extra": "mean: 85.52563733332381 msec\nrounds: 12"
          }
        ]
      }
    ]
  }
}