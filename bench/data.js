window.BENCHMARK_DATA = {
  "lastUpdate": 1681000888258,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "b0d4cf584a6da6f4ec06b66d63a2e01461dedd92",
          "message": "chore(flake/nixpkgs): `cd07e025` -> `3bf7fcf1`",
          "timestamp": "2023-04-09T00:36:10Z",
          "tree_id": "8e0b33ceeecff60aa742bad5aa70cfa533726fd0",
          "url": "https://github.com/ibis-project/ibis/commit/b0d4cf584a6da6f4ec06b66d63a2e01461dedd92"
        },
        "date": 1681000801606,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5877340.823955328,
            "unit": "iter/sec",
            "range": "stddev: 1.8349119076406848e-8",
            "extra": "mean: 170.14497371425176 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.374298271430728,
            "unit": "iter/sec",
            "range": "stddev: 0.0020651240551316954",
            "extra": "mean: 42.78203299999177 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 276.9382149624222,
            "unit": "iter/sec",
            "range": "stddev: 0.0002941432427124977",
            "extra": "mean: 3.610913719999568 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.38074789413028,
            "unit": "iter/sec",
            "range": "stddev: 0.00003896974598970268",
            "extra": "mean: 5.171145581397108 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.52468318437318,
            "unit": "iter/sec",
            "range": "stddev: 0.00022180844561217687",
            "extra": "mean: 64.41355280000684 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 727451.113636981,
            "unit": "iter/sec",
            "range": "stddev: 1.6893637029360803e-7",
            "extra": "mean: 1.3746628209837735 usec\nrounds: 22884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 370.22705773265284,
            "unit": "iter/sec",
            "range": "stddev: 0.000059492984875697034",
            "extra": "mean: 2.7010451535449813 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2325.0075503087946,
            "unit": "iter/sec",
            "range": "stddev: 0.000083174921887122",
            "extra": "mean: 430.10613013587226 usec\nrounds: 438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 88.59795967024525,
            "unit": "iter/sec",
            "range": "stddev: 0.010352167893550831",
            "extra": "mean: 11.2869416375041 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6751290463128199,
            "unit": "iter/sec",
            "range": "stddev: 0.0018766874510365435",
            "extra": "mean: 1.481198306400006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 730.7012424525277,
            "unit": "iter/sec",
            "range": "stddev: 0.000011841023259237818",
            "extra": "mean: 1.3685483777796754 msec\nrounds: 585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.4772354062875,
            "unit": "iter/sec",
            "range": "stddev: 0.009888290641337645",
            "extra": "mean: 8.231995045453935 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 252.10097440665976,
            "unit": "iter/sec",
            "range": "stddev: 0.00020782810122918724",
            "extra": "mean: 3.9666645571425567 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.14510575718309,
            "unit": "iter/sec",
            "range": "stddev: 0.0001642655956162399",
            "extra": "mean: 8.609919406252331 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.72047733331772,
            "unit": "iter/sec",
            "range": "stddev: 0.0001220814879912449",
            "extra": "mean: 6.107971441862492 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.15958241354743,
            "unit": "iter/sec",
            "range": "stddev: 0.00022013019663407208",
            "extra": "mean: 10.62026800000042 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.33564284048238,
            "unit": "iter/sec",
            "range": "stddev: 0.00011679351939700118",
            "extra": "mean: 13.635934196079411 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2099.9609407276675,
            "unit": "iter/sec",
            "range": "stddev: 0.000059056897570869577",
            "extra": "mean: 476.19933333306915 usec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8059256300903305,
            "unit": "iter/sec",
            "range": "stddev: 0.0022886504051147947",
            "extra": "mean: 1.2408092789999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11624.164037039127,
            "unit": "iter/sec",
            "range": "stddev: 0.000007380271032509889",
            "extra": "mean: 86.02769169581651 usec\nrounds: 2517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11547.829506364797,
            "unit": "iter/sec",
            "range": "stddev: 0.000011650424836614337",
            "extra": "mean: 86.59635990025934 usec\nrounds: 4429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.91290367187508,
            "unit": "iter/sec",
            "range": "stddev: 0.0009798784305806328",
            "extra": "mean: 25.698416351354577 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1864736.5470779573,
            "unit": "iter/sec",
            "range": "stddev: 1.3093556682915334e-7",
            "extra": "mean: 536.2687836879694 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.90078217802767,
            "unit": "iter/sec",
            "range": "stddev: 0.00031249356631858887",
            "extra": "mean: 3.7467106384610815 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5890772.261895683,
            "unit": "iter/sec",
            "range": "stddev: 4.173669087883853e-8",
            "extra": "mean: 169.75702939086037 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2547607.5223429627,
            "unit": "iter/sec",
            "range": "stddev: 1.7689957152816266e-8",
            "extra": "mean: 392.52514024607854 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.74523398816002,
            "unit": "iter/sec",
            "range": "stddev: 0.0008414233332841067",
            "extra": "mean: 9.92602786666339 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.861797722280116,
            "unit": "iter/sec",
            "range": "stddev: 0.0002433349033328195",
            "extra": "mean: 17.901321489357592 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.89090775311894,
            "unit": "iter/sec",
            "range": "stddev: 0.0002734205215355822",
            "extra": "mean: 3.775139012819611 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.9432494889325,
            "unit": "iter/sec",
            "range": "stddev: 0.00013803320572756804",
            "extra": "mean: 6.581404592593235 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13050392.768816246,
            "unit": "iter/sec",
            "range": "stddev: 3.850358998044755e-9",
            "extra": "mean: 76.62604625885908 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 93.17936136500437,
            "unit": "iter/sec",
            "range": "stddev: 0.0007607413124438577",
            "extra": "mean: 10.731990275000669 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 91.96550567010584,
            "unit": "iter/sec",
            "range": "stddev: 0.0007893048614434838",
            "extra": "mean: 10.873642163042641 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 265.84445285566176,
            "unit": "iter/sec",
            "range": "stddev: 0.0002930076533670062",
            "extra": "mean: 3.7615981422901554 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1787872141905106,
            "unit": "iter/sec",
            "range": "stddev: 0.07171128577874729",
            "extra": "mean: 5.593241130400008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9117688044064902,
            "unit": "iter/sec",
            "range": "stddev: 0.005386913807265139",
            "extra": "mean: 1.0967692633999946 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.1286574848485,
            "unit": "iter/sec",
            "range": "stddev: 0.00001865375220363662",
            "extra": "mean: 1.4511078434174485 msec\nrounds: 562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.48167721494578,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666030475082726",
            "extra": "mean: 95.40457881817846 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.92095117663385,
            "unit": "iter/sec",
            "range": "stddev: 0.00006551462270032141",
            "extra": "mean: 9.015429361109337 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 97.67050933941526,
            "unit": "iter/sec",
            "range": "stddev: 0.000695717323063067",
            "extra": "mean: 10.23850501818205 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.25766664314036,
            "unit": "iter/sec",
            "range": "stddev: 0.0005929041243632116",
            "extra": "mean: 18.776639365382355 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1829595.1350994192,
            "unit": "iter/sec",
            "range": "stddev: 1.242310991153412e-7",
            "extra": "mean: 546.5690090751474 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7945.290181362922,
            "unit": "iter/sec",
            "range": "stddev: 0.00005259590231703525",
            "extra": "mean: 125.86072719479475 usec\nrounds: 3530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 171.96524457463576,
            "unit": "iter/sec",
            "range": "stddev: 0.00362674003935198",
            "extra": "mean: 5.815128530614123 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1771.983044314936,
            "unit": "iter/sec",
            "range": "stddev: 0.000005700325473815637",
            "extra": "mean: 564.3394857576691 usec\nrounds: 1299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.568270076422519,
            "unit": "iter/sec",
            "range": "stddev: 0.00030878285562117305",
            "extra": "mean: 179.58899016666882 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 271.65547870017934,
            "unit": "iter/sec",
            "range": "stddev: 0.00025659406206942655",
            "extra": "mean: 3.6811331940913283 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5035586195588717,
            "unit": "iter/sec",
            "range": "stddev: 0.0036182348928860985",
            "extra": "mean: 399.4314302000248 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.90616643321566,
            "unit": "iter/sec",
            "range": "stddev: 0.0008744489884310461",
            "extra": "mean: 10.648927945655004 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7316203.553448435,
            "unit": "iter/sec",
            "range": "stddev: 5.3368500470156244e-9",
            "extra": "mean: 136.68291111563587 nsec\nrounds: 52911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2314.555146119989,
            "unit": "iter/sec",
            "range": "stddev: 0.00010422326211370835",
            "extra": "mean: 432.04846584725055 usec\nrounds: 732"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 97.01029281792216,
            "unit": "iter/sec",
            "range": "stddev: 0.0007443533389697573",
            "extra": "mean: 10.308184533334952 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 82.84760363256264,
            "unit": "iter/sec",
            "range": "stddev: 0.019843485926830683",
            "extra": "mean: 12.070355160000759 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.7084303800286,
            "unit": "iter/sec",
            "range": "stddev: 0.00012910109562005526",
            "extra": "mean: 3.416368974073218 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.36230728711051,
            "unit": "iter/sec",
            "range": "stddev: 0.0009063038108240831",
            "extra": "mean: 10.597451765961596 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.22824680445872,
            "unit": "iter/sec",
            "range": "stddev: 0.0008917826924455318",
            "extra": "mean: 10.180371049385446 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 269.78991198908517,
            "unit": "iter/sec",
            "range": "stddev: 0.0003483488628287538",
            "extra": "mean: 3.7065878135593775 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.1275328585491,
            "unit": "iter/sec",
            "range": "stddev: 0.00014152554545502168",
            "extra": "mean: 10.737962977274341 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 270.3596180911797,
            "unit": "iter/sec",
            "range": "stddev: 0.0002980873415899337",
            "extra": "mean: 3.698777232562692 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.30597184267575,
            "unit": "iter/sec",
            "range": "stddev: 0.0008788199387866667",
            "extra": "mean: 10.069887857139523 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.79017335726086,
            "unit": "iter/sec",
            "range": "stddev: 0.00020632327332915874",
            "extra": "mean: 21.372008869567924 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 156.42577858042918,
            "unit": "iter/sec",
            "range": "stddev: 0.00009331916840691395",
            "extra": "mean: 6.3928081999977495 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 93.67414321824297,
            "unit": "iter/sec",
            "range": "stddev: 0.0007496488024507284",
            "extra": "mean: 10.675304471909497 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68748.55757584122,
            "unit": "iter/sec",
            "range": "stddev: 5.112709184834387e-7",
            "extra": "mean: 14.545759725894348 usec\nrounds: 12107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.00812575535732,
            "unit": "iter/sec",
            "range": "stddev: 0.0008600860249019011",
            "extra": "mean: 23.251420108104448 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 92.69675722520473,
            "unit": "iter/sec",
            "range": "stddev: 0.0009629711526224475",
            "extra": "mean: 10.787863890109143 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.95250031988669,
            "unit": "iter/sec",
            "range": "stddev: 0.000901829482519109",
            "extra": "mean: 18.53482218749747 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6762585095271758,
            "unit": "iter/sec",
            "range": "stddev: 0.0018603844371797287",
            "extra": "mean: 596.566695599995 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2383.3108200737233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000796536699364254",
            "extra": "mean: 419.58438302607414 usec\nrounds: 1355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 477651.6081189643,
            "unit": "iter/sec",
            "range": "stddev: 9.622405945133381e-7",
            "extra": "mean: 2.0935761190841404 usec\nrounds: 670"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1193.7970379672395,
            "unit": "iter/sec",
            "range": "stddev: 0.00001252669464657505",
            "extra": "mean: 837.663328184135 usec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 95.79161326552651,
            "unit": "iter/sec",
            "range": "stddev: 0.0007331325209963168",
            "extra": "mean: 10.439327263735311 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 246.42494907092467,
            "unit": "iter/sec",
            "range": "stddev: 0.004248711859559491",
            "extra": "mean: 4.0580306651993485 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.08307073967423,
            "unit": "iter/sec",
            "range": "stddev: 0.0008234288615900157",
            "extra": "mean: 9.991699821052624 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.99940244675724,
            "unit": "iter/sec",
            "range": "stddev: 0.031269330313828156",
            "extra": "mean: 27.778238860464153 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.1118349951017,
            "unit": "iter/sec",
            "range": "stddev: 0.00005110262160349041",
            "extra": "mean: 1.834485945455552 msec\nrounds: 440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.08386462114555,
            "unit": "iter/sec",
            "range": "stddev: 0.0007589310037578454",
            "extra": "mean: 10.62881508988575 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13313.279798387775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019233270764973894",
            "extra": "mean: 75.1129710442275 usec\nrounds: 6907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138895.48642126555,
            "unit": "iter/sec",
            "range": "stddev: 3.524369085835147e-7",
            "extra": "mean: 7.19965800016735 usec\nrounds: 38462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2268.8862619201773,
            "unit": "iter/sec",
            "range": "stddev: 0.00010434270066026041",
            "extra": "mean: 440.7448785703748 usec\nrounds: 1400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 85.62009426108837,
            "unit": "iter/sec",
            "range": "stddev: 0.0007698070608654957",
            "extra": "mean: 11.679501273972184 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 104.76577772961964,
            "unit": "iter/sec",
            "range": "stddev: 0.00004702648900531204",
            "extra": "mean: 9.545101670326048 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4657.908129812851,
            "unit": "iter/sec",
            "range": "stddev: 0.00002349374986682088",
            "extra": "mean: 214.68864823664495 usec\nrounds: 2098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1688109.332924599,
            "unit": "iter/sec",
            "range": "stddev: 1.0844126723619401e-7",
            "extra": "mean: 592.3786928347406 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2263.9635934376224,
            "unit": "iter/sec",
            "range": "stddev: 0.00008135516925608516",
            "extra": "mean: 441.70321594332313 usec\nrounds: 1292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2317.863696952122,
            "unit": "iter/sec",
            "range": "stddev: 0.00008466031329552875",
            "extra": "mean: 431.4317538666969 usec\nrounds: 1552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9092542711687815,
            "unit": "iter/sec",
            "range": "stddev: 0.00480219076820671",
            "extra": "mean: 1.0998023674000137 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2339.8797158100865,
            "unit": "iter/sec",
            "range": "stddev: 0.00007841547774911891",
            "extra": "mean: 427.3723957873584 usec\nrounds: 1377"
          }
        ]
      }
    ]
  }
}