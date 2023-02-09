window.BENCHMARK_DATA = {
  "lastUpdate": 1675970347223,
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
      },
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7772f792db7c193d86b51792187a781f88f9b558",
          "message": "fix(duckdb): in-memory objects registered with duckdb show up in list_tables\n\nThis works around an issue upstream in `duckdb-engine` that elides\ntemporary views from `get_view_names` (my fault)",
          "timestamp": "2023-02-09T14:07:13-05:00",
          "tree_id": "44371a456a80e1ea8a1ce36bfee7cc96db630bc4",
          "url": "https://github.com/ibis-project/ibis/commit/7772f792db7c193d86b51792187a781f88f9b558"
        },
        "date": 1675970260799,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8725519214948358,
            "unit": "iter/sec",
            "range": "stddev: 0.004184478628749042",
            "extra": "mean: 1.1460636041999919 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 140.2580345763114,
            "unit": "iter/sec",
            "range": "stddev: 0.00012981077321001208",
            "extra": "mean: 7.129716333333628 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 159.7072022548052,
            "unit": "iter/sec",
            "range": "stddev: 0.00510982243520843",
            "extra": "mean: 6.261458380596686 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.48600650652467,
            "unit": "iter/sec",
            "range": "stddev: 0.00033096816971257896",
            "extra": "mean: 8.29971902127777 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.75331069830134,
            "unit": "iter/sec",
            "range": "stddev: 0.0002738369081895981",
            "extra": "mean: 22.855413317073246 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.96784845719821,
            "unit": "iter/sec",
            "range": "stddev: 0.01184391776855768",
            "extra": "mean: 28.59769886111331 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5666790360363423,
            "unit": "iter/sec",
            "range": "stddev: 0.0028341766331850963",
            "extra": "mean: 638.2928327999934 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 142.12017025475032,
            "unit": "iter/sec",
            "range": "stddev: 0.00008127936375734843",
            "extra": "mean: 7.036298916666794 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 156.9540156766766,
            "unit": "iter/sec",
            "range": "stddev: 0.0005996426787696253",
            "extra": "mean: 6.371292863637131 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1570045.0098746328,
            "unit": "iter/sec",
            "range": "stddev: 1.1036734589821806e-7",
            "extra": "mean: 636.9244153579072 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 382443.63939015917,
            "unit": "iter/sec",
            "range": "stddev: 3.851042985615428e-7",
            "extra": "mean: 2.614764365265925 usec\nrounds: 1897"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.64058141075228,
            "unit": "iter/sec",
            "range": "stddev: 0.00020158205082296596",
            "extra": "mean: 4.054482819818738 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19421.295588751156,
            "unit": "iter/sec",
            "range": "stddev: 0.00001472712310511561",
            "extra": "mean: 51.48987076738596 usec\nrounds: 7088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 74.12078334461299,
            "unit": "iter/sec",
            "range": "stddev: 0.015028227992002995",
            "extra": "mean: 13.491492599999333 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10392.703808219643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016986775691561012",
            "extra": "mean: 96.2213509066904 usec\nrounds: 2978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4533.251994495744,
            "unit": "iter/sec",
            "range": "stddev: 0.000021507706257495506",
            "extra": "mean: 220.59219324542204 usec\nrounds: 1066"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 160.38830371876148,
            "unit": "iter/sec",
            "range": "stddev: 0.000623510124200048",
            "extra": "mean: 6.234868608333718 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5910.5289058186845,
            "unit": "iter/sec",
            "range": "stddev: 0.00005550410757859518",
            "extra": "mean: 169.18959638545022 usec\nrounds: 2158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 418.8328620167251,
            "unit": "iter/sec",
            "range": "stddev: 0.00002556380983160142",
            "extra": "mean: 2.387587247058153 msec\nrounds: 340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.31896404487122,
            "unit": "iter/sec",
            "range": "stddev: 0.0005795423375171202",
            "extra": "mean: 10.602321708328569 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5200.381211652901,
            "unit": "iter/sec",
            "range": "stddev: 0.0000452672862940953",
            "extra": "mean: 192.2935952770581 usec\nrounds: 2456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.59198445757848,
            "unit": "iter/sec",
            "range": "stddev: 0.0005502917846854743",
            "extra": "mean: 10.800070933333927 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9773.912269666263,
            "unit": "iter/sec",
            "range": "stddev: 0.000014366993062591034",
            "extra": "mean: 102.31317536003888 usec\nrounds: 2013"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.1807890847038,
            "unit": "iter/sec",
            "range": "stddev: 0.00009205430536934301",
            "extra": "mean: 6.984177181817413 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.21477480590714,
            "unit": "iter/sec",
            "range": "stddev: 0.0006161077329156339",
            "extra": "mean: 11.208905724142314 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2668800524384194,
            "unit": "iter/sec",
            "range": "stddev: 0.0010892277737991692",
            "extra": "mean: 441.1349417999986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55818.76477354187,
            "unit": "iter/sec",
            "range": "stddev: 5.580795788581131e-7",
            "extra": "mean: 17.915122343839478 usec\nrounds: 12988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10748795.608851874,
            "unit": "iter/sec",
            "range": "stddev: 3.792597966214166e-9",
            "extra": "mean: 93.03367897119905 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5819.264684133359,
            "unit": "iter/sec",
            "range": "stddev: 0.00006792729123713506",
            "extra": "mean: 171.84301699260587 usec\nrounds: 1942"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1972478.3951488354,
            "unit": "iter/sec",
            "range": "stddev: 2.2326693201072926e-8",
            "extra": "mean: 506.9764021038629 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1428.0769683034077,
            "unit": "iter/sec",
            "range": "stddev: 0.00006113417570897373",
            "extra": "mean: 700.2423694207644 usec\nrounds: 1053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 241.30731955119538,
            "unit": "iter/sec",
            "range": "stddev: 0.00024291334356914987",
            "extra": "mean: 4.144093108571626 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.89931047207935,
            "unit": "iter/sec",
            "range": "stddev: 0.00022821107277049436",
            "extra": "mean: 15.408484200001093 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 155.84549171697893,
            "unit": "iter/sec",
            "range": "stddev: 0.0006796759061659788",
            "extra": "mean: 6.416611664430026 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4291862.467336262,
            "unit": "iter/sec",
            "range": "stddev: 1.217644441448948e-8",
            "extra": "mean: 232.99907851445104 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 272.315214289084,
            "unit": "iter/sec",
            "range": "stddev: 0.00004011255199024901",
            "extra": "mean: 3.6722149462366116 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 247.91765585250653,
            "unit": "iter/sec",
            "range": "stddev: 0.00022770890901483112",
            "extra": "mean: 4.033597351351729 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.095049135393417,
            "unit": "iter/sec",
            "range": "stddev: 0.00046822717960911636",
            "extra": "mean: 38.32144537500307 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 324.0150717532969,
            "unit": "iter/sec",
            "range": "stddev: 0.00006627809613164526",
            "extra": "mean: 3.086276186440468 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 957.8962536162658,
            "unit": "iter/sec",
            "range": "stddev: 0.00003434116843007886",
            "extra": "mean: 1.043954390911107 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1933351.381174655,
            "unit": "iter/sec",
            "range": "stddev: 2.794822217998611e-8",
            "extra": "mean: 517.2365508603793 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7458892088487061,
            "unit": "iter/sec",
            "range": "stddev: 0.0020411181765126194",
            "extra": "mean: 1.3406816832000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.36325680822843,
            "unit": "iter/sec",
            "range": "stddev: 0.0005417990283107158",
            "extra": "mean: 11.316921038461313 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 248.34381623089376,
            "unit": "iter/sec",
            "range": "stddev: 0.00020817249422731742",
            "extra": "mean: 4.026675659482763 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 127.9272199487221,
            "unit": "iter/sec",
            "range": "stddev: 0.011381146850407177",
            "extra": "mean: 7.816944669014432 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.92493457973742,
            "unit": "iter/sec",
            "range": "stddev: 0.00026399402801112546",
            "extra": "mean: 4.238636334821244 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5817.80841060582,
            "unit": "iter/sec",
            "range": "stddev: 0.000052865128580341845",
            "extra": "mean: 171.8860315470354 usec\nrounds: 2948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 140.75896233099616,
            "unit": "iter/sec",
            "range": "stddev: 0.0007243688634473468",
            "extra": "mean: 7.104343364286032 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15386237979398873,
            "unit": "iter/sec",
            "range": "stddev: 0.07611221418814203",
            "extra": "mean: 6.499314526000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 155.81675526726272,
            "unit": "iter/sec",
            "range": "stddev: 0.000715131505861828",
            "extra": "mean: 6.417795045755911 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5293034.59701594,
            "unit": "iter/sec",
            "range": "stddev: 6.767940863306322e-9",
            "extra": "mean: 188.92753895155334 nsec\nrounds: 52632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 250.15137146251692,
            "unit": "iter/sec",
            "range": "stddev: 0.0003129540999854483",
            "extra": "mean: 3.997579522164809 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.37706040204714,
            "unit": "iter/sec",
            "range": "stddev: 0.000105953290762014",
            "extra": "mean: 15.065445711861608 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.77263744684174,
            "unit": "iter/sec",
            "range": "stddev: 0.00011659467257160868",
            "extra": "mean: 9.825823768420305 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8741050578946206,
            "unit": "iter/sec",
            "range": "stddev: 0.001006985314872708",
            "extra": "mean: 1.1440272435999987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.68539572376768,
            "unit": "iter/sec",
            "range": "stddev: 0.00021764274536229382",
            "extra": "mean: 10.56129081318274 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 263.4732783178081,
            "unit": "iter/sec",
            "range": "stddev: 0.000019865286743058402",
            "extra": "mean: 3.7954513124999907 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.77111833030315,
            "unit": "iter/sec",
            "range": "stddev: 0.0006160183640730615",
            "extra": "mean: 10.664264411111743 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.119950645161413,
            "unit": "iter/sec",
            "range": "stddev: 0.00028905897069247515",
            "extra": "mean: 109.64971620000483 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 633.793177446159,
            "unit": "iter/sec",
            "range": "stddev: 0.000012005185587363771",
            "extra": "mean: 1.5778017744360309 msec\nrounds: 532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.608385622658666,
            "unit": "iter/sec",
            "range": "stddev: 0.0005063029950445867",
            "extra": "mean: 17.982899319999888 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.59885290489688,
            "unit": "iter/sec",
            "range": "stddev: 0.00014064468185458442",
            "extra": "mean: 73.53561414285943 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5040.931900490364,
            "unit": "iter/sec",
            "range": "stddev: 0.00004988944565648946",
            "extra": "mean: 198.37601851013372 usec\nrounds: 2269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1469317.6629961992,
            "unit": "iter/sec",
            "range": "stddev: 7.379580986156422e-8",
            "extra": "mean: 680.5880206740472 nsec\nrounds: 56180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5054.473504234241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000572278176918756",
            "extra": "mean: 197.8445428910209 usec\nrounds: 851"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.82850281188011,
            "unit": "iter/sec",
            "range": "stddev: 0.0005707415254019223",
            "extra": "mean: 12.073138666664029 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 568244.2557499178,
            "unit": "iter/sec",
            "range": "stddev: 1.1122960966311832e-7",
            "extra": "mean: 1.759806614640195 usec\nrounds: 21739"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.34097225150687,
            "unit": "iter/sec",
            "range": "stddev: 0.00008959545851406894",
            "extra": "mean: 10.066339973684236 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 116970.3858624882,
            "unit": "iter/sec",
            "range": "stddev: 3.5611891352152233e-7",
            "extra": "mean: 8.549172447593804 usec\nrounds: 37594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5733.772864529953,
            "unit": "iter/sec",
            "range": "stddev: 0.00005208774298826545",
            "extra": "mean: 174.40523432418502 usec\nrounds: 2185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.98940236607782,
            "unit": "iter/sec",
            "range": "stddev: 0.0006712995422705354",
            "extra": "mean: 28.580082321425948 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.90803697584388,
            "unit": "iter/sec",
            "range": "stddev: 0.00019342341180686554",
            "extra": "mean: 13.906651357148446 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10854.40385731266,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018473770123176407",
            "extra": "mean: 92.12850499627352 usec\nrounds: 5804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 157.82683498174237,
            "unit": "iter/sec",
            "range": "stddev: 0.000692532936821891",
            "extra": "mean: 6.336058124181997 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4522012.416460508,
            "unit": "iter/sec",
            "range": "stddev: 1.0853857909078324e-8",
            "extra": "mean: 221.14048080876964 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5743512883205235,
            "unit": "iter/sec",
            "range": "stddev: 0.0767595696920478",
            "extra": "mean: 1.741094727799998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 521.2931137402002,
            "unit": "iter/sec",
            "range": "stddev: 0.000018434821833251476",
            "extra": "mean: 1.9183065604399596 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 222.4452190661217,
            "unit": "iter/sec",
            "range": "stddev: 0.00041521797469874403",
            "extra": "mean: 4.495488840795228 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.29455423197378,
            "unit": "iter/sec",
            "range": "stddev: 0.00019509827256673857",
            "extra": "mean: 11.32572680952359 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 249.38759328707596,
            "unit": "iter/sec",
            "range": "stddev: 0.0001299176412829548",
            "extra": "mean: 4.009822569035648 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.82179473073784,
            "unit": "iter/sec",
            "range": "stddev: 0.00041070719236665273",
            "extra": "mean: 22.310574710526286 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.95591468569276,
            "unit": "iter/sec",
            "range": "stddev: 0.000037748642346665826",
            "extra": "mean: 201.7790990000094 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}