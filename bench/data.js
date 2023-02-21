window.BENCHMARK_DATA = {
  "lastUpdate": 1677003083462,
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
          "id": "79cb44580b05ef37e7946c86e4133bb826c6e7be",
          "message": "feat(snowflake): support cross-database table access",
          "timestamp": "2023-02-21T13:06:00-05:00",
          "tree_id": "c1c5b35d050e1e3db5e0f24d3d15aeb9edb16093",
          "url": "https://github.com/ibis-project/ibis/commit/79cb44580b05ef37e7946c86e4133bb826c6e7be"
        },
        "date": 1677003007622,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3816.0367068906053,
            "unit": "iter/sec",
            "range": "stddev: 0.00007797019825473195",
            "extra": "mean: 262.0519866054494 usec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.372398417995626,
            "unit": "iter/sec",
            "range": "stddev: 0.0002217691811783354",
            "extra": "mean: 74.78090083333673 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10543.796823261142,
            "unit": "iter/sec",
            "range": "stddev: 0.000003007037219558746",
            "extra": "mean: 94.84249523794458 usec\nrounds: 1680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 86.04458147331098,
            "unit": "iter/sec",
            "range": "stddev: 0.0006463545961266308",
            "extra": "mean: 11.621882318181495 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5707.352096686776,
            "unit": "iter/sec",
            "range": "stddev: 0.00003105802934989577",
            "extra": "mean: 175.21260000421535 usec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1459297.2574164153,
            "unit": "iter/sec",
            "range": "stddev: 1.934993484585174e-7",
            "extra": "mean: 685.2613440598325 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 70.6727957619231,
            "unit": "iter/sec",
            "range": "stddev: 0.0007472352720361275",
            "extra": "mean: 14.149716156252268 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 242.06443160049693,
            "unit": "iter/sec",
            "range": "stddev: 0.00027661487569867634",
            "extra": "mean: 4.131131506550289 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.95111257927776,
            "unit": "iter/sec",
            "range": "stddev: 0.0002426667755281502",
            "extra": "mean: 12.05529340000453 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7360888145024573,
            "unit": "iter/sec",
            "range": "stddev: 0.002935583187886516",
            "extra": "mean: 1.3585317156000087 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 74.76737853970754,
            "unit": "iter/sec",
            "range": "stddev: 0.011818376199628979",
            "extra": "mean: 13.374816925926044 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 253.70128651701788,
            "unit": "iter/sec",
            "range": "stddev: 0.0002783667344477482",
            "extra": "mean: 3.9416433938064466 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1443622.3367776314,
            "unit": "iter/sec",
            "range": "stddev: 1.2770225540854454e-7",
            "extra": "mean: 692.7019446319603 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10654.242035389487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019639147273948246",
            "extra": "mean: 93.85932820733437 usec\nrounds: 4552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1449849.252547091,
            "unit": "iter/sec",
            "range": "stddev: 1.5384210267546717e-7",
            "extra": "mean: 689.7268790139408 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5616379963225215,
            "unit": "iter/sec",
            "range": "stddev: 0.002954400570100228",
            "extra": "mean: 640.3532716000029 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 263.3773486648572,
            "unit": "iter/sec",
            "range": "stddev: 0.00011972150532019132",
            "extra": "mean: 3.796833725714513 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 78.58274344293085,
            "unit": "iter/sec",
            "range": "stddev: 0.00006122120897795822",
            "extra": "mean: 12.72544016901408 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 100.76576970119378,
            "unit": "iter/sec",
            "range": "stddev: 0.00008521121591979224",
            "extra": "mean: 9.92400497674314 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 587441.7544270152,
            "unit": "iter/sec",
            "range": "stddev: 2.0939007073320333e-7",
            "extra": "mean: 1.7022964276269228 usec\nrounds: 23149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 63.26318025934266,
            "unit": "iter/sec",
            "range": "stddev: 0.0007688552488410545",
            "extra": "mean: 15.806982764707291 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 421.66680059805105,
            "unit": "iter/sec",
            "range": "stddev: 0.00010698482859141112",
            "extra": "mean: 2.371540748718414 msec\nrounds: 390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4019.411387556152,
            "unit": "iter/sec",
            "range": "stddev: 0.000054640334202702396",
            "extra": "mean: 248.79264737516988 usec\nrounds: 2229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 266.1958529986753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000471650025155933",
            "extra": "mean: 3.756632527272979 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 373186.9779895877,
            "unit": "iter/sec",
            "range": "stddev: 2.0547424956761132e-7",
            "extra": "mean: 2.679621902637506 usec\nrounds: 2018"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4077.39076252116,
            "unit": "iter/sec",
            "range": "stddev: 0.00005303157220780358",
            "extra": "mean: 245.25488437161053 usec\nrounds: 1894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 962.5016287268418,
            "unit": "iter/sec",
            "range": "stddev: 0.000017812883914832236",
            "extra": "mean: 1.0389592808510462 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8463619412945625,
            "unit": "iter/sec",
            "range": "stddev: 0.010661005475008463",
            "extra": "mean: 1.181527607999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 271.90887920161265,
            "unit": "iter/sec",
            "range": "stddev: 0.00003193970684571847",
            "extra": "mean: 3.6777026294111144 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.61361843432807,
            "unit": "iter/sec",
            "range": "stddev: 0.000742239901381105",
            "extra": "mean: 18.651977411763607 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4141467.4131505056,
            "unit": "iter/sec",
            "range": "stddev: 1.3534997949507664e-8",
            "extra": "mean: 241.4603086884986 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 247.2327980908034,
            "unit": "iter/sec",
            "range": "stddev: 0.0002927618416121535",
            "extra": "mean: 4.044770789807269 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 60.16835328732975,
            "unit": "iter/sec",
            "range": "stddev: 0.00039507606798060813",
            "extra": "mean: 16.620032714283706 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58146.87990798357,
            "unit": "iter/sec",
            "range": "stddev: 6.985491160362009e-7",
            "extra": "mean: 17.197827322506082 usec\nrounds: 12034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5394322.83077371,
            "unit": "iter/sec",
            "range": "stddev: 5.000871661344899e-9",
            "extra": "mean: 185.38008038659268 nsec\nrounds: 50506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.10113345897344,
            "unit": "iter/sec",
            "range": "stddev: 0.00009676032331232171",
            "extra": "mean: 5.913620917523984 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 225.9346741937272,
            "unit": "iter/sec",
            "range": "stddev: 0.00012246618767071965",
            "extra": "mean: 4.426058123077435 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.10458697622609,
            "unit": "iter/sec",
            "range": "stddev: 0.00007927533678255744",
            "extra": "mean: 11.350146846154985 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3699.1391668555098,
            "unit": "iter/sec",
            "range": "stddev: 0.00005267572276366589",
            "extra": "mean: 270.33316533750747 usec\nrounds: 1881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 67.89834452235057,
            "unit": "iter/sec",
            "range": "stddev: 0.0005668755389235179",
            "extra": "mean: 14.727899583337015 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 67.7485944057793,
            "unit": "iter/sec",
            "range": "stddev: 0.0005094344910613238",
            "extra": "mean: 14.760453833337314 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.04390375585554,
            "unit": "iter/sec",
            "range": "stddev: 0.0006750105935223449",
            "extra": "mean: 11.758632375000152 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11109293.891657455,
            "unit": "iter/sec",
            "range": "stddev: 3.4432623492044126e-9",
            "extra": "mean: 90.0147218854543 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.4489576306535,
            "unit": "iter/sec",
            "range": "stddev: 0.0008337298311116518",
            "extra": "mean: 30.817630919993917 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 232.24400500875342,
            "unit": "iter/sec",
            "range": "stddev: 0.0003216761905378394",
            "extra": "mean: 4.305816203790963 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.38619962497097,
            "unit": "iter/sec",
            "range": "stddev: 0.0006500278869901486",
            "extra": "mean: 12.43994621794961 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 540.5794484957216,
            "unit": "iter/sec",
            "range": "stddev: 0.00004054031517451853",
            "extra": "mean: 1.8498668471077 msec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2207402709156883,
            "unit": "iter/sec",
            "range": "stddev: 0.0019852713917695563",
            "extra": "mean: 450.3002953999953 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8499528589370865,
            "unit": "iter/sec",
            "range": "stddev: 0.004935134398884387",
            "extra": "mean: 1.1765358390000074 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 241.2928210061927,
            "unit": "iter/sec",
            "range": "stddev: 0.00033870352439717313",
            "extra": "mean: 4.144342114406858 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3458.4875102936526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000564813793662595",
            "extra": "mean: 289.14373610535097 usec\nrounds: 2429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.28690824523633,
            "unit": "iter/sec",
            "range": "stddev: 0.0005901394858612381",
            "extra": "mean: 12.152601444445336 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.39030085951211,
            "unit": "iter/sec",
            "range": "stddev: 0.0011715191905391472",
            "extra": "mean: 17.733546102038865 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.692546010013076,
            "unit": "iter/sec",
            "range": "stddev: 0.058343586423268215",
            "extra": "mean: 129.99597255555452 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.07619908489079,
            "unit": "iter/sec",
            "range": "stddev: 0.0011119112237397027",
            "extra": "mean: 23.76640527777833 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4014.642219751134,
            "unit": "iter/sec",
            "range": "stddev: 0.000020282851506618867",
            "extra": "mean: 249.08819896334114 usec\nrounds: 1930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 85.6045580569932,
            "unit": "iter/sec",
            "range": "stddev: 0.0006463993946437819",
            "extra": "mean: 11.681620963853668 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3552.4217549145255,
            "unit": "iter/sec",
            "range": "stddev: 0.00005028290563393389",
            "extra": "mean: 281.4981072043516 usec\nrounds: 1735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 254.16172505800355,
            "unit": "iter/sec",
            "range": "stddev: 0.00023545775855413601",
            "extra": "mean: 3.9345027256632945 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 86.26384839771272,
            "unit": "iter/sec",
            "range": "stddev: 0.0006359713353569091",
            "extra": "mean: 11.592341619047394 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.5855545643972,
            "unit": "iter/sec",
            "range": "stddev: 0.0004979714546505935",
            "extra": "mean: 25.26174032431994 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4337569.683179648,
            "unit": "iter/sec",
            "range": "stddev: 1.2112077916645706e-8",
            "extra": "mean: 230.54384667955847 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 147.86906403672313,
            "unit": "iter/sec",
            "range": "stddev: 0.00015197496303683445",
            "extra": "mean: 6.762739769230235 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122362.0799224227,
            "unit": "iter/sec",
            "range": "stddev: 3.444788168264756e-7",
            "extra": "mean: 8.172466507875626 usec\nrounds: 34844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.918653174191229,
            "unit": "iter/sec",
            "range": "stddev: 0.00009121166921453419",
            "extra": "mean: 203.30768699999453 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.062344900069505,
            "unit": "iter/sec",
            "range": "stddev: 0.03068258974722948",
            "extra": "mean: 33.26420488235726 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.23460993036592,
            "unit": "iter/sec",
            "range": "stddev: 0.00023011155039600822",
            "extra": "mean: 10.284403883721497 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 71.4693296665792,
            "unit": "iter/sec",
            "range": "stddev: 0.0007322829410915052",
            "extra": "mean: 13.992015941176854 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 85.36614327586729,
            "unit": "iter/sec",
            "range": "stddev: 0.0006707695748114106",
            "extra": "mean: 11.714245971830104 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5695419117734185,
            "unit": "iter/sec",
            "range": "stddev: 0.07675959758362152",
            "extra": "mean: 1.7557970350000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 613.5450226021555,
            "unit": "iter/sec",
            "range": "stddev: 0.000024172845535085817",
            "extra": "mean: 1.6298722394630778 msec\nrounds: 522"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.10093925974326,
            "unit": "iter/sec",
            "range": "stddev: 0.000040244377756583016",
            "extra": "mean: 8.688026409092489 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 68.97871606842924,
            "unit": "iter/sec",
            "range": "stddev: 0.0008743221087056436",
            "extra": "mean: 14.497225477609149 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.06404269263882,
            "unit": "iter/sec",
            "range": "stddev: 0.0000840236421780847",
            "extra": "mean: 14.69204532143006 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 109.5905199840963,
            "unit": "iter/sec",
            "range": "stddev: 0.00008701051256408327",
            "extra": "mean: 9.124876861110973 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1332528257745943,
            "unit": "iter/sec",
            "range": "stddev: 0.0752198094045176",
            "extra": "mean: 7.504531286199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.688241692963107,
            "unit": "iter/sec",
            "range": "stddev: 0.0007373322758022129",
            "extra": "mean: 40.50511220833641 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4093.452113569646,
            "unit": "iter/sec",
            "range": "stddev: 0.00005316740063440305",
            "extra": "mean: 244.2925853914441 usec\nrounds: 1903"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 68.38731752776019,
            "unit": "iter/sec",
            "range": "stddev: 0.000644092174837566",
            "extra": "mean: 14.622594307695636 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9190.283405997989,
            "unit": "iter/sec",
            "range": "stddev: 0.000012637904362641296",
            "extra": "mean: 108.81057262579688 usec\nrounds: 3463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1741353.5214082024,
            "unit": "iter/sec",
            "range": "stddev: 1.0596341026388687e-7",
            "extra": "mean: 574.2659303271844 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1432.0313560842947,
            "unit": "iter/sec",
            "range": "stddev: 0.00005360905659401166",
            "extra": "mean: 698.3087316847385 usec\nrounds: 1092"
          }
        ]
      }
    ]
  }
}