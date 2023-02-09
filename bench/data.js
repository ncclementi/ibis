window.BENCHMARK_DATA = {
  "lastUpdate": 1675948977476,
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
          "id": "c93219092a38f76b68cd43bcfd0cfd8a1154af0f",
          "message": "ci(snowflake): fix quoting",
          "timestamp": "2023-02-09T08:17:57-05:00",
          "tree_id": "eae1cd1bec019b899f49167cf49c2a62bee2d7c7",
          "url": "https://github.com/ibis-project/ibis/commit/c93219092a38f76b68cd43bcfd0cfd8a1154af0f"
        },
        "date": 1675948894950,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1581784.6168419528,
            "unit": "iter/sec",
            "range": "stddev: 1.0085271459791893e-7",
            "extra": "mean: 632.197322791335 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 156.26171361845968,
            "unit": "iter/sec",
            "range": "stddev: 0.0006398848534312935",
            "extra": "mean: 6.399520246153673 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 140.95526580967768,
            "unit": "iter/sec",
            "range": "stddev: 0.00013591972053810626",
            "extra": "mean: 7.094449393258085 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.95937531732265,
            "unit": "iter/sec",
            "range": "stddev: 0.00018916652479016128",
            "extra": "mean: 14.50129145454714 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.90477457775403,
            "unit": "iter/sec",
            "range": "stddev: 0.0006952985569429883",
            "extra": "mean: 26.381900727273838 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5798.758415813778,
            "unit": "iter/sec",
            "range": "stddev: 0.00006568968818745644",
            "extra": "mean: 172.45070897813278 usec\nrounds: 646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 139.4946278844748,
            "unit": "iter/sec",
            "range": "stddev: 0.0003937502772000179",
            "extra": "mean: 7.168734847826324 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.12241338518382,
            "unit": "iter/sec",
            "range": "stddev: 0.0006617359877307151",
            "extra": "mean: 11.478102604651463 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 116.3553485639894,
            "unit": "iter/sec",
            "range": "stddev: 0.01232235636211557",
            "extra": "mean: 8.594362118644266 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.40997756720412,
            "unit": "iter/sec",
            "range": "stddev: 0.00007923431426565607",
            "extra": "mean: 14.83459921052568 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4466.97415309665,
            "unit": "iter/sec",
            "range": "stddev: 0.00003589424755114397",
            "extra": "mean: 223.8651860805525 usec\nrounds: 1365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.3451469310048,
            "unit": "iter/sec",
            "range": "stddev: 0.0006289651970514651",
            "extra": "mean: 10.828939400000573 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 569575.3684399473,
            "unit": "iter/sec",
            "range": "stddev: 3.239118491594803e-7",
            "extra": "mean: 1.7556939000697573 usec\nrounds: 21787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.40163981750341,
            "unit": "iter/sec",
            "range": "stddev: 0.00011208039447822713",
            "extra": "mean: 9.861773456521414 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6039.290379823043,
            "unit": "iter/sec",
            "range": "stddev: 0.000053346323815732163",
            "extra": "mean: 165.58236764719052 usec\nrounds: 340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1456.0186246389328,
            "unit": "iter/sec",
            "range": "stddev: 0.00001206414022576982",
            "extra": "mean: 686.8044014533004 usec\nrounds: 1101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 238.19531961668304,
            "unit": "iter/sec",
            "range": "stddev: 0.00022861542707073118",
            "extra": "mean: 4.198235303738356 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7446813941108541,
            "unit": "iter/sec",
            "range": "stddev: 0.004053851857236248",
            "extra": "mean: 1.3428561635999983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.71195734215716,
            "unit": "iter/sec",
            "range": "stddev: 0.0007474221307679801",
            "extra": "mean: 11.666983592593247 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 411.3156401364473,
            "unit": "iter/sec",
            "range": "stddev: 0.000026771408114234862",
            "extra": "mean: 2.4312228916660357 msec\nrounds: 360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5237.613518881319,
            "unit": "iter/sec",
            "range": "stddev: 0.000047531609044052336",
            "extra": "mean: 190.92664939767948 usec\nrounds: 2490"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.18791305427399,
            "unit": "iter/sec",
            "range": "stddev: 0.00024507060496912407",
            "extra": "mean: 23.70347162500117 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.86950314053938,
            "unit": "iter/sec",
            "range": "stddev: 0.0007137388316700537",
            "extra": "mean: 10.885004988763553 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.824345433221677,
            "unit": "iter/sec",
            "range": "stddev: 0.0008751128074304223",
            "extra": "mean: 207.28200620000052 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9748.928133236377,
            "unit": "iter/sec",
            "range": "stddev: 0.000013580135808171451",
            "extra": "mean: 102.57537919381782 usec\nrounds: 3845"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.99979291528659,
            "unit": "iter/sec",
            "range": "stddev: 0.00021676658853946585",
            "extra": "mean: 11.2359811999994 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 156.01716004844994,
            "unit": "iter/sec",
            "range": "stddev: 0.0007618200657308022",
            "extra": "mean: 6.409551357616417 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.276929405253256,
            "unit": "iter/sec",
            "range": "stddev: 0.02234095086050235",
            "extra": "mean: 30.981881437496472 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 159.18578856933865,
            "unit": "iter/sec",
            "range": "stddev: 0.0007092886255883347",
            "extra": "mean: 6.2819678124999 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.4407078500016,
            "unit": "iter/sec",
            "range": "stddev: 0.00012723976369613264",
            "extra": "mean: 5.972263333333672 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 136.88058431499178,
            "unit": "iter/sec",
            "range": "stddev: 0.011748484796086181",
            "extra": "mean: 7.3056380129031595 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1535879.2435356814,
            "unit": "iter/sec",
            "range": "stddev: 9.948935768539856e-8",
            "extra": "mean: 651.0928539524651 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 249.63414500773044,
            "unit": "iter/sec",
            "range": "stddev: 0.00034628566188749696",
            "extra": "mean: 4.005862258822939 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 243.1067120136619,
            "unit": "iter/sec",
            "range": "stddev: 0.00018618574827405332",
            "extra": "mean: 4.1134199533898625 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.11948899540118,
            "unit": "iter/sec",
            "range": "stddev: 0.0007680006790724491",
            "extra": "mean: 11.096378942528515 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5200772.392417058,
            "unit": "iter/sec",
            "range": "stddev: 1.1044600907678783e-8",
            "extra": "mean: 192.27913174240146 nsec\nrounds: 196117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 323.48331654037804,
            "unit": "iter/sec",
            "range": "stddev: 0.00007505084822339065",
            "extra": "mean: 3.091349534482646 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8626893492265967,
            "unit": "iter/sec",
            "range": "stddev: 0.0028281903858690125",
            "extra": "mean: 1.1591658120000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.50764934456302,
            "unit": "iter/sec",
            "range": "stddev: 0.00043140392127096833",
            "extra": "mean: 4.514516780612232 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5136.097026236952,
            "unit": "iter/sec",
            "range": "stddev: 0.00005389388692815101",
            "extra": "mean: 194.7003716813868 usec\nrounds: 2486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121042.99175492536,
            "unit": "iter/sec",
            "range": "stddev: 3.578822027423205e-7",
            "extra": "mean: 8.261527458150496 usec\nrounds: 36765"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 267.7183863667864,
            "unit": "iter/sec",
            "range": "stddev: 0.00001565629407885555",
            "extra": "mean: 3.735268292817044 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10243.884407801444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023280892821392095",
            "extra": "mean: 97.61921944750071 usec\nrounds: 4525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15307233919886437,
            "unit": "iter/sec",
            "range": "stddev: 0.07521648739228438",
            "extra": "mean: 6.532858942599989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.09391010162547,
            "unit": "iter/sec",
            "range": "stddev: 0.0006861274744250488",
            "extra": "mean: 12.331382205480258 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10794.321740748597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017279415107824548",
            "extra": "mean: 92.64130012217414 usec\nrounds: 5721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.536498814331374,
            "unit": "iter/sec",
            "range": "stddev: 0.0007393143906023462",
            "extra": "mean: 17.083358592590987 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.53282788845196,
            "unit": "iter/sec",
            "range": "stddev: 0.0006972809591869849",
            "extra": "mean: 11.16908762499817 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11886292.7459768,
            "unit": "iter/sec",
            "range": "stddev: 5.211754829785954e-9",
            "extra": "mean: 84.13052087561371 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.85506758503759,
            "unit": "iter/sec",
            "range": "stddev: 0.00008481237260210514",
            "extra": "mean: 11.382382684209645 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 254.85156625392864,
            "unit": "iter/sec",
            "range": "stddev: 0.00021379807482183936",
            "extra": "mean: 3.923852675104305 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5813628034714675,
            "unit": "iter/sec",
            "range": "stddev: 0.0031765960597282174",
            "extra": "mean: 1.7200962876000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6013.110431666632,
            "unit": "iter/sec",
            "range": "stddev: 0.000047610193403967164",
            "extra": "mean: 166.303282030833 usec\nrounds: 2560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1548425.7439233086,
            "unit": "iter/sec",
            "range": "stddev: 1.0531247608648182e-7",
            "extra": "mean: 645.817213982932 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2578658549612713,
            "unit": "iter/sec",
            "range": "stddev: 0.0029933044729446847",
            "extra": "mean: 442.8961081999944 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5728750163693301,
            "unit": "iter/sec",
            "range": "stddev: 0.0008808507131581275",
            "extra": "mean: 635.7784246000051 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.01634806551854,
            "unit": "iter/sec",
            "range": "stddev: 0.00008651180484895539",
            "extra": "mean: 7.091376380952536 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 158.1290055349768,
            "unit": "iter/sec",
            "range": "stddev: 0.0007724583170063567",
            "extra": "mean: 6.323950477123619 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56505.35942702835,
            "unit": "iter/sec",
            "range": "stddev: 8.047972032460408e-7",
            "extra": "mean: 17.697436316486247 usec\nrounds: 11934"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5111.930293550073,
            "unit": "iter/sec",
            "range": "stddev: 0.000056711506546745406",
            "extra": "mean: 195.62082082021738 usec\nrounds: 2171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4323642.024104326,
            "unit": "iter/sec",
            "range": "stddev: 1.5485430395827533e-8",
            "extra": "mean: 231.28649282796263 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 619.4967212313231,
            "unit": "iter/sec",
            "range": "stddev: 0.00011996305444737912",
            "extra": "mean: 1.6142135474298902 msec\nrounds: 506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 144.96315570814275,
            "unit": "iter/sec",
            "range": "stddev: 0.0008083580819387718",
            "extra": "mean: 6.898304573427749 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 967.0475226888286,
            "unit": "iter/sec",
            "range": "stddev: 0.000039092823964866854",
            "extra": "mean: 1.034075344321806 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4795027.692638624,
            "unit": "iter/sec",
            "range": "stddev: 5.746139635988718e-9",
            "extra": "mean: 208.54936907558374 nsec\nrounds: 48310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6052.763156660204,
            "unit": "iter/sec",
            "range": "stddev: 0.00004626317237182992",
            "extra": "mean: 165.2137997337038 usec\nrounds: 2252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 250.21772595774155,
            "unit": "iter/sec",
            "range": "stddev: 0.00021103056524512544",
            "extra": "mean: 3.9965194159301354 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2004459.8127466103,
            "unit": "iter/sec",
            "range": "stddev: 2.040781711808912e-8",
            "extra": "mean: 498.88752752288326 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 379234.1308716624,
            "unit": "iter/sec",
            "range": "stddev: 3.654806307621569e-7",
            "extra": "mean: 2.6368934613071855 usec\nrounds: 1774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 250.7498359083129,
            "unit": "iter/sec",
            "range": "stddev: 0.00023867962506026664",
            "extra": "mean: 3.9880385021095357 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 269.6915877030624,
            "unit": "iter/sec",
            "range": "stddev: 0.00007953058738423098",
            "extra": "mean: 3.7079391630896055 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 246.97494330661436,
            "unit": "iter/sec",
            "range": "stddev: 0.00023801899201673007",
            "extra": "mean: 4.0489937424887685 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.741126531570682,
            "unit": "iter/sec",
            "range": "stddev: 0.0008381834392172112",
            "extra": "mean: 40.41853141666607 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8648349461009208,
            "unit": "iter/sec",
            "range": "stddev: 0.004718141365836432",
            "extra": "mean: 1.1562900001999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18906.529448907644,
            "unit": "iter/sec",
            "range": "stddev: 0.00001782098555232552",
            "extra": "mean: 52.89178020230342 usec\nrounds: 5728"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.74506372126605,
            "unit": "iter/sec",
            "range": "stddev: 0.00006253155133340912",
            "extra": "mean: 8.281912064814923 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 511.9383001181418,
            "unit": "iter/sec",
            "range": "stddev: 0.000027460416860309392",
            "extra": "mean: 1.9533603947374645 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.295850633594084,
            "unit": "iter/sec",
            "range": "stddev: 0.0005916834112899826",
            "extra": "mean: 75.21143457142492 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.8375705369977,
            "unit": "iter/sec",
            "range": "stddev: 0.0001311116274971411",
            "extra": "mean: 10.656712383721894 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.026166033951402,
            "unit": "iter/sec",
            "range": "stddev: 0.0005346533299499373",
            "extra": "mean: 110.78901011111004 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.600347387308613,
            "unit": "iter/sec",
            "range": "stddev: 0.026889369255678114",
            "extra": "mean: 33.783387300000335 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.896967313106074,
            "unit": "iter/sec",
            "range": "stddev: 0.0002640167952843518",
            "extra": "mean: 18.21594250000146 msec\nrounds: 50"
          }
        ]
      }
    ]
  }
}