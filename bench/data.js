window.BENCHMARK_DATA = {
  "lastUpdate": 1680013601782,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "c325c0bbc798d0042135efb8b624d3eef392f398",
          "message": "refactor(datatypes): remove direct `ir` dependency from `datatypes`\n\nThis change was required to prevent import cycles. The value expression\ncorresponding to a datatype is now can be retrieved using\n`getattr(ibis.expr.types, DataType.scalar|column)`.\n\nBREAKING CHANGE: `DataType.scalar` and `column` class attributes are now strings.",
          "timestamp": "2023-03-28T16:21:04+02:00",
          "tree_id": "b038c34e3a8b7a0bc0daf5edf5f54e523602dc39",
          "url": "https://github.com/ibis-project/ibis/commit/c325c0bbc798d0042135efb8b624d3eef392f398"
        },
        "date": 1680013516766,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11836.521044000054,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021810059399062922",
            "extra": "mean: 84.4842835392838 usec\nrounds: 4532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.91376715427023,
            "unit": "iter/sec",
            "range": "stddev: 0.0005387132949269328",
            "extra": "mean: 8.202519070176837 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7622950014216592,
            "unit": "iter/sec",
            "range": "stddev: 0.001505669663469126",
            "extra": "mean: 567.4418864000017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.92261416248533,
            "unit": "iter/sec",
            "range": "stddev: 0.0002598260887326913",
            "extra": "mean: 3.5470726708842615 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1823609874072902,
            "unit": "iter/sec",
            "range": "stddev: 0.05224896452120131",
            "extra": "mean: 5.483629005399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1193.216807886696,
            "unit": "iter/sec",
            "range": "stddev: 0.000041576602128519106",
            "extra": "mean: 838.0706619202742 usec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2418788.192528415,
            "unit": "iter/sec",
            "range": "stddev: 1.832307218521163e-8",
            "extra": "mean: 413.4301643645551 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.29644831928294,
            "unit": "iter/sec",
            "range": "stddev: 0.0005062739251093471",
            "extra": "mean: 9.872014434780914 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 163.28838684405244,
            "unit": "iter/sec",
            "range": "stddev: 0.00806869535689321",
            "extra": "mean: 6.124134234696333 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 736.3284524995202,
            "unit": "iter/sec",
            "range": "stddev: 0.000027953948996298684",
            "extra": "mean: 1.3580895816336143 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 316.1897484989218,
            "unit": "iter/sec",
            "range": "stddev: 0.00020868230870172083",
            "extra": "mean: 3.1626578810584363 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.42464950144345,
            "unit": "iter/sec",
            "range": "stddev: 0.0005632074123665574",
            "extra": "mean: 9.396319411758428 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 300.91470962606564,
            "unit": "iter/sec",
            "range": "stddev: 0.00024829155706634426",
            "extra": "mean: 3.3232007875010794 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.10566121312687,
            "unit": "iter/sec",
            "range": "stddev: 0.0002757882514215939",
            "extra": "mean: 14.264183272730563 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 300.9583888761394,
            "unit": "iter/sec",
            "range": "stddev: 0.0002135408836336524",
            "extra": "mean: 3.3227184785719794 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.582541441039,
            "unit": "iter/sec",
            "range": "stddev: 0.00021578089127116974",
            "extra": "mean: 3.219755995814208 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.194824212125063,
            "unit": "iter/sec",
            "range": "stddev: 0.00026697520481404406",
            "extra": "mean: 98.08898899999325 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 39.4907267341804,
            "unit": "iter/sec",
            "range": "stddev: 0.015142739747465937",
            "extra": "mean: 25.322400540541846 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8456915904409612,
            "unit": "iter/sec",
            "range": "stddev: 0.002563358051260227",
            "extra": "mean: 1.1824641645999805 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 106.17780479944606,
            "unit": "iter/sec",
            "range": "stddev: 0.00014642880017572553",
            "extra": "mean: 9.418164200030787 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 540.8260138470988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000662015803261461",
            "extra": "mean: 1.8490234833317725 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9283467704698806,
            "unit": "iter/sec",
            "range": "stddev: 0.0020826364210978932",
            "extra": "mean: 1.0771836902000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.79798849145133,
            "unit": "iter/sec",
            "range": "stddev: 0.0007177298408249008",
            "extra": "mean: 37.31623365384324 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.5792215087626,
            "unit": "iter/sec",
            "range": "stddev: 0.0000653138007612665",
            "extra": "mean: 6.266479999998554 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5816.182031888674,
            "unit": "iter/sec",
            "range": "stddev: 0.00004292726538549311",
            "extra": "mean: 171.93409603022218 usec\nrounds: 2645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5679.287555182841,
            "unit": "iter/sec",
            "range": "stddev: 0.00004288373377822553",
            "extra": "mean: 176.0784236197749 usec\nrounds: 3116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 103.01884516104778,
            "unit": "iter/sec",
            "range": "stddev: 0.009802948306068789",
            "extra": "mean: 9.706961851850652 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5416.862981400641,
            "unit": "iter/sec",
            "range": "stddev: 0.000050227654627940985",
            "extra": "mean: 184.6086938941604 usec\nrounds: 3685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.34166380741335,
            "unit": "iter/sec",
            "range": "stddev: 0.0006540009775601904",
            "extra": "mean: 8.309674042734962 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.03294767781196,
            "unit": "iter/sec",
            "range": "stddev: 0.02039821338602017",
            "extra": "mean: 25.61938207317209 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.69836725536582,
            "unit": "iter/sec",
            "range": "stddev: 0.000636008429422171",
            "extra": "mean: 9.460884079543192 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 288.22690800779276,
            "unit": "iter/sec",
            "range": "stddev: 0.0001231598502849551",
            "extra": "mean: 3.4694886987198403 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 355.89750156171925,
            "unit": "iter/sec",
            "range": "stddev: 0.000028021425851564578",
            "extra": "mean: 2.809797752476162 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.723855914730784,
            "unit": "iter/sec",
            "range": "stddev: 0.0008038008521884511",
            "extra": "mean: 22.870809974997997 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5507.793311451442,
            "unit": "iter/sec",
            "range": "stddev: 0.000047390359316990575",
            "extra": "mean: 181.560916224083 usec\nrounds: 1886"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.30070549426232,
            "unit": "iter/sec",
            "range": "stddev: 0.0006452723137505957",
            "extra": "mean: 8.312503205126212 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1666382.163291791,
            "unit": "iter/sec",
            "range": "stddev: 1.9486898706830135e-7",
            "extra": "mean: 600.102438701449 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.1274441660848,
            "unit": "iter/sec",
            "range": "stddev: 0.00012298534114319655",
            "extra": "mean: 1.459582459460762 msec\nrounds: 555"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.08349857339913,
            "unit": "iter/sec",
            "range": "stddev: 0.0006970056266433003",
            "extra": "mean: 9.700873697917464 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6606073588516654,
            "unit": "iter/sec",
            "range": "stddev: 0.05653939106136794",
            "extra": "mean: 1.513758492999989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.4159144915132,
            "unit": "iter/sec",
            "range": "stddev: 0.00015504496308609112",
            "extra": "mean: 10.160958267437875 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12495721.105818316,
            "unit": "iter/sec",
            "range": "stddev: 3.4628107087464355e-9",
            "extra": "mean: 80.02739430003541 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6328502.335345678,
            "unit": "iter/sec",
            "range": "stddev: 1.0031164144003451e-8",
            "extra": "mean: 158.0152691754494 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1753.6787070640357,
            "unit": "iter/sec",
            "range": "stddev: 0.00004546095460685854",
            "extra": "mean: 570.229880748324 usec\nrounds: 1283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.69338296543735,
            "unit": "iter/sec",
            "range": "stddev: 0.00005978517701325704",
            "extra": "mean: 8.95308185185368 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11618.244090088563,
            "unit": "iter/sec",
            "range": "stddev: 0.000011878413725087433",
            "extra": "mean: 86.07152614852467 usec\nrounds: 5985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 250.2927596771529,
            "unit": "iter/sec",
            "range": "stddev: 0.0042749706464126035",
            "extra": "mean: 3.9953213240761656 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.80759842543632,
            "unit": "iter/sec",
            "range": "stddev: 0.00005206036911116448",
            "extra": "mean: 10.660117269656546 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1896065.5979607864,
            "unit": "iter/sec",
            "range": "stddev: 2.233496857345282e-7",
            "extra": "mean: 527.407913036077 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5249.024381335765,
            "unit": "iter/sec",
            "range": "stddev: 0.00006578237973587929",
            "extra": "mean: 190.51159365076552 usec\nrounds: 2205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.82235667236479,
            "unit": "iter/sec",
            "range": "stddev: 0.00038651361752437176",
            "extra": "mean: 15.192406509805888 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 178.46700888239084,
            "unit": "iter/sec",
            "range": "stddev: 0.004049338868504356",
            "extra": "mean: 5.603276517392616 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5560403.786497055,
            "unit": "iter/sec",
            "range": "stddev: 1.086787057552903e-8",
            "extra": "mean: 179.8430542813511 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1900383.0859187488,
            "unit": "iter/sec",
            "range": "stddev: 9.742623884147675e-8",
            "extra": "mean: 526.2096928822883 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9220469573605249,
            "unit": "iter/sec",
            "range": "stddev: 0.0017894730200054905",
            "extra": "mean: 1.0845434628000135 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8121.604144178711,
            "unit": "iter/sec",
            "range": "stddev: 0.000011274254175130993",
            "extra": "mean: 123.12838476826845 usec\nrounds: 3519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.3953700320273,
            "unit": "iter/sec",
            "range": "stddev: 0.00006290523708901945",
            "extra": "mean: 8.446276233010535 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5681.289887773397,
            "unit": "iter/sec",
            "range": "stddev: 0.00004943307254840974",
            "extra": "mean: 176.016365958034 usec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.27641520811484,
            "unit": "iter/sec",
            "range": "stddev: 0.0006353805876698361",
            "extra": "mean: 10.837005292681326 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 492439.7341701935,
            "unit": "iter/sec",
            "range": "stddev: 1.394155702009358e-7",
            "extra": "mean: 2.0307053444521337 usec\nrounds: 2077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4337.6157351770835,
            "unit": "iter/sec",
            "range": "stddev: 0.002809923035701697",
            "extra": "mean: 230.54139902025577 usec\nrounds: 2451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5627.896839396492,
            "unit": "iter/sec",
            "range": "stddev: 0.00004449460151684457",
            "extra": "mean: 177.68627047315155 usec\nrounds: 2662"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.76138102336144,
            "unit": "iter/sec",
            "range": "stddev: 0.0006741113652328149",
            "extra": "mean: 8.349937112072325 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7282522.090643173,
            "unit": "iter/sec",
            "range": "stddev: 4.830834257730337e-9",
            "extra": "mean: 137.3150657908679 nsec\nrounds: 64521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.47206468624307,
            "unit": "iter/sec",
            "range": "stddev: 0.00005097988505917704",
            "extra": "mean: 6.5158437924477735 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.62398777526853,
            "unit": "iter/sec",
            "range": "stddev: 0.0007881723551645798",
            "extra": "mean: 10.037743141298428 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 726646.3405662212,
            "unit": "iter/sec",
            "range": "stddev: 2.559671459144353e-7",
            "extra": "mean: 1.3761852832297685 usec\nrounds: 25318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.18283616163076,
            "unit": "iter/sec",
            "range": "stddev: 0.0008123269296869196",
            "extra": "mean: 65.86384713332714 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141335.96273545412,
            "unit": "iter/sec",
            "range": "stddev: 4.027977258673098e-7",
            "extra": "mean: 7.075340066644976 usec\nrounds: 35843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.2915509178723,
            "unit": "iter/sec",
            "range": "stddev: 0.0006930128104626941",
            "extra": "mean: 9.970929663046986 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.71111594204356,
            "unit": "iter/sec",
            "range": "stddev: 0.0007462169735116864",
            "extra": "mean: 8.353443137929945 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 92.17089243596294,
            "unit": "iter/sec",
            "range": "stddev: 0.013952321941588687",
            "extra": "mean: 10.849412147058947 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71576.64522879673,
            "unit": "iter/sec",
            "range": "stddev: 4.4776650802845303e-7",
            "extra": "mean: 13.971037575224047 usec\nrounds: 14451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.88476223194894,
            "unit": "iter/sec",
            "range": "stddev: 0.00011013358475721666",
            "extra": "mean: 13.720288979164033 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 303.5964873162362,
            "unit": "iter/sec",
            "range": "stddev: 0.0002122962182697831",
            "extra": "mean: 3.293845751773691 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.41495844350358,
            "unit": "iter/sec",
            "range": "stddev: 0.0007081621637616812",
            "extra": "mean: 8.817179089283352 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.7842934227978,
            "unit": "iter/sec",
            "range": "stddev: 0.00021507520079235037",
            "extra": "mean: 3.2176658253432966 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5648.923037714227,
            "unit": "iter/sec",
            "range": "stddev: 0.00001929866814615725",
            "extra": "mean: 177.02489365205423 usec\nrounds: 2473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13370.891177332991,
            "unit": "iter/sec",
            "range": "stddev: 0.000002905789801648327",
            "extra": "mean: 74.78933054927936 usec\nrounds: 6465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.06100380997968,
            "unit": "iter/sec",
            "range": "stddev: 0.0006515338259645527",
            "extra": "mean: 8.329099110171509 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.444989581979253,
            "unit": "iter/sec",
            "range": "stddev: 0.000636637866877976",
            "extra": "mean: 183.6550804999888 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 303.8414036888274,
            "unit": "iter/sec",
            "range": "stddev: 0.00022805874014616238",
            "extra": "mean: 3.291190693102933 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.55215250227473,
            "unit": "iter/sec",
            "range": "stddev: 0.0004189669004796061",
            "extra": "mean: 17.682792886792 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.48297109368257,
            "unit": "iter/sec",
            "range": "stddev: 0.00015102790193741587",
            "extra": "mean: 21.060181723402017 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 323.6431755976195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000256864183216435",
            "extra": "mean: 3.0898226052610616 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.68480504987588,
            "unit": "iter/sec",
            "range": "stddev: 0.00007471958099550087",
            "extra": "mean: 6.146855569537796 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.583728427438496,
            "unit": "iter/sec",
            "range": "stddev: 0.0010495964604574687",
            "extra": "mean: 387.03758080000625 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.10531836880972,
            "unit": "iter/sec",
            "range": "stddev: 0.00006433993129416157",
            "extra": "mean: 7.188797752136992 msec\nrounds: 117"
          }
        ]
      }
    ]
  }
}