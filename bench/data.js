window.BENCHMARK_DATA = {
  "lastUpdate": 1680946519823,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7e330eb7b6dbaa29c4b54f2cf4d2d3e080ead540",
          "message": "chore(deps): update dependency mkdocs-material to >=8.2.1,<9.1.7",
          "timestamp": "2023-04-08T05:26:52-04:00",
          "tree_id": "30fcce1d5563f823d8c2634f7271e5a110496ae0",
          "url": "https://github.com/ibis-project/ibis/commit/7e330eb7b6dbaa29c4b54f2cf4d2d3e080ead540"
        },
        "date": 1680946420750,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 428393.7174663562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011041278540240578",
            "extra": "mean: 2.334301272937166 usec\nrounds: 1414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 213.45577776394396,
            "unit": "iter/sec",
            "range": "stddev: 0.0012077113682633024",
            "extra": "mean: 4.684811113924861 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 135.36881827419526,
            "unit": "iter/sec",
            "range": "stddev: 0.006612942884619399",
            "extra": "mean: 7.387225601500471 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 194.0279171276245,
            "unit": "iter/sec",
            "range": "stddev: 0.0010097420549668508",
            "extra": "mean: 5.15389751538814 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.125913591247319,
            "unit": "iter/sec",
            "range": "stddev: 0.0030363837673467063",
            "extra": "mean: 242.3705630000086 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 628091.7318645974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022323775069772506",
            "extra": "mean: 1.5921241265687887 usec\nrounds: 20326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1424.5587770158666,
            "unit": "iter/sec",
            "range": "stddev: 0.0005790867698527855",
            "extra": "mean: 701.971737589359 usec\nrounds: 564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.515195973607123,
            "unit": "iter/sec",
            "range": "stddev: 0.015817383866654412",
            "extra": "mean: 1.941008958200007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 75.03055644095016,
            "unit": "iter/sec",
            "range": "stddev: 0.0014811068997487842",
            "extra": "mean: 13.32790328946861 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 188.66474312878486,
            "unit": "iter/sec",
            "range": "stddev: 0.0010046829156286434",
            "extra": "mean: 5.3004073968255305 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 44.549712874099704,
            "unit": "iter/sec",
            "range": "stddev: 0.0030675141481668992",
            "extra": "mean: 22.446833783779102 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.63442164263758,
            "unit": "iter/sec",
            "range": "stddev: 0.004005318916651344",
            "extra": "mean: 37.54539946154322 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 85.50705763313574,
            "unit": "iter/sec",
            "range": "stddev: 0.0006438737984700497",
            "extra": "mean: 11.694941068963638 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 117047.6615560894,
            "unit": "iter/sec",
            "range": "stddev: 0.000019631327387977553",
            "extra": "mean: 8.54352822350747 usec\nrounds: 23810"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.649661364731598,
            "unit": "iter/sec",
            "range": "stddev: 0.0017755920688251002",
            "extra": "mean: 85.83940499999585 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6200046262909971,
            "unit": "iter/sec",
            "range": "stddev: 0.021244121501497588",
            "extra": "mean: 1.6128911908000076 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 71.86654708004991,
            "unit": "iter/sec",
            "range": "stddev: 0.0012619355648024507",
            "extra": "mean: 13.914679925920625 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.08298382259978,
            "unit": "iter/sec",
            "range": "stddev: 0.007596276099453917",
            "extra": "mean: 58.5377830000084 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 63.78919453110104,
            "unit": "iter/sec",
            "range": "stddev: 0.01592071875385047",
            "extra": "mean: 15.67663626027509 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1608.6469229353017,
            "unit": "iter/sec",
            "range": "stddev: 0.00016863122251135706",
            "extra": "mean: 621.6404518247532 usec\nrounds: 301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 71.6411660844097,
            "unit": "iter/sec",
            "range": "stddev: 0.0015953648705544412",
            "extra": "mean: 13.958455098591932 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 123.69353067112799,
            "unit": "iter/sec",
            "range": "stddev: 0.0006877674371491982",
            "extra": "mean: 8.084497180849052 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 190.3519041061432,
            "unit": "iter/sec",
            "range": "stddev: 0.0009072948921157677",
            "extra": "mean: 5.253427879777784 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1564711.5096960885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011729076224529118",
            "extra": "mean: 639.0954459037811 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 73.48367553104895,
            "unit": "iter/sec",
            "range": "stddev: 0.0013162101523374352",
            "extra": "mean: 13.608464638890736 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 40.77563167352187,
            "unit": "iter/sec",
            "range": "stddev: 0.0013098612319218288",
            "extra": "mean: 24.524451466667564 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.517780576600614,
            "unit": "iter/sec",
            "range": "stddev: 0.0014329759281501088",
            "extra": "mean: 18.34263958333635 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0824661324237002,
            "unit": "iter/sec",
            "range": "stddev: 0.007671287372542524",
            "extra": "mean: 923.8164317999917 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 103.43828515047036,
            "unit": "iter/sec",
            "range": "stddev: 0.0008208601013706407",
            "extra": "mean: 9.667600333332214 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1056072134186936,
            "unit": "iter/sec",
            "range": "stddev: 0.12464812697349202",
            "extra": "mean: 9.469050149400015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 196.37905563203975,
            "unit": "iter/sec",
            "range": "stddev: 0.000874260355248005",
            "extra": "mean: 5.092192732985357 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5068956.484027102,
            "unit": "iter/sec",
            "range": "stddev: 6.513816855681627e-7",
            "extra": "mean: 197.2792631283894 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 73.41987012362492,
            "unit": "iter/sec",
            "range": "stddev: 0.0023624535403810147",
            "extra": "mean: 13.620291050858475 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9151333.348126523,
            "unit": "iter/sec",
            "range": "stddev: 2.2841003762231814e-7",
            "extra": "mean: 109.27369400271407 nsec\nrounds: 36765"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 75.13424809771344,
            "unit": "iter/sec",
            "range": "stddev: 0.0013530466473294556",
            "extra": "mean: 13.309509648642283 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9788.537456817401,
            "unit": "iter/sec",
            "range": "stddev: 0.000041122077283941654",
            "extra": "mean: 102.16030785105004 usec\nrounds: 3859"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.09185958650794,
            "unit": "iter/sec",
            "range": "stddev: 0.001728743516975235",
            "extra": "mean: 30.218912218753502 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 193.24465758686156,
            "unit": "iter/sec",
            "range": "stddev: 0.0007831803543868645",
            "extra": "mean: 5.1747873006554395 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 118.58596389001072,
            "unit": "iter/sec",
            "range": "stddev: 0.0013022450421622698",
            "extra": "mean: 8.43270120001307 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.114407124234974,
            "unit": "iter/sec",
            "range": "stddev: 0.007166460442401977",
            "extra": "mean: 140.55985024999984 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.9656617634914,
            "unit": "iter/sec",
            "range": "stddev: 0.001686629413369033",
            "extra": "mean: 14.713312194028582 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 546.01386789977,
            "unit": "iter/sec",
            "range": "stddev: 0.000299340952455081",
            "extra": "mean: 1.8314553142147787 msec\nrounds: 401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.824650687347,
            "unit": "iter/sec",
            "range": "stddev: 0.0014585383134738854",
            "extra": "mean: 23.90934493333437 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 81.11136234310163,
            "unit": "iter/sec",
            "range": "stddev: 0.0016039541315127283",
            "extra": "mean: 12.328728936520546 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8753833220215919,
            "unit": "iter/sec",
            "range": "stddev: 0.008519518296497712",
            "extra": "mean: 533.224321800003 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9930.829800151772,
            "unit": "iter/sec",
            "range": "stddev: 0.00008229973360303244",
            "extra": "mean: 100.69651984013632 usec\nrounds: 4234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1554.3629105942807,
            "unit": "iter/sec",
            "range": "stddev: 0.00036224203217282845",
            "extra": "mean: 643.3503998224387 usec\nrounds: 1118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1468.991642572275,
            "unit": "iter/sec",
            "range": "stddev: 0.0004711641985053244",
            "extra": "mean: 680.739066866951 usec\nrounds: 1331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 379.24557555761595,
            "unit": "iter/sec",
            "range": "stddev: 0.0007018914558480741",
            "extra": "mean: 2.636813886436699 msec\nrounds: 317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 157.74404330119216,
            "unit": "iter/sec",
            "range": "stddev: 0.005087489475624841",
            "extra": "mean: 6.339383593018643 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 505.848763983886,
            "unit": "iter/sec",
            "range": "stddev: 0.0003279570054376267",
            "extra": "mean: 1.9768754442026382 msec\nrounds: 457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1326.9671462488682,
            "unit": "iter/sec",
            "range": "stddev: 0.00019444263258200264",
            "extra": "mean: 753.5981601555442 usec\nrounds: 1280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 73.51895310386894,
            "unit": "iter/sec",
            "range": "stddev: 0.0018075716094257087",
            "extra": "mean: 13.601934709097144 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6221993205640535,
            "unit": "iter/sec",
            "range": "stddev: 0.016961183828426898",
            "extra": "mean: 1.6072020121999686 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1534.8245204450268,
            "unit": "iter/sec",
            "range": "stddev: 0.0002104444022947404",
            "extra": "mean: 651.540281432334 usec\nrounds: 1034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.19694801885916,
            "unit": "iter/sec",
            "range": "stddev: 0.0012728967266253432",
            "extra": "mean: 14.45150441790376 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 185.95240960601564,
            "unit": "iter/sec",
            "range": "stddev: 0.0006336237255193285",
            "extra": "mean: 5.3777200420190185 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1339.70062298774,
            "unit": "iter/sec",
            "range": "stddev: 0.004558473779963762",
            "extra": "mean: 746.4354220944117 usec\nrounds: 1566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 88.50563047530919,
            "unit": "iter/sec",
            "range": "stddev: 0.0008156168502980716",
            "extra": "mean: 11.29871619047982 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 75.69408341924725,
            "unit": "iter/sec",
            "range": "stddev: 0.0010174764531350627",
            "extra": "mean: 13.21107218461573 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1538591.771342466,
            "unit": "iter/sec",
            "range": "stddev: 0.000003128981710765605",
            "extra": "mean: 649.9449812652196 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1324499.18958837,
            "unit": "iter/sec",
            "range": "stddev: 0.00002024881675887001",
            "extra": "mean: 755.0023494622006 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.24194874206665,
            "unit": "iter/sec",
            "range": "stddev: 0.0013327902393422343",
            "extra": "mean: 31.015495000005444 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 780.3971499059586,
            "unit": "iter/sec",
            "range": "stddev: 0.0008763416511542974",
            "extra": "mean: 1.2813988366314568 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1546.206590571186,
            "unit": "iter/sec",
            "range": "stddev: 0.00017462839948797462",
            "extra": "mean: 646.7441065754278 usec\nrounds: 882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 122.3135760982582,
            "unit": "iter/sec",
            "range": "stddev: 0.000459717636391193",
            "extra": "mean: 8.175707324562808 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 2827330.713168553,
            "unit": "iter/sec",
            "range": "stddev: 3.555460706399528e-7",
            "extra": "mean: 353.69049518770754 nsec\nrounds: 31153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4232535.541876068,
            "unit": "iter/sec",
            "range": "stddev: 7.462778628937343e-7",
            "extra": "mean: 236.26499768435133 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 75.15522876026485,
            "unit": "iter/sec",
            "range": "stddev: 0.0015488043655433694",
            "extra": "mean: 13.305794107684331 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 70.53664569907228,
            "unit": "iter/sec",
            "range": "stddev: 0.0008121426517914275",
            "extra": "mean: 14.177027984379365 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 70.32583092056879,
            "unit": "iter/sec",
            "range": "stddev: 0.0018481856876525517",
            "extra": "mean: 14.21952626666401 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.80831687323841,
            "unit": "iter/sec",
            "range": "stddev: 0.0008270336291549974",
            "extra": "mean: 11.38844286747481 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 72.61098930209278,
            "unit": "iter/sec",
            "range": "stddev: 0.0014977186678006322",
            "extra": "mean: 13.772020042855665 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 166.71540943834214,
            "unit": "iter/sec",
            "range": "stddev: 0.0012213975471434173",
            "extra": "mean: 5.998245773254926 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57133.68981118577,
            "unit": "iter/sec",
            "range": "stddev: 0.000033768942510616156",
            "extra": "mean: 17.50280794579834 usec\nrounds: 11075"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.386080339846785,
            "unit": "iter/sec",
            "range": "stddev: 0.001563466725589927",
            "extra": "mean: 30.877463080014422 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8129.253077970581,
            "unit": "iter/sec",
            "range": "stddev: 0.0001421836613099691",
            "extra": "mean: 123.01253145998055 usec\nrounds: 3735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3066.754306838641,
            "unit": "iter/sec",
            "range": "stddev: 0.0001650341595738506",
            "extra": "mean: 326.0776377716572 usec\nrounds: 1938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 131.52246396725891,
            "unit": "iter/sec",
            "range": "stddev: 0.004240934241764699",
            "extra": "mean: 7.603263882350463 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.47658377563503296,
            "unit": "iter/sec",
            "range": "stddev: 0.1327908130266149",
            "extra": "mean: 2.098266980800031 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 68.93238324446746,
            "unit": "iter/sec",
            "range": "stddev: 0.0015948024937771507",
            "extra": "mean: 14.506969771428299 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 205.87872408450977,
            "unit": "iter/sec",
            "range": "stddev: 0.0007733525967584115",
            "extra": "mean: 4.857228470045874 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1473.5702628964068,
            "unit": "iter/sec",
            "range": "stddev: 0.00035655041671891075",
            "extra": "mean: 678.6239008613197 usec\nrounds: 1160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 178.60601420623195,
            "unit": "iter/sec",
            "range": "stddev: 0.000998496770974353",
            "extra": "mean: 5.5989156045178 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 52.28913640051858,
            "unit": "iter/sec",
            "range": "stddev: 0.026471806601349443",
            "extra": "mean: 19.1244313606618 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5907.7292956589845,
            "unit": "iter/sec",
            "range": "stddev: 0.00011180840059119033",
            "extra": "mean: 169.26977353799924 usec\nrounds: 3537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 75.12154717547263,
            "unit": "iter/sec",
            "range": "stddev: 0.0015290610496321718",
            "extra": "mean: 13.311759909099722 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1465467.7435044863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028675693490513103",
            "extra": "mean: 682.3759884394472 nsec\nrounds: 129871"
          }
        ]
      }
    ]
  }
}