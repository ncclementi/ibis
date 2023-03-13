window.BENCHMARK_DATA = {
  "lastUpdate": 1678717416319,
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
          "id": "8c0cc68b5f2408c04a98ed5183dfa7ed01eaa4b2",
          "message": "test(polars): xfail tests for broken APIs",
          "timestamp": "2023-03-13T10:11:55-04:00",
          "tree_id": "4fef23fdd7e05b9fe67e8058fd7254057f610eba",
          "url": "https://github.com/ibis-project/ibis/commit/8c0cc68b5f2408c04a98ed5183dfa7ed01eaa4b2"
        },
        "date": 1678717336840,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.989932546106935,
            "unit": "iter/sec",
            "range": "stddev: 0.0004120467045160562",
            "extra": "mean: 16.39614864705784 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5723.967139919955,
            "unit": "iter/sec",
            "range": "stddev: 0.00005750278368308772",
            "extra": "mean: 174.7040078245425 usec\nrounds: 639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.619813333465913,
            "unit": "iter/sec",
            "range": "stddev: 0.0006735357810329451",
            "extra": "mean: 40.617692199992916 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.564517630170283,
            "unit": "iter/sec",
            "range": "stddev: 0.00009234463274101323",
            "extra": "mean: 64.2486984666713 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7158810.872786056,
            "unit": "iter/sec",
            "range": "stddev: 4.104260287897623e-9",
            "extra": "mean: 139.68800374399095 nsec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.56225178806328,
            "unit": "iter/sec",
            "range": "stddev: 0.0005829683083567198",
            "extra": "mean: 8.226237876404607 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.58343743358445,
            "unit": "iter/sec",
            "range": "stddev: 0.0005879696411427136",
            "extra": "mean: 9.654053049177666 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1875156.5425544067,
            "unit": "iter/sec",
            "range": "stddev: 1.4521887341625082e-7",
            "extra": "mean: 533.2888093906888 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12650.985209605353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026202734972505007",
            "extra": "mean: 79.0452271844206 usec\nrounds: 515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5592.047369657809,
            "unit": "iter/sec",
            "range": "stddev: 0.00004630454721037357",
            "extra": "mean: 178.82538074086312 usec\nrounds: 2025"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.29224926476596,
            "unit": "iter/sec",
            "range": "stddev: 0.00014019341367552623",
            "extra": "mean: 10.719004074625456 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.67905354791597,
            "unit": "iter/sec",
            "range": "stddev: 0.0005779146245812961",
            "extra": "mean: 9.645149775001016 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5215.894635193734,
            "unit": "iter/sec",
            "range": "stddev: 0.00006414232135382195",
            "extra": "mean: 191.7216642477014 usec\nrounds: 3583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.40161040764669,
            "unit": "iter/sec",
            "range": "stddev: 0.00008630229092563948",
            "extra": "mean: 8.305536750000897 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.97730542533495,
            "unit": "iter/sec",
            "range": "stddev: 0.001025485667864691",
            "extra": "mean: 25.01419216129226 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 63.959753725777,
            "unit": "iter/sec",
            "range": "stddev: 0.016324175739177958",
            "extra": "mean: 15.634831933334683 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73992.15838237452,
            "unit": "iter/sec",
            "range": "stddev: 4.310048800877047e-7",
            "extra": "mean: 13.514945662650211 usec\nrounds: 14410"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1771437.2165601428,
            "unit": "iter/sec",
            "range": "stddev: 9.357905837538019e-8",
            "extra": "mean: 564.5133740284882 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.50195859919742,
            "unit": "iter/sec",
            "range": "stddev: 0.000046038558950300373",
            "extra": "mean: 6.230453564103737 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5407.831966735047,
            "unit": "iter/sec",
            "range": "stddev: 0.000047964146207137926",
            "extra": "mean: 184.91698820363777 usec\nrounds: 1865"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 217.1964092479506,
            "unit": "iter/sec",
            "range": "stddev: 0.013093452417043617",
            "extra": "mean: 4.604127680851316 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.29777578072456,
            "unit": "iter/sec",
            "range": "stddev: 0.0006291103878771452",
            "extra": "mean: 8.312705646551374 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.80365810744263,
            "unit": "iter/sec",
            "range": "stddev: 0.0004072866131355347",
            "extra": "mean: 7.418196316326738 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8287.244803463303,
            "unit": "iter/sec",
            "range": "stddev: 0.000028014146917468947",
            "extra": "mean: 120.66736577904543 usec\nrounds: 3267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.15841716864786,
            "unit": "iter/sec",
            "range": "stddev: 0.0006397564893932931",
            "extra": "mean: 8.392189353981392 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.37751205874788,
            "unit": "iter/sec",
            "range": "stddev: 0.000052547208784240415",
            "extra": "mean: 10.269311454545067 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 279.9051051316375,
            "unit": "iter/sec",
            "range": "stddev: 0.00028499751611654647",
            "extra": "mean: 3.572639375511592 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.62013089296889,
            "unit": "iter/sec",
            "range": "stddev: 0.0006684614405692139",
            "extra": "mean: 8.80125724324335 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.544495528988772,
            "unit": "iter/sec",
            "range": "stddev: 0.0005207658332106503",
            "extra": "mean: 94.83621072727612 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.12408576792348,
            "unit": "iter/sec",
            "range": "stddev: 0.00026341947866232883",
            "extra": "mean: 10.088365428572757 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.95627554245918,
            "unit": "iter/sec",
            "range": "stddev: 0.00033888400933295803",
            "extra": "mean: 17.87109650000218 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 564.9015128036506,
            "unit": "iter/sec",
            "range": "stddev: 0.007068569990398326",
            "extra": "mean: 1.770220077898042 msec\nrounds: 552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5374.994695906193,
            "unit": "iter/sec",
            "range": "stddev: 0.000020269640407271133",
            "extra": "mean: 186.04669522030213 usec\nrounds: 2113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4959.805314318035,
            "unit": "iter/sec",
            "range": "stddev: 0.00004472418375759458",
            "extra": "mean: 201.62081707384482 usec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.33947471470462,
            "unit": "iter/sec",
            "range": "stddev: 0.0006738251079532909",
            "extra": "mean: 8.37945702702832 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8464405501790523,
            "unit": "iter/sec",
            "range": "stddev: 0.002984578075384067",
            "extra": "mean: 1.1814178796000079 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.17835151129606,
            "unit": "iter/sec",
            "range": "stddev: 0.000047184056294481806",
            "extra": "mean: 3.410893044609641 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5591850.247400853,
            "unit": "iter/sec",
            "range": "stddev: 1.0602987184896034e-8",
            "extra": "mean: 178.83168464031584 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1763.8929709911458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060937852492511836",
            "extra": "mean: 566.9278218383579 usec\nrounds: 348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.63942515260752,
            "unit": "iter/sec",
            "range": "stddev: 0.00005256506137307267",
            "extra": "mean: 6.110996778847248 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.2564927343083,
            "unit": "iter/sec",
            "range": "stddev: 0.000013121597332290837",
            "extra": "mean: 1.3382285864668377 msec\nrounds: 665"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.62671588880029,
            "unit": "iter/sec",
            "range": "stddev: 0.000698343539988876",
            "extra": "mean: 10.796021324997795 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8897887943841405,
            "unit": "iter/sec",
            "range": "stddev: 0.01014590640493244",
            "extra": "mean: 1.1238622089999921 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.46109159975404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006741088712117594",
            "extra": "mean: 8.971740592590846 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.36159035842974,
            "unit": "iter/sec",
            "range": "stddev: 0.017236321496558325",
            "extra": "mean: 11.066648960397709 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.84225797326003,
            "unit": "iter/sec",
            "range": "stddev: 0.0006604479814373273",
            "extra": "mean: 8.344302059321398 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145978.25761792593,
            "unit": "iter/sec",
            "range": "stddev: 3.2217866391708417e-7",
            "extra": "mean: 6.8503352233271295 usec\nrounds: 37038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 155.55676087353197,
            "unit": "iter/sec",
            "range": "stddev: 0.0037565366272702297",
            "extra": "mean: 6.428521617347139 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5293.617088846492,
            "unit": "iter/sec",
            "range": "stddev: 0.00005373363425636865",
            "extra": "mean: 188.90675000029242 usec\nrounds: 2308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6086186602686365,
            "unit": "iter/sec",
            "range": "stddev: 0.001529984971656972",
            "extra": "mean: 383.34464719999346 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 301.41889301249535,
            "unit": "iter/sec",
            "range": "stddev: 0.00023303474818328783",
            "extra": "mean: 3.3176420694987585 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.94503943314548,
            "unit": "iter/sec",
            "range": "stddev: 0.0006304177380121615",
            "extra": "mean: 8.33715178823528 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14018.439070150627,
            "unit": "iter/sec",
            "range": "stddev: 0.000001748084386896457",
            "extra": "mean: 71.33461828352156 usec\nrounds: 6979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 312.61143613448917,
            "unit": "iter/sec",
            "range": "stddev: 0.00020485721041665566",
            "extra": "mean: 3.1988593007511987 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 144.408102724877,
            "unit": "iter/sec",
            "range": "stddev: 0.019454625498133562",
            "extra": "mean: 6.924819183485687 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.97987304754238,
            "unit": "iter/sec",
            "range": "stddev: 0.00033243639201380203",
            "extra": "mean: 9.092572779818699 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 502658.4782559736,
            "unit": "iter/sec",
            "range": "stddev: 3.722100160845108e-7",
            "extra": "mean: 1.9894223279981371 usec\nrounds: 2311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2720164.5939726713,
            "unit": "iter/sec",
            "range": "stddev: 1.4867126358598364e-8",
            "extra": "mean: 367.624812930537 nsec\nrounds: 114930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.49679500704656,
            "unit": "iter/sec",
            "range": "stddev: 0.000048854063172050785",
            "extra": "mean: 6.042413086956891 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 311.6737516486361,
            "unit": "iter/sec",
            "range": "stddev: 0.00020177453865203725",
            "extra": "mean: 3.2084832126875584 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 287.7571923993862,
            "unit": "iter/sec",
            "range": "stddev: 0.00002620794585247623",
            "extra": "mean: 3.47515206018577 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.96847630547542,
            "unit": "iter/sec",
            "range": "stddev: 0.0007355206803373172",
            "extra": "mean: 9.904081319149025 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.364721401498915,
            "unit": "iter/sec",
            "range": "stddev: 0.0347194676938136",
            "extra": "mean: 34.054469181817446 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 342.76193074930956,
            "unit": "iter/sec",
            "range": "stddev: 0.000019464158357368433",
            "extra": "mean: 2.917476855769562 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 229.7557021335929,
            "unit": "iter/sec",
            "range": "stddev: 0.003440097299637099",
            "extra": "mean: 4.352449104477692 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.99506863557785,
            "unit": "iter/sec",
            "range": "stddev: 0.0006363390096567278",
            "extra": "mean: 9.346225136842254 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.0405535899823,
            "unit": "iter/sec",
            "range": "stddev: 0.0001032009921838047",
            "extra": "mean: 1.8551479908887216 msec\nrounds: 439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.20549684734092,
            "unit": "iter/sec",
            "range": "stddev: 0.0007448306884853015",
            "extra": "mean: 9.68940638383996 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1895089.619740087,
            "unit": "iter/sec",
            "range": "stddev: 8.623381933857905e-8",
            "extra": "mean: 527.6795300779236 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5641.424797391964,
            "unit": "iter/sec",
            "range": "stddev: 0.00006354592556910827",
            "extra": "mean: 177.26018442403077 usec\nrounds: 2093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12319.444571021024,
            "unit": "iter/sec",
            "range": "stddev: 0.000012112527280372849",
            "extra": "mean: 81.17249071052242 usec\nrounds: 5113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12014081.611143596,
            "unit": "iter/sec",
            "range": "stddev: 3.8502126435646594e-9",
            "extra": "mean: 83.2356589846932 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7624631709835985,
            "unit": "iter/sec",
            "range": "stddev: 0.002036364465767464",
            "extra": "mean: 567.3877425999876 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 300.9694995844302,
            "unit": "iter/sec",
            "range": "stddev: 0.00020691158480537987",
            "extra": "mean: 3.3225958157912028 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 775443.5150473383,
            "unit": "iter/sec",
            "range": "stddev: 1.6156427252181034e-7",
            "extra": "mean: 1.2895845804306625 usec\nrounds: 25189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.09076997767886,
            "unit": "iter/sec",
            "range": "stddev: 0.00019687998855978038",
            "extra": "mean: 3.343466600706635 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1169.888570280615,
            "unit": "iter/sec",
            "range": "stddev: 0.00002358719119077271",
            "extra": "mean: 854.7822633741393 usec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9097671592006216,
            "unit": "iter/sec",
            "range": "stddev: 0.005910576541843592",
            "extra": "mean: 1.0991823456000134 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16751075049631833,
            "unit": "iter/sec",
            "range": "stddev: 0.01127534430843625",
            "extra": "mean: 5.969766101800007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.619094207314359,
            "unit": "iter/sec",
            "range": "stddev: 0.001852457429658774",
            "extra": "mean: 177.96462616666986 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.92380993433363,
            "unit": "iter/sec",
            "range": "stddev: 0.0008093157327626933",
            "extra": "mean: 9.440748030305363 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.95449542501314,
            "unit": "iter/sec",
            "range": "stddev: 0.0009684905282042528",
            "extra": "mean: 22.24471636364068 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 294.65112878487093,
            "unit": "iter/sec",
            "range": "stddev: 0.00029389833256450015",
            "extra": "mean: 3.393844117020554 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5018.3065527546905,
            "unit": "iter/sec",
            "range": "stddev: 0.000053415605484667554",
            "extra": "mean: 199.27040914849488 usec\nrounds: 3192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6721199073227759,
            "unit": "iter/sec",
            "range": "stddev: 0.0733712489484247",
            "extra": "mean: 1.487829759400006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6186849.8588248985,
            "unit": "iter/sec",
            "range": "stddev: 9.298735571635404e-9",
            "extra": "mean: 161.63314494735823 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.023251081601686,
            "unit": "iter/sec",
            "range": "stddev: 0.0008520685650551451",
            "extra": "mean: 27.010053703709975 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.62265192904724,
            "unit": "iter/sec",
            "range": "stddev: 0.00015850255092889995",
            "extra": "mean: 15.717672396227876 msec\nrounds: 53"
          }
        ]
      }
    ]
  }
}