window.BENCHMARK_DATA = {
  "lastUpdate": 1680730624463,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "68d65c89098563e7a48073837ad8d73ec0f2bdba",
          "message": "fix(api): support filter on literal followed by aggregate",
          "timestamp": "2023-04-05T17:31:00-04:00",
          "tree_id": "39c3f5bc6b4750f058cb51234ba7cf34adb714b6",
          "url": "https://github.com/ibis-project/ibis/commit/68d65c89098563e7a48073837ad8d73ec0f2bdba"
        },
        "date": 1680730535714,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11171.298903679417,
            "unit": "iter/sec",
            "range": "stddev: 0.000019827122376494018",
            "extra": "mean: 89.51510550582766 usec\nrounds: 3469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 89.04904551791023,
            "unit": "iter/sec",
            "range": "stddev: 0.0009622110110300741",
            "extra": "mean: 11.229766632353991 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1844.9166216335136,
            "unit": "iter/sec",
            "range": "stddev: 0.00011522180638608863",
            "extra": "mean: 542.0299152135052 usec\nrounds: 1663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 209.66550814150278,
            "unit": "iter/sec",
            "range": "stddev: 0.0004760257991720135",
            "extra": "mean: 4.769501711865274 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.15213028467981,
            "unit": "iter/sec",
            "range": "stddev: 0.0007902558018487466",
            "extra": "mean: 9.984810080000557 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.678988648011201,
            "unit": "iter/sec",
            "range": "stddev: 0.012990098860394648",
            "extra": "mean: 1.4727786729999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 216.57967782722608,
            "unit": "iter/sec",
            "range": "stddev: 0.0004704789826234034",
            "extra": "mean: 4.617238376343593 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.85638729452111,
            "unit": "iter/sec",
            "range": "stddev: 0.0009054839414636318",
            "extra": "mean: 19.66321347619068 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 168.29272683908513,
            "unit": "iter/sec",
            "range": "stddev: 0.0002407454384752706",
            "extra": "mean: 5.942027435066523 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 86.42949573760906,
            "unit": "iter/sec",
            "range": "stddev: 0.0009989084933584662",
            "extra": "mean: 11.57012419736771 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.38213240123199,
            "unit": "iter/sec",
            "range": "stddev: 0.0009112440511221216",
            "extra": "mean: 26.053789548386373 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.568871193341272,
            "unit": "iter/sec",
            "range": "stddev: 0.0011355042122877964",
            "extra": "mean: 73.69809807692299 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5673158508922186,
            "unit": "iter/sec",
            "range": "stddev: 0.07066887850880896",
            "extra": "mean: 1.762686514799998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 459843.98294304026,
            "unit": "iter/sec",
            "range": "stddev: 0.000001938285725496076",
            "extra": "mean: 2.174650614323397 usec\nrounds: 1952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 184.74264558863086,
            "unit": "iter/sec",
            "range": "stddev: 0.004616529454421864",
            "extra": "mean: 5.412935366459537 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.113686677219111,
            "unit": "iter/sec",
            "range": "stddev: 0.01696919099589183",
            "extra": "mean: 473.107017600006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 99.2536432809369,
            "unit": "iter/sec",
            "range": "stddev: 0.0002688321596251821",
            "extra": "mean: 10.075196909089831 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1371.525516435479,
            "unit": "iter/sec",
            "range": "stddev: 0.003697720374939872",
            "extra": "mean: 729.1151261982689 usec\nrounds: 626"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4911193.773500072,
            "unit": "iter/sec",
            "range": "stddev: 4.2550888267476786e-7",
            "extra": "mean: 203.6164822889703 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 47.59049689191025,
            "unit": "iter/sec",
            "range": "stddev: 0.0006151421817219699",
            "extra": "mean: 21.012598424245212 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 234.738247729472,
            "unit": "iter/sec",
            "range": "stddev: 0.0001867014321392041",
            "extra": "mean: 4.260064176471431 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 67452.93012462454,
            "unit": "iter/sec",
            "range": "stddev: 0.000004348311420864979",
            "extra": "mean: 14.82515286070482 usec\nrounds: 11710"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1015.0338018024466,
            "unit": "iter/sec",
            "range": "stddev: 0.00012068526738665655",
            "extra": "mean: 985.1888658527919 usec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6709.852085804293,
            "unit": "iter/sec",
            "range": "stddev: 0.00008260680309697299",
            "extra": "mean: 149.03458186740826 usec\nrounds: 3695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 221.51223827064837,
            "unit": "iter/sec",
            "range": "stddev: 0.00038749756534266894",
            "extra": "mean: 4.514423256281573 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.777953169430855,
            "unit": "iter/sec",
            "range": "stddev: 0.008915960501987662",
            "extra": "mean: 209.2946424000047 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 81.32968843139166,
            "unit": "iter/sec",
            "range": "stddev: 0.0017075074468187708",
            "extra": "mean: 12.295632988236308 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 514.9682938741263,
            "unit": "iter/sec",
            "range": "stddev: 0.00574558665596822",
            "extra": "mean: 1.9418671244339363 msec\nrounds: 442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.10796396552264,
            "unit": "iter/sec",
            "range": "stddev: 0.0014228286795114284",
            "extra": "mean: 16.918193977774205 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.16225452736921,
            "unit": "iter/sec",
            "range": "stddev: 0.000818608581239261",
            "extra": "mean: 13.304550352941646 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 84.5149563054515,
            "unit": "iter/sec",
            "range": "stddev: 0.0009291853782577541",
            "extra": "mean: 11.83222524999988 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 87.13953749994394,
            "unit": "iter/sec",
            "range": "stddev: 0.001042726210442732",
            "extra": "mean: 11.475846999998632 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10974.914640223305,
            "unit": "iter/sec",
            "range": "stddev: 0.00004757049268500543",
            "extra": "mean: 91.11688179650872 usec\nrounds: 6235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.51234458593768,
            "unit": "iter/sec",
            "range": "stddev: 0.004694691167455429",
            "extra": "mean: 28.975139533332595 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 207.99969743870952,
            "unit": "iter/sec",
            "range": "stddev: 0.0004397943402790805",
            "extra": "mean: 4.807699301075504 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.8122357229674,
            "unit": "iter/sec",
            "range": "stddev: 0.000616802364795068",
            "extra": "mean: 11.653349800002388 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8941.726407154138,
            "unit": "iter/sec",
            "range": "stddev: 0.00005806651904408917",
            "extra": "mean: 111.83522671862511 usec\nrounds: 3361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 214.43174290920132,
            "unit": "iter/sec",
            "range": "stddev: 0.0004649316785742731",
            "extra": "mean: 4.663488653466006 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.64669748066319,
            "unit": "iter/sec",
            "range": "stddev: 0.0010219254756881793",
            "extra": "mean: 12.555448394364152 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.61746659075897,
            "unit": "iter/sec",
            "range": "stddev: 0.0003526053187430268",
            "extra": "mean: 6.867308046296288 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 138.42207211728604,
            "unit": "iter/sec",
            "range": "stddev: 0.0003719671566694129",
            "extra": "mean: 7.224281393163171 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1407.3627761580235,
            "unit": "iter/sec",
            "range": "stddev: 0.00013397867026964186",
            "extra": "mean: 710.5488484851872 usec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1991072594651897,
            "unit": "iter/sec",
            "range": "stddev: 0.02411716151817104",
            "extra": "mean: 833.9537535999966 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5793904932778885,
            "unit": "iter/sec",
            "range": "stddev: 0.05196300075899626",
            "extra": "mean: 1.7259516881999957 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 658.6590609341412,
            "unit": "iter/sec",
            "range": "stddev: 0.00014204172042589638",
            "extra": "mean: 1.5182361548048138 msec\nrounds: 562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.09941804306453,
            "unit": "iter/sec",
            "range": "stddev: 0.0010389845152972653",
            "extra": "mean: 12.330544708335525 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4380.756606229189,
            "unit": "iter/sec",
            "range": "stddev: 0.00006208198281995836",
            "extra": "mean: 228.27107047628633 usec\nrounds: 1575"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 88.66230761725805,
            "unit": "iter/sec",
            "range": "stddev: 0.0010555201159776599",
            "extra": "mean: 11.278749977012223 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11417815374378418,
            "unit": "iter/sec",
            "range": "stddev: 0.1889866950153011",
            "extra": "mean: 8.758242861799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1705.2653586436008,
            "unit": "iter/sec",
            "range": "stddev: 0.00012236197713040613",
            "extra": "mean: 586.4189962759921 usec\nrounds: 1074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 119.95248921808131,
            "unit": "iter/sec",
            "range": "stddev: 0.0006258128827853104",
            "extra": "mean: 8.33663399999925 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1796317.522304345,
            "unit": "iter/sec",
            "range": "stddev: 6.590229684685085e-7",
            "extra": "mean: 556.6944527252531 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6576887193123008,
            "unit": "iter/sec",
            "range": "stddev: 0.022284436568942897",
            "extra": "mean: 1.5204761319999989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 79.69689621329124,
            "unit": "iter/sec",
            "range": "stddev: 0.0014458580423742466",
            "extra": "mean: 12.547540086425945 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2358331.945284898,
            "unit": "iter/sec",
            "range": "stddev: 2.485792020424388e-7",
            "extra": "mean: 424.02851812247735 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1511.5071304095939,
            "unit": "iter/sec",
            "range": "stddev: 0.00008581452569453779",
            "extra": "mean: 661.5913215897409 usec\nrounds: 1107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140133.1642826827,
            "unit": "iter/sec",
            "range": "stddev: 0.000003827039630587654",
            "extra": "mean: 7.136069503024683 usec\nrounds: 39063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1819.497073985535,
            "unit": "iter/sec",
            "range": "stddev: 0.00010209035908866438",
            "extra": "mean: 549.6024227230772 usec\nrounds: 977"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1741.7629298722406,
            "unit": "iter/sec",
            "range": "stddev: 0.0001310606881876122",
            "extra": "mean: 574.1309467835273 usec\nrounds: 1710"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.626501079409184,
            "unit": "iter/sec",
            "range": "stddev: 0.001394868891711348",
            "extra": "mean: 44.19596280001201 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 442.8467397577567,
            "unit": "iter/sec",
            "range": "stddev: 0.0002179144003466078",
            "extra": "mean: 2.258117561274164 msec\nrounds: 408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 143.08289613887214,
            "unit": "iter/sec",
            "range": "stddev: 0.004800099240246414",
            "extra": "mean: 6.988955542453019 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1754.8167474037564,
            "unit": "iter/sec",
            "range": "stddev: 0.00012375337445815501",
            "extra": "mean: 569.8600731270063 usec\nrounds: 1135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 62.620730010008906,
            "unit": "iter/sec",
            "range": "stddev: 0.0007940467048490957",
            "extra": "mean: 15.969152704546342 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.66321241186477,
            "unit": "iter/sec",
            "range": "stddev: 0.0021357133339113374",
            "extra": "mean: 28.0400988125038 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 142.77682879338852,
            "unit": "iter/sec",
            "range": "stddev: 0.00041799941822869425",
            "extra": "mean: 7.0039376028381595 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.09238180994817,
            "unit": "iter/sec",
            "range": "stddev: 0.0011138718438905872",
            "extra": "mean: 11.482060534091104 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 697162.7529560606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012111785930285904",
            "extra": "mean: 1.4343852934768393 usec\nrounds: 23364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 219.20208431949186,
            "unit": "iter/sec",
            "range": "stddev: 0.0003844809604735029",
            "extra": "mean: 4.562000416667928 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 79.74303636261978,
            "unit": "iter/sec",
            "range": "stddev: 0.0011707624324091062",
            "extra": "mean: 12.540279949369454 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1562948.8377759373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010637255039757038",
            "extra": "mean: 639.8162088421213 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5335616.462203764,
            "unit": "iter/sec",
            "range": "stddev: 2.808812083417551e-7",
            "extra": "mean: 187.41976809684894 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 68.8537517173862,
            "unit": "iter/sec",
            "range": "stddev: 0.02261650526120858",
            "extra": "mean: 14.523536845233242 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 265.87063984261084,
            "unit": "iter/sec",
            "range": "stddev: 0.0003962311010264109",
            "extra": "mean: 3.761227642856603 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 83.11076460213263,
            "unit": "iter/sec",
            "range": "stddev: 0.0010943688377814183",
            "extra": "mean: 12.032135726186544 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1602.969507017283,
            "unit": "iter/sec",
            "range": "stddev: 0.00014770708926044296",
            "extra": "mean: 623.8421851584344 usec\nrounds: 1415"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 196.98881737519994,
            "unit": "iter/sec",
            "range": "stddev: 0.0007275855433120219",
            "extra": "mean: 5.076430293478658 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 83.54972804072311,
            "unit": "iter/sec",
            "range": "stddev: 0.0014264633092669796",
            "extra": "mean: 11.968919869045992 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10326402.772014622,
            "unit": "iter/sec",
            "range": "stddev: 9.814112887459601e-8",
            "extra": "mean: 96.83914351189433 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 98.33609094461724,
            "unit": "iter/sec",
            "range": "stddev: 0.0008685658692388674",
            "extra": "mean: 10.16920634523899 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.664153800122484,
            "unit": "iter/sec",
            "range": "stddev: 0.0028458532652050972",
            "extra": "mean: 26.550443833328547 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.310349645550696,
            "unit": "iter/sec",
            "range": "stddev: 0.008865373448460494",
            "extra": "mean: 120.33188044445195 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2379244.2874896233,
            "unit": "iter/sec",
            "range": "stddev: 2.3094498149075595e-7",
            "extra": "mean: 420.30152399976856 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 77.46955748941454,
            "unit": "iter/sec",
            "range": "stddev: 0.0014309087710937328",
            "extra": "mean: 12.908296270269007 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.10815341658852,
            "unit": "iter/sec",
            "range": "stddev: 0.00041646057446662597",
            "extra": "mean: 9.698554060605602 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 190.3975695881943,
            "unit": "iter/sec",
            "range": "stddev: 0.0009204158311567882",
            "extra": "mean: 5.252167883040066 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.63006976395228,
            "unit": "iter/sec",
            "range": "stddev: 0.0010278127846662056",
            "extra": "mean: 11.67814066666766 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5863067.649182177,
            "unit": "iter/sec",
            "range": "stddev: 1.4796263179841577e-7",
            "extra": "mean: 170.5591782042686 nsec\nrounds: 59881"
          }
        ]
      }
    ]
  }
}