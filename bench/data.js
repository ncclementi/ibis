window.BENCHMARK_DATA = {
  "lastUpdate": 1675969930910,
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
          "id": "402bc11120bae298be946140a09a198ab9c1753e",
          "message": "ci: add trino to sqlalchemy2 test suite",
          "timestamp": "2023-02-09T20:06:45+01:00",
          "tree_id": "52b43a7647d26dbb961472bd04050cec6df15652",
          "url": "https://github.com/ibis-project/ibis/commit/402bc11120bae298be946140a09a198ab9c1753e"
        },
        "date": 1675969845149,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8860.202323127392,
            "unit": "iter/sec",
            "range": "stddev: 0.000015433069876606606",
            "extra": "mean: 112.86423983679744 usec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 418.87670389461744,
            "unit": "iter/sec",
            "range": "stddev: 0.000029436110264495425",
            "extra": "mean: 2.387337349397172 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.8792950721849,
            "unit": "iter/sec",
            "range": "stddev: 0.00016391517726417897",
            "extra": "mean: 15.413237750000164 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.36479023511639,
            "unit": "iter/sec",
            "range": "stddev: 0.00943275217616143",
            "extra": "mean: 12.600045902440145 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.00039596018912,
            "unit": "iter/sec",
            "range": "stddev: 0.00018576594300510495",
            "extra": "mean: 9.708700541175704 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15484789781540234,
            "unit": "iter/sec",
            "range": "stddev: 0.06894344403368233",
            "extra": "mean: 6.457950118200006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.92602548611913,
            "unit": "iter/sec",
            "range": "stddev: 0.0005178915096698791",
            "extra": "mean: 203.00341579999213 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.59685697093894,
            "unit": "iter/sec",
            "range": "stddev: 0.0005742680813217121",
            "extra": "mean: 11.161105799998694 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120655.92145873581,
            "unit": "iter/sec",
            "range": "stddev: 4.085142087692884e-7",
            "extra": "mean: 8.288030855924456 usec\nrounds: 37594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12053843.069441931,
            "unit": "iter/sec",
            "range": "stddev: 3.5389696952938983e-9",
            "extra": "mean: 82.96109334073542 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 517.8750409275852,
            "unit": "iter/sec",
            "range": "stddev: 0.00004388632071363963",
            "extra": "mean: 1.9309677450546037 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1582264.407409867,
            "unit": "iter/sec",
            "range": "stddev: 1.1813769557293855e-7",
            "extra": "mean: 632.0056213847208 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4643289.551912557,
            "unit": "iter/sec",
            "range": "stddev: 1.5113234972470427e-8",
            "extra": "mean: 215.36455756637665 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.06631666296406,
            "unit": "iter/sec",
            "range": "stddev: 0.0007608084523810988",
            "extra": "mean: 10.861735716666013 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.53875627793852,
            "unit": "iter/sec",
            "range": "stddev: 0.0001852004789779515",
            "extra": "mean: 14.590285180326262 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.64193834420763,
            "unit": "iter/sec",
            "range": "stddev: 0.00018506026127176003",
            "extra": "mean: 4.1728923030311105 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6076.225135349792,
            "unit": "iter/sec",
            "range": "stddev: 0.00004657948370299347",
            "extra": "mean: 164.57586375170288 usec\nrounds: 1967"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.44124622392069,
            "unit": "iter/sec",
            "range": "stddev: 0.00034349869905214096",
            "extra": "mean: 8.302803494251718 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.260336950110864,
            "unit": "iter/sec",
            "range": "stddev: 0.0012309926262665026",
            "extra": "mean: 442.41191559999606 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 161.21257874321526,
            "unit": "iter/sec",
            "range": "stddev: 0.0006907045676306549",
            "extra": "mean: 6.202989914284748 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.3967249422743,
            "unit": "iter/sec",
            "range": "stddev: 0.00028070141810856763",
            "extra": "mean: 6.9736599661014536 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8649365520031786,
            "unit": "iter/sec",
            "range": "stddev: 0.004219567649236235",
            "extra": "mean: 1.1561541684000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5169.178132325171,
            "unit": "iter/sec",
            "range": "stddev: 0.00005224434891782354",
            "extra": "mean: 193.45435084671487 usec\nrounds: 2303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 627.732463209048,
            "unit": "iter/sec",
            "range": "stddev: 0.00001693790149626045",
            "extra": "mean: 1.593035343254152 msec\nrounds: 504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.54553422327103,
            "unit": "iter/sec",
            "range": "stddev: 0.0006870675180947558",
            "extra": "mean: 28.94730165516927 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19330.389131355518,
            "unit": "iter/sec",
            "range": "stddev: 0.00002448083153276256",
            "extra": "mean: 51.732016008819805 usec\nrounds: 5622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 254.53365410357952,
            "unit": "iter/sec",
            "range": "stddev: 0.0002038500669620126",
            "extra": "mean: 3.9287535611815856 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.38192624896361,
            "unit": "iter/sec",
            "range": "stddev: 0.00017731392853342508",
            "extra": "mean: 17.42709012000205 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.03473732842156,
            "unit": "iter/sec",
            "range": "stddev: 0.020396800673798586",
            "extra": "mean: 30.271165472220847 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5289908.328142121,
            "unit": "iter/sec",
            "range": "stddev: 4.7632981372900234e-9",
            "extra": "mean: 189.03919273602324 nsec\nrounds: 53192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 144.35310689119868,
            "unit": "iter/sec",
            "range": "stddev: 0.00012401540919806486",
            "extra": "mean: 6.927457410069578 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.12925521494748,
            "unit": "iter/sec",
            "range": "stddev: 0.000051949804476901016",
            "extra": "mean: 11.346969829269492 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1453.7019265541262,
            "unit": "iter/sec",
            "range": "stddev: 0.000005985884285501769",
            "extra": "mean: 687.8989301269023 usec\nrounds: 1102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.037261980997776,
            "unit": "iter/sec",
            "range": "stddev: 0.00015048103305295463",
            "extra": "mean: 22.708042121953525 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10374.357210817348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017548801759835163",
            "extra": "mean: 96.39151416121469 usec\nrounds: 5261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.56052211207678,
            "unit": "iter/sec",
            "range": "stddev: 0.0005769558308182259",
            "extra": "mean: 11.967373763638472 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 249.56488724644808,
            "unit": "iter/sec",
            "range": "stddev: 0.00019594353937197353",
            "extra": "mean: 4.006973941861016 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.80808533922985,
            "unit": "iter/sec",
            "range": "stddev: 0.0006193081321178834",
            "extra": "mean: 6.90569174820165 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8641974919859825,
            "unit": "iter/sec",
            "range": "stddev: 0.0033947463503274313",
            "extra": "mean: 1.157142909199996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5784211868626777,
            "unit": "iter/sec",
            "range": "stddev: 0.06015513301267827",
            "extra": "mean: 1.7288440028000025 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5886.164020070415,
            "unit": "iter/sec",
            "range": "stddev: 0.00004581857393427166",
            "extra": "mean: 169.8899311317589 usec\nrounds: 2120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5805503577690787,
            "unit": "iter/sec",
            "range": "stddev: 0.0012039586733992081",
            "extra": "mean: 632.6910085999941 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.15083722817337,
            "unit": "iter/sec",
            "range": "stddev: 0.0006644596534167127",
            "extra": "mean: 6.24411347019847 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.27298825787176,
            "unit": "iter/sec",
            "range": "stddev: 0.00006962260737466405",
            "extra": "mean: 10.496154453488309 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 160.37160472248607,
            "unit": "iter/sec",
            "range": "stddev: 0.0006746820628225726",
            "extra": "mean: 6.235517825804906 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6056.769885081517,
            "unit": "iter/sec",
            "range": "stddev: 0.00005691131974905139",
            "extra": "mean: 165.10450602772755 usec\nrounds: 3567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.58916397700024,
            "unit": "iter/sec",
            "range": "stddev: 0.0006424233212225436",
            "extra": "mean: 10.572035505495686 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 139.43061162207408,
            "unit": "iter/sec",
            "range": "stddev: 0.011032814489536866",
            "extra": "mean: 7.172026202613918 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.36409745955316,
            "unit": "iter/sec",
            "range": "stddev: 0.0006901779255880845",
            "extra": "mean: 11.316813374999153 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 580944.6925450505,
            "unit": "iter/sec",
            "range": "stddev: 2.4348420584832e-7",
            "extra": "mean: 1.721334255794846 usec\nrounds: 24571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 280.90391408144734,
            "unit": "iter/sec",
            "range": "stddev: 0.000051103676715679236",
            "extra": "mean: 3.559936155642362 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 979.7028498720734,
            "unit": "iter/sec",
            "range": "stddev: 0.00001981412369080647",
            "extra": "mean: 1.0207176595746117 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.241945302554516,
            "unit": "iter/sec",
            "range": "stddev: 0.0006903968290932634",
            "extra": "mean: 38.10693104000393 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6076.74348408603,
            "unit": "iter/sec",
            "range": "stddev: 0.000044866199470179666",
            "extra": "mean: 164.561825362356 usec\nrounds: 2342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.21901052750836,
            "unit": "iter/sec",
            "range": "stddev: 0.00028236629569161067",
            "extra": "mean: 108.47151080000685 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.39223182607502,
            "unit": "iter/sec",
            "range": "stddev: 0.00008839756855147626",
            "extra": "mean: 13.813636833335055 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.29289391737167,
            "unit": "iter/sec",
            "range": "stddev: 0.00007017670810584216",
            "extra": "mean: 9.970796144579 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 331.39986831423334,
            "unit": "iter/sec",
            "range": "stddev: 0.000028075692993458257",
            "extra": "mean: 3.017502707791664 msec\nrounds: 308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 220.69643592792985,
            "unit": "iter/sec",
            "range": "stddev: 0.008146028730033934",
            "extra": "mean: 4.531110780269047 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4516.193137214597,
            "unit": "iter/sec",
            "range": "stddev: 0.000029391174581137202",
            "extra": "mean: 221.4254283679194 usec\nrounds: 2101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1555634.75757574,
            "unit": "iter/sec",
            "range": "stddev: 1.390504913722704e-7",
            "extra": "mean: 642.8244130764817 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57895.850816806276,
            "unit": "iter/sec",
            "range": "stddev: 5.115909720572517e-7",
            "extra": "mean: 17.272394927992238 usec\nrounds: 13210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.1885820563322,
            "unit": "iter/sec",
            "range": "stddev: 0.00020274427565876947",
            "extra": "mean: 3.981072673819774 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 161.90357713324238,
            "unit": "iter/sec",
            "range": "stddev: 0.0006712303309853462",
            "extra": "mean: 6.176515786164664 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5131.93048658519,
            "unit": "iter/sec",
            "range": "stddev: 0.00005410132848048288",
            "extra": "mean: 194.85844607872008 usec\nrounds: 2856"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.7261350658625,
            "unit": "iter/sec",
            "range": "stddev: 0.000016072729518156487",
            "extra": "mean: 3.7491639120893447 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.0977110116902,
            "unit": "iter/sec",
            "range": "stddev: 0.000030065646016912217",
            "extra": "mean: 6.939735495998775 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10804.125964899993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015990812618863967",
            "extra": "mean: 92.55723260250384 usec\nrounds: 5791"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7504731376658236,
            "unit": "iter/sec",
            "range": "stddev: 0.0037216900758090766",
            "extra": "mean: 1.3324927300000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 173.32199221653042,
            "unit": "iter/sec",
            "range": "stddev: 0.00003757595921109824",
            "extra": "mean: 5.769608271930687 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 388099.4311636421,
            "unit": "iter/sec",
            "range": "stddev: 1.7448358593043556e-7",
            "extra": "mean: 2.576659277756968 usec\nrounds: 1940"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4416507.363141276,
            "unit": "iter/sec",
            "range": "stddev: 1.16966460045704e-8",
            "extra": "mean: 226.42326113720463 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5179.375449287234,
            "unit": "iter/sec",
            "range": "stddev: 0.00006296499750708239",
            "extra": "mean: 193.07347184835115 usec\nrounds: 2007"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1519262.9005330445,
            "unit": "iter/sec",
            "range": "stddev: 1.0301826758660885e-7",
            "extra": "mean: 658.2139270623555 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 244.76734084055622,
            "unit": "iter/sec",
            "range": "stddev: 0.000230507784000317",
            "extra": "mean: 4.085512375000265 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.71583413275534,
            "unit": "iter/sec",
            "range": "stddev: 0.0007338235063619835",
            "extra": "mean: 22.363442824998714 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 146.99894874063278,
            "unit": "iter/sec",
            "range": "stddev: 0.0007393745384899527",
            "extra": "mean: 6.802769737927958 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.4517874422167,
            "unit": "iter/sec",
            "range": "stddev: 0.0007814262831643449",
            "extra": "mean: 10.700704902175595 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1521289.8491333586,
            "unit": "iter/sec",
            "range": "stddev: 1.1013404921631401e-7",
            "extra": "mean: 657.3369306116618 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.78361231085584,
            "unit": "iter/sec",
            "range": "stddev: 0.00013274732839281596",
            "extra": "mean: 72.54992214286305 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 222.0643305745778,
            "unit": "iter/sec",
            "range": "stddev: 0.00043587590279203726",
            "extra": "mean: 4.503199579205546 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 252.83000392651982,
            "unit": "iter/sec",
            "range": "stddev: 0.0000990449768073171",
            "extra": "mean: 3.955226770833065 msec\nrounds: 240"
          }
        ]
      }
    ]
  }
}