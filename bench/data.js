window.BENCHMARK_DATA = {
  "lastUpdate": 1680354208743,
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
          "id": "5cf186acad6578d84ad5b8d63ff9180d3c4a8df6",
          "message": "docs: add warning about comparisons to `None`",
          "timestamp": "2023-04-01T08:49:02-04:00",
          "tree_id": "9cf9512a02283a4d8f7eec715b7d11ebec2003f1",
          "url": "https://github.com/ibis-project/ibis/commit/5cf186acad6578d84ad5b8d63ff9180d3c4a8df6"
        },
        "date": 1680353781420,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 109.64242113211341,
            "unit": "iter/sec",
            "range": "stddev: 0.004730378259282019",
            "extra": "mean: 9.120557441859589 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5691.451561804864,
            "unit": "iter/sec",
            "range": "stddev: 0.00004104074385471925",
            "extra": "mean: 175.70210150095377 usec\nrounds: 2798"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.595763661462973,
            "unit": "iter/sec",
            "range": "stddev: 0.00015984950634409954",
            "extra": "mean: 178.70661816667166 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1821674948191227,
            "unit": "iter/sec",
            "range": "stddev: 0.07160936784905889",
            "extra": "mean: 5.489453543799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13557.144588776824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017393379461327049",
            "extra": "mean: 73.76184516228012 usec\nrounds: 5974"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7182695.909325453,
            "unit": "iter/sec",
            "range": "stddev: 4.422372680377479e-9",
            "extra": "mean: 139.22349109913117 nsec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1215.4286317332155,
            "unit": "iter/sec",
            "range": "stddev: 0.000011749336301070654",
            "extra": "mean: 822.7550132449885 usec\nrounds: 302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1755.1425632795049,
            "unit": "iter/sec",
            "range": "stddev: 0.000004312228529886807",
            "extra": "mean: 569.7542871568724 usec\nrounds: 1386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.1481089986136,
            "unit": "iter/sec",
            "range": "stddev: 0.00020127722023801544",
            "extra": "mean: 3.5069494358977567 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.725893250952,
            "unit": "iter/sec",
            "range": "stddev: 0.00018780348978767087",
            "extra": "mean: 3.2709038458157687 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 323.1804210386914,
            "unit": "iter/sec",
            "range": "stddev: 0.00007232460170889028",
            "extra": "mean: 3.09424685067874 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 142079.71430124796,
            "unit": "iter/sec",
            "range": "stddev: 2.736328849272597e-7",
            "extra": "mean: 7.038302441119256 usec\nrounds: 33223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 93.49445211490023,
            "unit": "iter/sec",
            "range": "stddev: 0.010788804221467227",
            "extra": "mean: 10.695821809523494 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.624843572529546,
            "unit": "iter/sec",
            "range": "stddev: 0.00018374952159108283",
            "extra": "mean: 64.00064073333358 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.362106488791,
            "unit": "iter/sec",
            "range": "stddev: 0.000018188533002308206",
            "extra": "mean: 1.8370125107534299 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 41.43699938443803,
            "unit": "iter/sec",
            "range": "stddev: 0.012824296138955674",
            "extra": "mean: 24.13302157143061 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.53286958080197,
            "unit": "iter/sec",
            "range": "stddev: 0.0001286975590463499",
            "extra": "mean: 10.467601406594378 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.04928639381569,
            "unit": "iter/sec",
            "range": "stddev: 0.0003111183490728684",
            "extra": "mean: 9.519341200007148 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.54289965887556,
            "unit": "iter/sec",
            "range": "stddev: 0.0005474155686703588",
            "extra": "mean: 8.2275476626493 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.4954750137076,
            "unit": "iter/sec",
            "range": "stddev: 0.0001266539700890768",
            "extra": "mean: 13.793964379306678 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.09971672546966,
            "unit": "iter/sec",
            "range": "stddev: 0.0005962324274643594",
            "extra": "mean: 8.25765763157793 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 140.94533286062315,
            "unit": "iter/sec",
            "range": "stddev: 0.00014636548992389548",
            "extra": "mean: 7.094949365857128 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1873503.442326491,
            "unit": "iter/sec",
            "range": "stddev: 8.145433950622082e-8",
            "extra": "mean: 533.7593608892512 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9258174408670412,
            "unit": "iter/sec",
            "range": "stddev: 0.005057177012778985",
            "extra": "mean: 1.080126551799981 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5991972519643802,
            "unit": "iter/sec",
            "range": "stddev: 0.0011045683347856647",
            "extra": "mean: 384.73417100000233 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9216962337463174,
            "unit": "iter/sec",
            "range": "stddev: 0.004565087306841676",
            "extra": "mean: 1.0849561530000074 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.95533936359305,
            "unit": "iter/sec",
            "range": "stddev: 0.0005563566265466964",
            "extra": "mean: 9.52786209890414 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.95996076685782,
            "unit": "iter/sec",
            "range": "stddev: 0.0006028343304793885",
            "extra": "mean: 9.349292883340848 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 304.55356390909907,
            "unit": "iter/sec",
            "range": "stddev: 0.0002134766021417952",
            "extra": "mean: 3.2834946574405306 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11648.598140633752,
            "unit": "iter/sec",
            "range": "stddev: 0.000011817071384570327",
            "extra": "mean: 85.84723997917865 usec\nrounds: 5788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.410479726442816,
            "unit": "iter/sec",
            "range": "stddev: 0.00009059419614385515",
            "extra": "mean: 16.553419283016897 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.885197483863486,
            "unit": "iter/sec",
            "range": "stddev: 0.0006995826312720084",
            "extra": "mean: 22.279059825001468 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.02330851107865,
            "unit": "iter/sec",
            "range": "stddev: 0.00019278674527030285",
            "extra": "mean: 3.2151931145841437 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 183.66554040726828,
            "unit": "iter/sec",
            "range": "stddev: 0.0038449991245259763",
            "extra": "mean: 5.444679485234709 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 356.4240980401012,
            "unit": "iter/sec",
            "range": "stddev: 0.000035772364707692055",
            "extra": "mean: 2.8056464349598778 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 70.40903459008177,
            "unit": "iter/sec",
            "range": "stddev: 0.00013554238300007894",
            "extra": "mean: 14.20272278723824 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.430021635805,
            "unit": "iter/sec",
            "range": "stddev: 0.00002474085626102915",
            "extra": "mean: 1.4589381387372875 msec\nrounds: 555"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 263.5187264991871,
            "unit": "iter/sec",
            "range": "stddev: 0.0037432883025399774",
            "extra": "mean: 3.79479672387945 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.4064208251124,
            "unit": "iter/sec",
            "range": "stddev: 0.00006584749843480292",
            "extra": "mean: 3.3966650496187194 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.6050862416478,
            "unit": "iter/sec",
            "range": "stddev: 0.00006076444975276148",
            "extra": "mean: 6.226452868966997 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5767825.955284375,
            "unit": "iter/sec",
            "range": "stddev: 8.905538740133813e-8",
            "extra": "mean: 173.37555046785926 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1791596.2088247156,
            "unit": "iter/sec",
            "range": "stddev: 9.985928912403132e-8",
            "extra": "mean: 558.1614847555401 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.3356541237951,
            "unit": "iter/sec",
            "range": "stddev: 0.000354252966870826",
            "extra": "mean: 8.45053849073978 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5640.849076313127,
            "unit": "iter/sec",
            "range": "stddev: 0.00001996179360511478",
            "extra": "mean: 177.27827610193793 usec\nrounds: 2586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.931369542555132,
            "unit": "iter/sec",
            "range": "stddev: 0.054491605640172185",
            "extra": "mean: 111.9649114545444 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2540757.166243925,
            "unit": "iter/sec",
            "range": "stddev: 1.403823697812006e-8",
            "extra": "mean: 393.58346137347615 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 500412.08985396364,
            "unit": "iter/sec",
            "range": "stddev: 3.512603590048011e-7",
            "extra": "mean: 1.9983529980097647 usec\nrounds: 2068"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.49565933551696,
            "unit": "iter/sec",
            "range": "stddev: 0.000551703054915475",
            "extra": "mean: 9.756510729166834 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6284532.555069234,
            "unit": "iter/sec",
            "range": "stddev: 7.627500461114372e-9",
            "extra": "mean: 159.12082422006583 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5327.819494671579,
            "unit": "iter/sec",
            "range": "stddev: 0.000038356033526566455",
            "extra": "mean: 187.69404650441194 usec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 298.29070180863874,
            "unit": "iter/sec",
            "range": "stddev: 0.00018592420385631328",
            "extra": "mean: 3.352434366665328 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.03269238362984,
            "unit": "iter/sec",
            "range": "stddev: 0.00007452215696431939",
            "extra": "mean: 6.534551437500369 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 122.1703239261144,
            "unit": "iter/sec",
            "range": "stddev: 0.0005270880490225277",
            "extra": "mean: 8.185293841119512 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68315.60958327816,
            "unit": "iter/sec",
            "range": "stddev: 9.07816903078942e-7",
            "extra": "mean: 14.63794301331644 usec\nrounds: 13775"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 306.1027868933442,
            "unit": "iter/sec",
            "range": "stddev: 0.0002654112938595059",
            "extra": "mean: 3.26687649645095 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.03132664285572,
            "unit": "iter/sec",
            "range": "stddev: 0.0005802058225943514",
            "extra": "mean: 8.262323711867108 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11866.418205941975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035811589401231076",
            "extra": "mean: 84.2714273713412 usec\nrounds: 6072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.301970906307204,
            "unit": "iter/sec",
            "range": "stddev: 0.0002815312723246575",
            "extra": "mean: 20.28316478260852 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5773.66974260596,
            "unit": "iter/sec",
            "range": "stddev: 0.000045333497595376424",
            "extra": "mean: 173.20006938059598 usec\nrounds: 2825"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7993.18050248302,
            "unit": "iter/sec",
            "range": "stddev: 0.000013726909031100011",
            "extra": "mean: 125.106645557342 usec\nrounds: 4232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.69373791555111,
            "unit": "iter/sec",
            "range": "stddev: 0.015126569144191252",
            "extra": "mean: 12.392535354435259 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.2329138670676,
            "unit": "iter/sec",
            "range": "stddev: 0.0005929738128921944",
            "extra": "mean: 8.317190092436952 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7641664019276209,
            "unit": "iter/sec",
            "range": "stddev: 0.0010234581105461045",
            "extra": "mean: 566.8399528000009 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.46011869459325,
            "unit": "iter/sec",
            "range": "stddev: 0.0005476407128454593",
            "extra": "mean: 8.233155135591966 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.32228276966651,
            "unit": "iter/sec",
            "range": "stddev: 0.00002828485379456509",
            "extra": "mean: 5.172709455285339 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.70913357773776,
            "unit": "iter/sec",
            "range": "stddev: 0.00007248725308699686",
            "extra": "mean: 13.38524424138129 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1667556.0602152026,
            "unit": "iter/sec",
            "range": "stddev: 9.005727621672446e-8",
            "extra": "mean: 599.6799890919093 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12596785.29050185,
            "unit": "iter/sec",
            "range": "stddev: 2.730903286971992e-9",
            "extra": "mean: 79.38533339561003 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.45178777208232,
            "unit": "iter/sec",
            "range": "stddev: 0.0003721413749738051",
            "extra": "mean: 35.147176269226485 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 758.7478281280795,
            "unit": "iter/sec",
            "range": "stddev: 0.000022943017530624156",
            "extra": "mean: 1.3179609389685083 msec\nrounds: 639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 296.0082313410846,
            "unit": "iter/sec",
            "range": "stddev: 0.00042563212224052565",
            "extra": "mean: 3.378284433069428 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.18199718511701,
            "unit": "iter/sec",
            "range": "stddev: 0.000591314589275435",
            "extra": "mean: 8.757948053568855 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8448023775923518,
            "unit": "iter/sec",
            "range": "stddev: 0.0013353478364721311",
            "extra": "mean: 1.1837087897999936 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.82502425494698,
            "unit": "iter/sec",
            "range": "stddev: 0.00003025623445964835",
            "extra": "mean: 10.01752824468203 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6827715871794433,
            "unit": "iter/sec",
            "range": "stddev: 0.0013811930525182176",
            "extra": "mean: 1.4646186495999927 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.80386503447369,
            "unit": "iter/sec",
            "range": "stddev: 0.000553206677846588",
            "extra": "mean: 9.72726073737272 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5265.797116478973,
            "unit": "iter/sec",
            "range": "stddev: 0.00005033774016928043",
            "extra": "mean: 189.90477184746908 usec\nrounds: 3410"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 49.01982141805988,
            "unit": "iter/sec",
            "range": "stddev: 0.00011528266354356439",
            "extra": "mean: 20.39991111904745 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.45217013092318,
            "unit": "iter/sec",
            "range": "stddev: 0.0006276415540200356",
            "extra": "mean: 9.856861599998386 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 307.8484413870046,
            "unit": "iter/sec",
            "range": "stddev: 0.00022349091853389902",
            "extra": "mean: 3.248351674267121 msec\nrounds: 307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5585.721664144453,
            "unit": "iter/sec",
            "range": "stddev: 0.00004879090640838649",
            "extra": "mean: 179.02789650604026 usec\nrounds: 3836"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5483.19140707521,
            "unit": "iter/sec",
            "range": "stddev: 0.000049597871436609986",
            "extra": "mean: 182.37554113278898 usec\nrounds: 3513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5736.664493472568,
            "unit": "iter/sec",
            "range": "stddev: 0.000048319494966660895",
            "extra": "mean: 174.31732344428445 usec\nrounds: 3135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 710066.3048247668,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013987124342627692",
            "extra": "mean: 1.4083191854129513 usec\nrounds: 23867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5747.625753585633,
            "unit": "iter/sec",
            "range": "stddev: 0.00004712424991845335",
            "extra": "mean: 173.98488399773663 usec\nrounds: 3612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.11809021315551,
            "unit": "iter/sec",
            "range": "stddev: 0.0005465931935862685",
            "extra": "mean: 9.335491306931338 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.43790207295388,
            "unit": "iter/sec",
            "range": "stddev: 0.0001387433366307278",
            "extra": "mean: 6.156198690320942 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.93274489134657,
            "unit": "iter/sec",
            "range": "stddev: 0.0006047823025317645",
            "extra": "mean: 9.439951745097167 msec\nrounds: 102"
          }
        ]
      },
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
          "id": "9a7def9210afb305c7a1e692172187b44248dda4",
          "message": "chore: remove dead snapshot files",
          "timestamp": "2023-04-01T08:52:37-04:00",
          "tree_id": "ea5bdd5d8bd1b0d4d983f1127f54d863a33dddb9",
          "url": "https://github.com/ibis-project/ibis/commit/9a7def9210afb305c7a1e692172187b44248dda4"
        },
        "date": 1680354129588,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 104.0025234519636,
            "unit": "iter/sec",
            "range": "stddev: 0.010472507100821664",
            "extra": "mean: 9.615151313726319 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.22613910421703,
            "unit": "iter/sec",
            "range": "stddev: 0.0006642776248131638",
            "extra": "mean: 8.249046017545021 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 105.50914691765493,
            "unit": "iter/sec",
            "range": "stddev: 0.0005357985534646987",
            "extra": "mean: 9.477851250000668 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.08513315356946,
            "unit": "iter/sec",
            "range": "stddev: 0.0006752082662779086",
            "extra": "mean: 9.700719875001429 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 87.81595896639477,
            "unit": "iter/sec",
            "range": "stddev: 0.00045711894359554123",
            "extra": "mean: 11.387451799993187 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.3940639690539,
            "unit": "iter/sec",
            "range": "stddev: 0.00015716670123312854",
            "extra": "mean: 9.766191136843885 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 96.00620425644502,
            "unit": "iter/sec",
            "range": "stddev: 0.01185687143215618",
            "extra": "mean: 10.415993505262122 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.807218238187,
            "unit": "iter/sec",
            "range": "stddev: 0.0006233921816980859",
            "extra": "mean: 9.63324147368526 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9102258765216695,
            "unit": "iter/sec",
            "range": "stddev: 0.005826649436476326",
            "extra": "mean: 1.0986284017999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5323.785997189871,
            "unit": "iter/sec",
            "range": "stddev: 0.00005080899761731303",
            "extra": "mean: 187.8362504668377 usec\nrounds: 2140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1776.2654262925357,
            "unit": "iter/sec",
            "range": "stddev: 0.000007705240146762204",
            "extra": "mean: 562.9789248824284 usec\nrounds: 1278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.18018357082497,
            "unit": "iter/sec",
            "range": "stddev: 0.0006516214187184083",
            "extra": "mean: 8.32083934545396 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.27132401339523,
            "unit": "iter/sec",
            "range": "stddev: 0.00014554887945009937",
            "extra": "mean: 6.162518276596126 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7284602462747751,
            "unit": "iter/sec",
            "range": "stddev: 0.0020379482845473114",
            "extra": "mean: 578.549609199996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146511.83475800333,
            "unit": "iter/sec",
            "range": "stddev: 3.227837414154301e-7",
            "extra": "mean: 6.825387189039854 usec\nrounds: 39841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 531.1796124781401,
            "unit": "iter/sec",
            "range": "stddev: 0.00004009688650924134",
            "extra": "mean: 1.882602374994491 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.6216201197065,
            "unit": "iter/sec",
            "range": "stddev: 0.00009928257427394516",
            "extra": "mean: 6.187291027396837 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.6204517492996,
            "unit": "iter/sec",
            "range": "stddev: 0.00010710521599007367",
            "extra": "mean: 15.239151413045148 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.54665252040117,
            "unit": "iter/sec",
            "range": "stddev: 0.0006385937730007097",
            "extra": "mean: 9.212628641975408 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.1196870544716,
            "unit": "iter/sec",
            "range": "stddev: 0.00009906702040781082",
            "extra": "mean: 3.44685329752284 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.19351559103492,
            "unit": "iter/sec",
            "range": "stddev: 0.0005984863559328682",
            "extra": "mean: 9.597526240740864 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 307.98337036803144,
            "unit": "iter/sec",
            "range": "stddev: 0.0002608205639254102",
            "extra": "mean: 3.2469285559315364 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.44954808863028,
            "unit": "iter/sec",
            "range": "stddev: 0.00006154748218476884",
            "extra": "mean: 6.118095838709516 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.47032258746499,
            "unit": "iter/sec",
            "range": "stddev: 0.015660562108482823",
            "extra": "mean: 9.953187909090712 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.81885208763792,
            "unit": "iter/sec",
            "range": "stddev: 0.0003831800804359994",
            "extra": "mean: 17.001351854164664 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 285.11250905268986,
            "unit": "iter/sec",
            "range": "stddev: 0.00026666130519862263",
            "extra": "mean: 3.5073873234204402 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 285.90308871471757,
            "unit": "iter/sec",
            "range": "stddev: 0.000048722679767922505",
            "extra": "mean: 3.4976886905822453 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1961216.6087355867,
            "unit": "iter/sec",
            "range": "stddev: 8.048955132873774e-8",
            "extra": "mean: 509.88758485209274 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7053225.511955888,
            "unit": "iter/sec",
            "range": "stddev: 8.224227149562652e-9",
            "extra": "mean: 141.77910493649577 nsec\nrounds: 59169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1176.383053287822,
            "unit": "iter/sec",
            "range": "stddev: 0.000011385443449371225",
            "extra": "mean: 850.06324870555 usec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5339.970785697386,
            "unit": "iter/sec",
            "range": "stddev: 0.00004801945015781505",
            "extra": "mean: 187.26694211107048 usec\nrounds: 1762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.47871082429867,
            "unit": "iter/sec",
            "range": "stddev: 0.00002374074016375627",
            "extra": "mean: 5.115646587718833 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 265.564287642563,
            "unit": "iter/sec",
            "range": "stddev: 0.008745187590618054",
            "extra": "mean: 3.765566555944272 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.307235791682931,
            "unit": "iter/sec",
            "range": "stddev: 0.000356808253949713",
            "extra": "mean: 65.32858143750175 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.70156734346486,
            "unit": "iter/sec",
            "range": "stddev: 0.00007175663321726566",
            "extra": "mean: 7.2097238636367615 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 244.95116294510623,
            "unit": "iter/sec",
            "range": "stddev: 0.0033844307052744156",
            "extra": "mean: 4.082446427184756 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 304.76755817671574,
            "unit": "iter/sec",
            "range": "stddev: 0.00019565884629720208",
            "extra": "mean: 3.2811891330643603 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9104714567953064,
            "unit": "iter/sec",
            "range": "stddev: 0.00398658666356323",
            "extra": "mean: 1.0983320702000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.865731823018,
            "unit": "iter/sec",
            "range": "stddev: 0.0001521795788775782",
            "extra": "mean: 3.0687485744684357 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.5933863369054,
            "unit": "iter/sec",
            "range": "stddev: 0.03196687584809274",
            "extra": "mean: 27.327342454542766 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8312.75572193763,
            "unit": "iter/sec",
            "range": "stddev: 0.000030374880676108754",
            "extra": "mean: 120.29705111639063 usec\nrounds: 3404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5963226364337486,
            "unit": "iter/sec",
            "range": "stddev: 0.001995100378458242",
            "extra": "mean: 385.1601437999932 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 309.7154027877735,
            "unit": "iter/sec",
            "range": "stddev: 0.0002529626702557295",
            "extra": "mean: 3.228770642334604 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.9902241255128,
            "unit": "iter/sec",
            "range": "stddev: 0.00021132346264258662",
            "extra": "mean: 3.3004365170070735 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2728689.6213189727,
            "unit": "iter/sec",
            "range": "stddev: 1.4169699816429699e-8",
            "extra": "mean: 366.47627204877585 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.92298370938259,
            "unit": "iter/sec",
            "range": "stddev: 0.030675061440711807",
            "extra": "mean: 27.83733133333281 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5641.526673837781,
            "unit": "iter/sec",
            "range": "stddev: 0.000051905349671251046",
            "extra": "mean: 177.25698340441002 usec\nrounds: 2350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5174.183868796755,
            "unit": "iter/sec",
            "range": "stddev: 0.000050305140619271456",
            "extra": "mean: 193.26719447110563 usec\nrounds: 2098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 787742.646685124,
            "unit": "iter/sec",
            "range": "stddev: 0.000001389811097542978",
            "extra": "mean: 1.269450123346844 usec\nrounds: 22676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.24018216867572,
            "unit": "iter/sec",
            "range": "stddev: 0.00008769888670494009",
            "extra": "mean: 8.316687333334016 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1646895906928726,
            "unit": "iter/sec",
            "range": "stddev: 0.09552733391179741",
            "extra": "mean: 6.072029178000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 297.0115799539206,
            "unit": "iter/sec",
            "range": "stddev: 0.00028251487000214936",
            "extra": "mean: 3.3668720935228973 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5616.627924682614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000511192386960081",
            "extra": "mean: 178.04277110923425 usec\nrounds: 2949"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.598512565897796,
            "unit": "iter/sec",
            "range": "stddev: 0.0007370830223068301",
            "extra": "mean: 40.65286457142747 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.90554187073718,
            "unit": "iter/sec",
            "range": "stddev: 0.0008538524915827648",
            "extra": "mean: 16.69294640815999 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.7568486406772,
            "unit": "iter/sec",
            "range": "stddev: 0.000020682837392528816",
            "extra": "mean: 1.4582428188391015 msec\nrounds: 552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1983800.1901138462,
            "unit": "iter/sec",
            "range": "stddev: 6.554629027634368e-8",
            "extra": "mean: 504.0830245825373 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74237.33421348652,
            "unit": "iter/sec",
            "range": "stddev: 6.380610280699118e-7",
            "extra": "mean: 13.470311273897176 usec\nrounds: 12285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 166.76603302678086,
            "unit": "iter/sec",
            "range": "stddev: 0.003966806465837558",
            "extra": "mean: 5.996424942478607 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.3323534792527,
            "unit": "iter/sec",
            "range": "stddev: 0.01840276683905947",
            "extra": "mean: 10.067213400001313 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6101154.296558835,
            "unit": "iter/sec",
            "range": "stddev: 2.363231446197606e-8",
            "extra": "mean: 163.90341095973764 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.4221437974361,
            "unit": "iter/sec",
            "range": "stddev: 0.0007493195861648416",
            "extra": "mean: 9.30906761538553 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5654.798655109273,
            "unit": "iter/sec",
            "range": "stddev: 0.00007054767255447747",
            "extra": "mean: 176.84095597222924 usec\nrounds: 2771"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.3320541694078,
            "unit": "iter/sec",
            "range": "stddev: 0.000015770303089951676",
            "extra": "mean: 1.3221705922515536 msec\nrounds: 542"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.609464131565789,
            "unit": "iter/sec",
            "range": "stddev: 0.00014085714628504014",
            "extra": "mean: 178.27014783333084 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.64937502570065,
            "unit": "iter/sec",
            "range": "stddev: 0.00017778231895447294",
            "extra": "mean: 9.037556694447925 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.52196327979208,
            "unit": "iter/sec",
            "range": "stddev: 0.0006234343823591305",
            "extra": "mean: 8.731949500000011 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5467.668249580677,
            "unit": "iter/sec",
            "range": "stddev: 0.00006790422105109004",
            "extra": "mean: 182.89332021500962 usec\nrounds: 2795"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.892322927588516,
            "unit": "iter/sec",
            "range": "stddev: 0.0016813536283119064",
            "extra": "mean: 24.454467939392543 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.517666231865169,
            "unit": "iter/sec",
            "range": "stddev: 0.0002508734011538758",
            "extra": "mean: 95.07812645454744 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.47311690238435,
            "unit": "iter/sec",
            "range": "stddev: 0.018227046493162508",
            "extra": "mean: 10.052967385965468 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5531.018232976063,
            "unit": "iter/sec",
            "range": "stddev: 0.000022094130326911127",
            "extra": "mean: 180.7985361606614 usec\nrounds: 2240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.66208342695273,
            "unit": "iter/sec",
            "range": "stddev: 0.00005754340105708065",
            "extra": "mean: 10.345318086959063 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1800326.5701478058,
            "unit": "iter/sec",
            "range": "stddev: 1.0512435622910295e-7",
            "extra": "mean: 555.4547805834474 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.34388477166158,
            "unit": "iter/sec",
            "range": "stddev: 0.020369012004250293",
            "extra": "mean: 11.448998434340838 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11233716.972962126,
            "unit": "iter/sec",
            "range": "stddev: 3.5615160691982345e-9",
            "extra": "mean: 89.01773138913768 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.29240641332228,
            "unit": "iter/sec",
            "range": "stddev: 0.0008710301362360737",
            "extra": "mean: 10.835127600006444 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6800580309240661,
            "unit": "iter/sec",
            "range": "stddev: 0.010767652839396503",
            "extra": "mean: 1.4704627466000146 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12011.368124403944,
            "unit": "iter/sec",
            "range": "stddev: 0.00001381085438159972",
            "extra": "mean: 83.25446274252995 usec\nrounds: 4281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.078729147066504,
            "unit": "iter/sec",
            "range": "stddev: 0.00026375691289082156",
            "extra": "mean: 20.7992186511655 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5630749.14144928,
            "unit": "iter/sec",
            "range": "stddev: 8.350551583816326e-9",
            "extra": "mean: 177.59626203903454 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5199.1851120217425,
            "unit": "iter/sec",
            "range": "stddev: 0.00009629582162399639",
            "extra": "mean: 192.33783342081128 usec\nrounds: 1909"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8358436080928701,
            "unit": "iter/sec",
            "range": "stddev: 0.003085385715745788",
            "extra": "mean: 1.1963960606000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13808.536171438689,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014284899516862096",
            "extra": "mean: 72.41897240841364 usec\nrounds: 5835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 286.1023062270038,
            "unit": "iter/sec",
            "range": "stddev: 0.00026577757694720233",
            "extra": "mean: 3.495253195220888 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 496882.22311771155,
            "unit": "iter/sec",
            "range": "stddev: 1.6289852376138452e-7",
            "extra": "mean: 2.012549359736502 usec\nrounds: 2188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.57203348075518,
            "unit": "iter/sec",
            "range": "stddev: 0.0000799188336400615",
            "extra": "mean: 13.232408259262407 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12665.75787991492,
            "unit": "iter/sec",
            "range": "stddev: 0.000002420806431958052",
            "extra": "mean: 78.95303301082188 usec\nrounds: 7028"
          }
        ]
      }
    ]
  }
}