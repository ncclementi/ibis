window.BENCHMARK_DATA = {
  "lastUpdate": 1682441306336,
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
          "id": "69a5b93aa90bc6a7d68dc4e58ff5b585e310cc9d",
          "message": "test: update ibis-testing commit",
          "timestamp": "2023-04-25T12:40:56-04:00",
          "tree_id": "fd13331941b79ae42a04d7085b0a914ad42074dc",
          "url": "https://github.com/ibis-project/ibis/commit/69a5b93aa90bc6a7d68dc4e58ff5b585e310cc9d"
        },
        "date": 1682441223323,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 2673808.6533473586,
            "unit": "iter/sec",
            "range": "stddev: 7.513602245980767e-8",
            "extra": "mean: 373.9983408117456 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.351918272712478,
            "unit": "iter/sec",
            "range": "stddev: 0.0011704275906094823",
            "extra": "mean: 41.06452677777542 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 274.8390166520548,
            "unit": "iter/sec",
            "range": "stddev: 0.00029513381405305754",
            "extra": "mean: 3.638493588652285 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1892757.601920347,
            "unit": "iter/sec",
            "range": "stddev: 2.0099744233992965e-7",
            "extra": "mean: 528.3296704160235 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.224557332004146,
            "unit": "iter/sec",
            "range": "stddev: 0.0005831438711173283",
            "extra": "mean: 18.788319717948994 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6025277.495274152,
            "unit": "iter/sec",
            "range": "stddev: 1.4298878909597268e-8",
            "extra": "mean: 165.96745971989108 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2027.5833299047338,
            "unit": "iter/sec",
            "range": "stddev: 0.0003590707192607499",
            "extra": "mean: 493.1979787222777 usec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.20739002166366,
            "unit": "iter/sec",
            "range": "stddev: 0.00025593914862901584",
            "extra": "mean: 10.18253310447828 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.16751446974688,
            "unit": "iter/sec",
            "range": "stddev: 0.000592719244400157",
            "extra": "mean: 9.78784699999835 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6213807.1397152385,
            "unit": "iter/sec",
            "range": "stddev: 1.2884419854831256e-8",
            "extra": "mean: 160.93193391994646 nsec\nrounds: 62500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.81092343856618,
            "unit": "iter/sec",
            "range": "stddev: 0.0007011657046957054",
            "extra": "mean: 9.540990263158397 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.43016296323071,
            "unit": "iter/sec",
            "range": "stddev: 0.015512890396755716",
            "extra": "mean: 11.570034878048558 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.27328371234674,
            "unit": "iter/sec",
            "range": "stddev: 0.003670922664368119",
            "extra": "mean: 6.2393430572918644 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 936938.5759832028,
            "unit": "iter/sec",
            "range": "stddev: 1.2813447955224165e-7",
            "extra": "mean: 1.0673058251984362 usec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.16779041688284,
            "unit": "iter/sec",
            "range": "stddev: 0.00030400592502161756",
            "extra": "mean: 3.5820751330470264 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.48792546057979,
            "unit": "iter/sec",
            "range": "stddev: 0.0007199049313006057",
            "extra": "mean: 9.757246968421004 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 215.62100481748988,
            "unit": "iter/sec",
            "range": "stddev: 0.009266587526142955",
            "extra": "mean: 4.637767089743597 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9020969532168123,
            "unit": "iter/sec",
            "range": "stddev: 0.003919639477488029",
            "extra": "mean: 1.1085282978000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6656012.130379241,
            "unit": "iter/sec",
            "range": "stddev: 1.1009690461326027e-8",
            "extra": "mean: 150.24011080685867 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.8599180836425,
            "unit": "iter/sec",
            "range": "stddev: 0.0009102253017259997",
            "extra": "mean: 10.014027842105795 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.77423031733903,
            "unit": "iter/sec",
            "range": "stddev: 0.0009082085806717798",
            "extra": "mean: 10.022628055555316 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 134.26049954587765,
            "unit": "iter/sec",
            "range": "stddev: 0.014927230317232816",
            "extra": "mean: 7.448207055555412 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.60603276708503,
            "unit": "iter/sec",
            "range": "stddev: 0.0008814803829740417",
            "extra": "mean: 10.03955254736791 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4571.569113359728,
            "unit": "iter/sec",
            "range": "stddev: 0.000026279082357013496",
            "extra": "mean: 218.74327505574604 usec\nrounds: 898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.51719719595917,
            "unit": "iter/sec",
            "range": "stddev: 0.00023157040218797033",
            "extra": "mean: 6.513928200001828 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1675630495681415,
            "unit": "iter/sec",
            "range": "stddev: 0.1643217817776601",
            "extra": "mean: 5.967902843600004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.48276854752267,
            "unit": "iter/sec",
            "range": "stddev: 0.000862071145676342",
            "extra": "mean: 10.473093891305536 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.017550103536955,
            "unit": "iter/sec",
            "range": "stddev: 0.0010769139533987728",
            "extra": "mean: 24.379808093749844 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.44025641459334,
            "unit": "iter/sec",
            "range": "stddev: 0.0006806982834840759",
            "extra": "mean: 9.394941666665288 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.00542670645887,
            "unit": "iter/sec",
            "range": "stddev: 0.000160799129427759",
            "extra": "mean: 33.32730475000188 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.23460769348502,
            "unit": "iter/sec",
            "range": "stddev: 0.0007401241067261105",
            "extra": "mean: 9.878044897726761 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.5504780333347,
            "unit": "iter/sec",
            "range": "stddev: 0.00029287718384161254",
            "extra": "mean: 3.6290991296303434 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.801396883269014,
            "unit": "iter/sec",
            "range": "stddev: 0.0006339876040726826",
            "extra": "mean: 15.673638021274035 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148583.5756794967,
            "unit": "iter/sec",
            "range": "stddev: 3.339161684259257e-7",
            "extra": "mean: 6.730218972230534 usec\nrounds: 33333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.878730543480778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000656879902830693",
            "extra": "mean: 52.96966327777378 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1741.3716792281182,
            "unit": "iter/sec",
            "range": "stddev: 0.00000509828078940321",
            "extra": "mean: 574.2599422791008 usec\nrounds: 1334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 241.8861733559979,
            "unit": "iter/sec",
            "range": "stddev: 0.003965090254065525",
            "extra": "mean: 4.134175947825848 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2155.7638386192675,
            "unit": "iter/sec",
            "range": "stddev: 0.00008121106357216429",
            "extra": "mean: 463.87270353346497 usec\nrounds: 1302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.81569793370323,
            "unit": "iter/sec",
            "range": "stddev: 0.0007577014096395544",
            "extra": "mean: 9.821668173911108 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.15864545139647,
            "unit": "iter/sec",
            "range": "stddev: 0.00020077837102383317",
            "extra": "mean: 7.624354433963491 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6384044960377742,
            "unit": "iter/sec",
            "range": "stddev: 0.0011070651690006214",
            "extra": "mean: 610.349887600006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1178.0291047494457,
            "unit": "iter/sec",
            "range": "stddev: 0.000010323369700505477",
            "extra": "mean: 848.875461538524 usec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1859744.1671234912,
            "unit": "iter/sec",
            "range": "stddev: 9.056654136865552e-8",
            "extra": "mean: 537.7083674614895 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 759.2155054309636,
            "unit": "iter/sec",
            "range": "stddev: 0.000010256722649672053",
            "extra": "mean: 1.3171490740726595 msec\nrounds: 297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11535411.24085606,
            "unit": "iter/sec",
            "range": "stddev: 3.19852700171584e-9",
            "extra": "mean: 86.68958384930247 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.38513728332698,
            "unit": "iter/sec",
            "range": "stddev: 0.00013311534621557533",
            "extra": "mean: 9.48900410227212 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 177.65264575059737,
            "unit": "iter/sec",
            "range": "stddev: 0.00005811698082179515",
            "extra": "mean: 5.6289620443023285 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2159.9361744491193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000824313223632797",
            "extra": "mean: 462.9766433978286 usec\nrounds: 1189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5536767414067194,
            "unit": "iter/sec",
            "range": "stddev: 0.0027150368637731755",
            "extra": "mean: 391.59224180000933 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12318.840072048704,
            "unit": "iter/sec",
            "range": "stddev: 0.000015526296249087866",
            "extra": "mean: 81.17647393353108 usec\nrounds: 4220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1857760.0082197727,
            "unit": "iter/sec",
            "range": "stddev: 9.747508251956544e-8",
            "extra": "mean: 538.2826606103258 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 284.86764462628906,
            "unit": "iter/sec",
            "range": "stddev: 0.0002536335559939106",
            "extra": "mean: 3.510402177516073 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 77.23037665855142,
            "unit": "iter/sec",
            "range": "stddev: 0.022770609935064006",
            "extra": "mean: 12.948272988764115 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 317.7819240163575,
            "unit": "iter/sec",
            "range": "stddev: 0.00003578940732654846",
            "extra": "mean: 3.1468120884953987 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.70948567245784,
            "unit": "iter/sec",
            "range": "stddev: 0.0002788870410832074",
            "extra": "mean: 3.5751379600011433 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5476365.71186576,
            "unit": "iter/sec",
            "range": "stddev: 9.019515282938447e-9",
            "extra": "mean: 182.60285244153604 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.01221595030115,
            "unit": "iter/sec",
            "range": "stddev: 0.0009420695445107442",
            "extra": "mean: 10.524962395604778 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 187.9426489520166,
            "unit": "iter/sec",
            "range": "stddev: 0.00017430981245505287",
            "extra": "mean: 5.320772084335731 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 525.6462821036932,
            "unit": "iter/sec",
            "range": "stddev: 0.000023281834440576372",
            "extra": "mean: 1.9024200000005556 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10392.41540947276,
            "unit": "iter/sec",
            "range": "stddev: 0.000002274018430242809",
            "extra": "mean: 96.22402113453748 usec\nrounds: 4495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 285.3656511764887,
            "unit": "iter/sec",
            "range": "stddev: 0.0002707517089401697",
            "extra": "mean: 3.5042759907412084 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8539.040045037691,
            "unit": "iter/sec",
            "range": "stddev: 0.00001343776044900241",
            "extra": "mean: 117.10918261604031 usec\nrounds: 1139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.470153243300134,
            "unit": "iter/sec",
            "range": "stddev: 0.00014097282415312108",
            "extra": "mean: 118.06161839999731 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7760270309447914,
            "unit": "iter/sec",
            "range": "stddev: 0.0027739897315221845",
            "extra": "mean: 1.288614906600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.66996066066626,
            "unit": "iter/sec",
            "range": "stddev: 0.02761784189327897",
            "extra": "mean: 27.270277414631696 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.85512819034238,
            "unit": "iter/sec",
            "range": "stddev: 0.00012807592489910358",
            "extra": "mean: 9.102897757010785 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 416.7101810027284,
            "unit": "iter/sec",
            "range": "stddev: 0.000029691742436483922",
            "extra": "mean: 2.3997493835972596 msec\nrounds: 378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.76853590389418,
            "unit": "iter/sec",
            "range": "stddev: 0.00027844758437576357",
            "extra": "mean: 18.950686860466835 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.95856544250701,
            "unit": "iter/sec",
            "range": "stddev: 0.00009481866012841001",
            "extra": "mean: 9.619216999998308 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9029759489052906,
            "unit": "iter/sec",
            "range": "stddev: 0.002944291161920591",
            "extra": "mean: 1.107449208600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 124.69516555002974,
            "unit": "iter/sec",
            "range": "stddev: 0.00018181219439125393",
            "extra": "mean: 8.01955709821632 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.94623057735338,
            "unit": "iter/sec",
            "range": "stddev: 0.032874906376877996",
            "extra": "mean: 28.615389513512845 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3414722284993283,
            "unit": "iter/sec",
            "range": "stddev: 0.0018795176837235637",
            "extra": "mean: 745.4496475999917 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1643602.2264280315,
            "unit": "iter/sec",
            "range": "stddev: 8.538641948783177e-8",
            "extra": "mean: 608.4197161093266 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13882.501759835548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013038666606767794",
            "extra": "mean: 72.03312611082615 usec\nrounds: 5289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2134.065881756471,
            "unit": "iter/sec",
            "range": "stddev: 0.00010797498848173018",
            "extra": "mean: 468.58909490504436 usec\nrounds: 1001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 273.25144319289404,
            "unit": "iter/sec",
            "range": "stddev: 0.000249954721315347",
            "extra": "mean: 3.659633004368356 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 83.78064724848161,
            "unit": "iter/sec",
            "range": "stddev: 0.018368265083768227",
            "extra": "mean: 11.93593070526348 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.04921525191648,
            "unit": "iter/sec",
            "range": "stddev: 0.00004020250071211387",
            "extra": "mean: 9.170171446808514 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2225.345631675529,
            "unit": "iter/sec",
            "range": "stddev: 0.00008273478691861208",
            "extra": "mean: 449.3683973249002 usec\nrounds: 1271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.68782442702873,
            "unit": "iter/sec",
            "range": "stddev: 0.0007425635800900963",
            "extra": "mean: 9.373140799997941 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.76149274344965,
            "unit": "iter/sec",
            "range": "stddev: 0.02353994321658099",
            "extra": "mean: 13.557209362317366 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2233.156013559606,
            "unit": "iter/sec",
            "range": "stddev: 0.00008343838636326837",
            "extra": "mean: 447.7967477095432 usec\nrounds: 1419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.99567882568093,
            "unit": "iter/sec",
            "range": "stddev: 0.00003852512506349467",
            "extra": "mean: 5.102153302519504 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2162.261871247638,
            "unit": "iter/sec",
            "range": "stddev: 0.00008997906980130447",
            "extra": "mean: 462.4786725869583 usec\nrounds: 1295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 678.6373365909367,
            "unit": "iter/sec",
            "range": "stddev: 0.00003820778542615373",
            "extra": "mean: 1.4735410890054987 msec\nrounds: 573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2168.367109050696,
            "unit": "iter/sec",
            "range": "stddev: 0.00008699238243636652",
            "extra": "mean: 461.1765211831666 usec\nrounds: 1251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.31570325933845,
            "unit": "iter/sec",
            "range": "stddev: 0.00020525507091891603",
            "extra": "mean: 20.277516772725722 msec\nrounds: 44"
          }
        ]
      }
    ]
  }
}