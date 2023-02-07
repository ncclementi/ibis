window.BENCHMARK_DATA = {
  "lastUpdate": 1675806687657,
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
          "id": "0e8b06643bfe81fd8694c5578324f263e49b9890",
          "message": "fix(duckdb): fix memtable `to_pyarrow`/`to_pyarrow_batches`",
          "timestamp": "2023-02-07T16:44:37-05:00",
          "tree_id": "c80cf2df5b0aa728ea41b37f8b46f24f9fd45a29",
          "url": "https://github.com/ibis-project/ibis/commit/0e8b06643bfe81fd8694c5578324f263e49b9890"
        },
        "date": 1675806609698,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.09218737072733,
            "unit": "iter/sec",
            "range": "stddev: 0.0005532721594982841",
            "extra": "mean: 11.615455833336341 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.04395755880616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000976994336651616",
            "extra": "mean: 11.357962859996178 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 269.35612346875837,
            "unit": "iter/sec",
            "range": "stddev: 0.00004312552903800892",
            "extra": "mean: 3.7125571422770585 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.943861229659764,
            "unit": "iter/sec",
            "range": "stddev: 0.00010405531469456086",
            "extra": "mean: 202.2710495999945 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 397.71401792162,
            "unit": "iter/sec",
            "range": "stddev: 0.0000906055255985328",
            "extra": "mean: 2.5143695090905154 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5418.428360368095,
            "unit": "iter/sec",
            "range": "stddev: 0.00004831791204265395",
            "extra": "mean: 184.5553606123651 usec\nrounds: 1894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1507524.7380200906,
            "unit": "iter/sec",
            "range": "stddev: 2.0964177900558161e-7",
            "extra": "mean: 663.3390317119115 nsec\nrounds: 163908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.32846603927991,
            "unit": "iter/sec",
            "range": "stddev: 0.0006653888163687826",
            "extra": "mean: 29.13034327999867 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 156.31659049179262,
            "unit": "iter/sec",
            "range": "stddev: 0.0006277183185978889",
            "extra": "mean: 6.397273615384445 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.44237861702675,
            "unit": "iter/sec",
            "range": "stddev: 0.0006463152300533069",
            "extra": "mean: 12.431258463413164 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.48077441221112,
            "unit": "iter/sec",
            "range": "stddev: 0.0008743956112200016",
            "extra": "mean: 11.698536973679401 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 140.8444234578593,
            "unit": "iter/sec",
            "range": "stddev: 0.00025155886493064455",
            "extra": "mean: 7.100032613639121 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5865599491007458,
            "unit": "iter/sec",
            "range": "stddev: 0.0025102820220785577",
            "extra": "mean: 1.7048555762000093 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10799.538310953141,
            "unit": "iter/sec",
            "range": "stddev: 0.000002360776083774139",
            "extra": "mean: 92.59655100123835 usec\nrounds: 5294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 241.9600797940173,
            "unit": "iter/sec",
            "range": "stddev: 0.0002498375453172214",
            "extra": "mean: 4.132913168367727 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58012.23846015987,
            "unit": "iter/sec",
            "range": "stddev: 4.834000563266479e-7",
            "extra": "mean: 17.23774201002007 usec\nrounds: 12547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 150.81853813746255,
            "unit": "iter/sec",
            "range": "stddev: 0.0007284838958957788",
            "extra": "mean: 6.630484636368486 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 154.57427083818672,
            "unit": "iter/sec",
            "range": "stddev: 0.0006500904274284492",
            "extra": "mean: 6.469381964912077 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.66597796136604,
            "unit": "iter/sec",
            "range": "stddev: 0.00017289705203573527",
            "extra": "mean: 15.464082219516403 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13517549488451572,
            "unit": "iter/sec",
            "range": "stddev: 0.15643360345797083",
            "extra": "mean: 7.39779056000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.933861933867718,
            "unit": "iter/sec",
            "range": "stddev: 0.00047463798608622524",
            "extra": "mean: 40.106101599997146 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8690331478414177,
            "unit": "iter/sec",
            "range": "stddev: 0.005647919349228761",
            "extra": "mean: 1.1507040928000152 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.7376491260002,
            "unit": "iter/sec",
            "range": "stddev: 0.000741203317829916",
            "extra": "mean: 10.78310707058496 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.947441910940825,
            "unit": "iter/sec",
            "range": "stddev: 0.0002902534553458089",
            "extra": "mean: 24.421549999996657 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2157749287336155,
            "unit": "iter/sec",
            "range": "stddev: 0.006057613781648547",
            "extra": "mean: 451.3093757999741 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5477.042133339364,
            "unit": "iter/sec",
            "range": "stddev: 0.000050818135997838927",
            "extra": "mean: 182.58030076359807 usec\nrounds: 2098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1416.1163658909613,
            "unit": "iter/sec",
            "range": "stddev: 0.00003742503730743706",
            "extra": "mean: 706.1566578046301 usec\nrounds: 1166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 247.69698170108055,
            "unit": "iter/sec",
            "range": "stddev: 0.00019714165318400465",
            "extra": "mean: 4.037190898057833 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 188.3459921309096,
            "unit": "iter/sec",
            "range": "stddev: 0.009880382807987774",
            "extra": "mean: 5.309377644229093 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 141.9282688743792,
            "unit": "iter/sec",
            "range": "stddev: 0.000753584061814298",
            "extra": "mean: 7.045812704762154 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 240.17148481110613,
            "unit": "iter/sec",
            "range": "stddev: 0.0002311146455568484",
            "extra": "mean: 4.163691625533713 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.270776925759245,
            "unit": "iter/sec",
            "range": "stddev: 0.00008109478346432784",
            "extra": "mean: 75.35353849999164 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 117.58937945690677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000654846581908808",
            "extra": "mean: 8.50416937837887 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5511339.811854246,
            "unit": "iter/sec",
            "range": "stddev: 4.610767165634398e-9",
            "extra": "mean: 181.44408331514563 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 256.86332194264514,
            "unit": "iter/sec",
            "range": "stddev: 0.00015799360031340753",
            "extra": "mean: 3.8931210280901434 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 595303.3140328116,
            "unit": "iter/sec",
            "range": "stddev: 1.595979839507958e-7",
            "extra": "mean: 1.6798159466400733 usec\nrounds: 20619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 243.8949434276507,
            "unit": "iter/sec",
            "range": "stddev: 0.00023561777100497244",
            "extra": "mean: 4.100126004853566 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 154.7343225419095,
            "unit": "iter/sec",
            "range": "stddev: 0.0007022343769583102",
            "extra": "mean: 6.462690265303949 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1493110.8812118634,
            "unit": "iter/sec",
            "range": "stddev: 9.820373799695436e-8",
            "extra": "mean: 669.7426243309964 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4743.7481871002565,
            "unit": "iter/sec",
            "range": "stddev: 0.00004972960509612837",
            "extra": "mean: 210.80376962658232 usec\nrounds: 2140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 933.2052392502198,
            "unit": "iter/sec",
            "range": "stddev: 0.00005667980873118498",
            "extra": "mean: 1.0715756383916641 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18416.369812474957,
            "unit": "iter/sec",
            "range": "stddev: 0.000015732085622483832",
            "extra": "mean: 54.299517775898266 usec\nrounds: 4838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1669699.665562061,
            "unit": "iter/sec",
            "range": "stddev: 9.204480012981017e-8",
            "extra": "mean: 598.9101037900585 nsec\nrounds: 158705"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.4249114387347,
            "unit": "iter/sec",
            "range": "stddev: 0.000841968127885911",
            "extra": "mean: 10.81959381332884 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 273.35516381265603,
            "unit": "iter/sec",
            "range": "stddev: 0.000045653774001117984",
            "extra": "mean: 3.658244410137977 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4684861.39679483,
            "unit": "iter/sec",
            "range": "stddev: 5.5604353517002686e-9",
            "extra": "mean: 213.45348673156462 nsec\nrounds: 48544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.577280436692591,
            "unit": "iter/sec",
            "range": "stddev: 0.0010659981139347486",
            "extra": "mean: 634.0026647999935 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 387365.7372517804,
            "unit": "iter/sec",
            "range": "stddev: 4.5755175408780203e-7",
            "extra": "mean: 2.5815396247862235 usec\nrounds: 1918"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.23608196765636,
            "unit": "iter/sec",
            "range": "stddev: 0.00005028517875509821",
            "extra": "mean: 6.656190622804483 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4492.315937343296,
            "unit": "iter/sec",
            "range": "stddev: 0.00005519709477165767",
            "extra": "mean: 222.6023311689401 usec\nrounds: 1848"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.35391219081838,
            "unit": "iter/sec",
            "range": "stddev: 0.0001818141035822934",
            "extra": "mean: 10.378405788232131 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4272997.811581807,
            "unit": "iter/sec",
            "range": "stddev: 1.1929116374797259e-8",
            "extra": "mean: 234.027735116017 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 152.36415726224135,
            "unit": "iter/sec",
            "range": "stddev: 0.000745271997805406",
            "extra": "mean: 6.5632233851354655 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.773765230807873,
            "unit": "iter/sec",
            "range": "stddev: 0.05359621815143244",
            "extra": "mean: 128.63779266666597 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10791.091451415989,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018145643298100513",
            "extra": "mean: 92.66903209024159 usec\nrounds: 5578"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.85223439599145,
            "unit": "iter/sec",
            "range": "stddev: 0.000826905986670923",
            "extra": "mean: 11.129383779070638 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.47936537398042,
            "unit": "iter/sec",
            "range": "stddev: 0.0010070608719749922",
            "extra": "mean: 26.68134825714625 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.97779690424308,
            "unit": "iter/sec",
            "range": "stddev: 0.00010602786518187701",
            "extra": "mean: 9.903167138299686 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 138.067650824445,
            "unit": "iter/sec",
            "range": "stddev: 0.0001042005073392341",
            "extra": "mean: 7.2428262089540025 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1529499.7943597087,
            "unit": "iter/sec",
            "range": "stddev: 9.014569974561291e-8",
            "extra": "mean: 653.8085220329356 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8689035485479878,
            "unit": "iter/sec",
            "range": "stddev: 0.0037466601562749116",
            "extra": "mean: 1.1508757234000087 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5086.5613127010765,
            "unit": "iter/sec",
            "range": "stddev: 0.00006848503865909469",
            "extra": "mean: 196.59647029182824 usec\nrounds: 1986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.26385926744888,
            "unit": "iter/sec",
            "range": "stddev: 0.0007382839703636869",
            "extra": "mean: 11.202742164707884 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.056916087720865,
            "unit": "iter/sec",
            "range": "stddev: 0.0005473987918547903",
            "extra": "mean: 18.499020520838627 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 241.50997851687876,
            "unit": "iter/sec",
            "range": "stddev: 0.00010014452019526407",
            "extra": "mean: 4.140615663754496 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.23483649280439,
            "unit": "iter/sec",
            "range": "stddev: 0.0004340456386969964",
            "extra": "mean: 12.463414194028823 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4081.639437796495,
            "unit": "iter/sec",
            "range": "stddev: 0.000024652028255968437",
            "extra": "mean: 244.9995927469423 usec\nrounds: 1930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9609.601703863922,
            "unit": "iter/sec",
            "range": "stddev: 0.00001560101771670409",
            "extra": "mean: 104.06258561142137 usec\nrounds: 3878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5105.083450984477,
            "unit": "iter/sec",
            "range": "stddev: 0.00005694644141559436",
            "extra": "mean: 195.8831838110614 usec\nrounds: 2372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.65840762713575,
            "unit": "iter/sec",
            "range": "stddev: 0.0007403657978872925",
            "extra": "mean: 16.76209673999324 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 234.1650080387594,
            "unit": "iter/sec",
            "range": "stddev: 0.0002088176235239779",
            "extra": "mean: 4.270492881816391 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4639.202559139869,
            "unit": "iter/sec",
            "range": "stddev: 0.000053801318460166246",
            "extra": "mean: 215.5542870250108 usec\nrounds: 2397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10815791.662095495,
            "unit": "iter/sec",
            "range": "stddev: 3.2744060038713654e-9",
            "extra": "mean: 92.45740221730306 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.29554653998878,
            "unit": "iter/sec",
            "range": "stddev: 0.0001817073528826867",
            "extra": "mean: 14.85982433333495 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7391646642769802,
            "unit": "iter/sec",
            "range": "stddev: 0.009174359647285135",
            "extra": "mean: 1.3528785240000047 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.06800792878548,
            "unit": "iter/sec",
            "range": "stddev: 0.00016798345108295646",
            "extra": "mean: 5.880000666667075 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 117.16137887478234,
            "unit": "iter/sec",
            "range": "stddev: 0.015136379009725892",
            "extra": "mean: 8.535235839693918 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 247.6648567775116,
            "unit": "iter/sec",
            "range": "stddev: 0.00022239425818011178",
            "extra": "mean: 4.037714567223983 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 124373.03474130393,
            "unit": "iter/sec",
            "range": "stddev: 3.4090762093094707e-7",
            "extra": "mean: 8.040328050851226 usec\nrounds: 35714"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 498.30989892609875,
            "unit": "iter/sec",
            "range": "stddev: 0.0001318504182430964",
            "extra": "mean: 2.0067833333335083 msec\nrounds: 330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.33725700886966,
            "unit": "iter/sec",
            "range": "stddev: 0.0005304631927113704",
            "extra": "mean: 26.78289944444619 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 624.4475115430776,
            "unit": "iter/sec",
            "range": "stddev: 0.000015336001698939455",
            "extra": "mean: 1.6014156218332771 msec\nrounds: 513"
          }
        ]
      }
    ]
  }
}