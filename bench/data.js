window.BENCHMARK_DATA = {
  "lastUpdate": 1680872594884,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "163991453e233cb1a9c92bb571327bf3840d10a1",
          "message": "fix(clickhouse): ensure that truncate works",
          "timestamp": "2023-04-07T14:52:56+02:00",
          "tree_id": "979ae85c8286150655571c96a84462e299267c5b",
          "url": "https://github.com/ibis-project/ibis/commit/163991453e233cb1a9c92bb571327bf3840d10a1"
        },
        "date": 1680872516745,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2149.441992296483,
            "unit": "iter/sec",
            "range": "stddev: 0.00008561337779462982",
            "extra": "mean: 465.23702597416514 usec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 100.96173632208267,
            "unit": "iter/sec",
            "range": "stddev: 0.007524443204317886",
            "extra": "mean: 9.904742493828097 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.95744221001402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000978161758222656",
            "extra": "mean: 6.136571527130587 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.96922800259055,
            "unit": "iter/sec",
            "range": "stddev: 0.000768697165753512",
            "extra": "mean: 9.904007585106456 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 752163.2462017965,
            "unit": "iter/sec",
            "range": "stddev: 3.958945789321427e-7",
            "extra": "mean: 1.3294986228717056 usec\nrounds: 24331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.16522681153941,
            "unit": "iter/sec",
            "range": "stddev: 0.0007026232135957404",
            "extra": "mean: 10.291747704552666 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5792445.169050207,
            "unit": "iter/sec",
            "range": "stddev: 8.593989658688434e-9",
            "extra": "mean: 172.63866481518485 nsec\nrounds: 56494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1975288.4501079565,
            "unit": "iter/sec",
            "range": "stddev: 9.683321426642415e-8",
            "extra": "mean: 506.2551750076534 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1862.9352944719021,
            "unit": "iter/sec",
            "range": "stddev: 0.0024761183402204575",
            "extra": "mean: 536.7872963529182 usec\nrounds: 1316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.578560192737671,
            "unit": "iter/sec",
            "range": "stddev: 0.00035020411344615705",
            "extra": "mean: 179.2577233999964 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9426500626871868,
            "unit": "iter/sec",
            "range": "stddev: 0.00654940482511316",
            "extra": "mean: 1.0608390532000045 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6751643529088641,
            "unit": "iter/sec",
            "range": "stddev: 0.004506899890466252",
            "extra": "mean: 1.4811208495999835 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.44008394250663,
            "unit": "iter/sec",
            "range": "stddev: 0.0001682510683486073",
            "extra": "mean: 9.054683447366665 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.532475973263,
            "unit": "iter/sec",
            "range": "stddev: 0.00001900857418197884",
            "extra": "mean: 1.4651317486014734 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74232.06972721718,
            "unit": "iter/sec",
            "range": "stddev: 4.019637176618262e-7",
            "extra": "mean: 13.47126657891569 usec\nrounds: 13587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 100.35317711755067,
            "unit": "iter/sec",
            "range": "stddev: 0.0005750758917498815",
            "extra": "mean: 9.964806583339461 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8366.807522373938,
            "unit": "iter/sec",
            "range": "stddev: 0.000013555334550367452",
            "extra": "mean: 119.51990019202297 usec\nrounds: 1563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 70.51629181532417,
            "unit": "iter/sec",
            "range": "stddev: 0.017534355261949935",
            "extra": "mean: 14.181120054056587 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.345022440056056,
            "unit": "iter/sec",
            "range": "stddev: 0.000626276798056318",
            "extra": "mean: 96.66484589999413 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 101.09232138205405,
            "unit": "iter/sec",
            "range": "stddev: 0.0006437689532175716",
            "extra": "mean: 9.891948135415163 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16822363746858177,
            "unit": "iter/sec",
            "range": "stddev: 0.05708949087274041",
            "extra": "mean: 5.944467822999991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1801763.4303792533,
            "unit": "iter/sec",
            "range": "stddev: 9.470364051017516e-8",
            "extra": "mean: 555.0118196091425 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.137152884042116,
            "unit": "iter/sec",
            "range": "stddev: 0.001903269025930693",
            "extra": "mean: 24.914572363641266 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6474808933262268,
            "unit": "iter/sec",
            "range": "stddev: 0.001843838129410369",
            "extra": "mean: 606.9873126000402 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 280.6174960840006,
            "unit": "iter/sec",
            "range": "stddev: 0.00024271047188527482",
            "extra": "mean: 3.563569677425452 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2088.87416396886,
            "unit": "iter/sec",
            "range": "stddev: 0.00008824965413915335",
            "extra": "mean: 478.7267788788198 usec\nrounds: 1212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.03698019936742,
            "unit": "iter/sec",
            "range": "stddev: 0.0006931245830558095",
            "extra": "mean: 10.305349547620391 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11773391.006446814,
            "unit": "iter/sec",
            "range": "stddev: 3.973945271207633e-9",
            "extra": "mean: 84.9372962685031 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.26253968066203,
            "unit": "iter/sec",
            "range": "stddev: 0.00026155604857179646",
            "extra": "mean: 3.5553970362899134 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 280.42782483802466,
            "unit": "iter/sec",
            "range": "stddev: 0.0002478529414259122",
            "extra": "mean: 3.5659799471668006 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.0917581969937,
            "unit": "iter/sec",
            "range": "stddev: 0.0002594155700507693",
            "extra": "mean: 3.621984250926071 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.68355283007907,
            "unit": "iter/sec",
            "range": "stddev: 0.0002732672298284861",
            "extra": "mean: 3.5627310183200604 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.21386382277117,
            "unit": "iter/sec",
            "range": "stddev: 0.003543970821033127",
            "extra": "mean: 6.24165709595645 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1996974.7565656055,
            "unit": "iter/sec",
            "range": "stddev: 7.910875398694561e-8",
            "extra": "mean: 500.7574566039076 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4468.939640578423,
            "unit": "iter/sec",
            "range": "stddev: 0.00003808556620047971",
            "extra": "mean: 223.7667277758462 usec\nrounds: 911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.44663793977526,
            "unit": "iter/sec",
            "range": "stddev: 0.0007191063084968717",
            "extra": "mean: 10.368427778938608 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 240.4176274002369,
            "unit": "iter/sec",
            "range": "stddev: 0.0038775411892470416",
            "extra": "mean: 4.159428785707311 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.38664490910973,
            "unit": "iter/sec",
            "range": "stddev: 0.0000621523918163864",
            "extra": "mean: 13.264948999994028 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7874536907205423,
            "unit": "iter/sec",
            "range": "stddev: 0.0042693032541320005",
            "extra": "mean: 1.2699159478000184 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.83906232824956,
            "unit": "iter/sec",
            "range": "stddev: 0.0008321095852815523",
            "extra": "mean: 22.81070686485937 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.05529808000466,
            "unit": "iter/sec",
            "range": "stddev: 0.0004485195593665072",
            "extra": "mean: 7.404374461545488 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.71796421789917,
            "unit": "iter/sec",
            "range": "stddev: 0.0007720318945441461",
            "extra": "mean: 10.028283347370044 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.705300655126834,
            "unit": "iter/sec",
            "range": "stddev: 0.00033879295145659095",
            "extra": "mean: 17.03423692307874 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.4098484760466,
            "unit": "iter/sec",
            "range": "stddev: 0.00019566007053892478",
            "extra": "mean: 6.195408826918025 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.5218182521589,
            "unit": "iter/sec",
            "range": "stddev: 0.000027378190371191234",
            "extra": "mean: 1.8778573303948298 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.246941730910237,
            "unit": "iter/sec",
            "range": "stddev: 0.0009365180684295241",
            "extra": "mean: 39.608757791668836 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13681.4010386995,
            "unit": "iter/sec",
            "range": "stddev: 0.000001940664777578672",
            "extra": "mean: 73.0919294867082 usec\nrounds: 5928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.29988839634719,
            "unit": "iter/sec",
            "range": "stddev: 0.00016466223936043874",
            "extra": "mean: 18.761765363631287 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2042.2393030723274,
            "unit": "iter/sec",
            "range": "stddev: 0.0001755206860113357",
            "extra": "mean: 489.6585813893643 usec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.65015961453919,
            "unit": "iter/sec",
            "range": "stddev: 0.0007576328386748049",
            "extra": "mean: 10.454765617014152 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.6263015992506,
            "unit": "iter/sec",
            "range": "stddev: 0.00030234458269570464",
            "extra": "mean: 3.722643665369176 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 164.83870570824584,
            "unit": "iter/sec",
            "range": "stddev: 0.00004680031221525286",
            "extra": "mean: 6.066536349599452 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2110.866932466966,
            "unit": "iter/sec",
            "range": "stddev: 0.00009274763295812128",
            "extra": "mean: 473.73900487005216 usec\nrounds: 1232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5576584989194946,
            "unit": "iter/sec",
            "range": "stddev: 0.0024960186950842337",
            "extra": "mean: 390.98261179999554 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9315407993067347,
            "unit": "iter/sec",
            "range": "stddev: 0.009326298653924973",
            "extra": "mean: 1.0734902870000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2122.639554502256,
            "unit": "iter/sec",
            "range": "stddev: 0.00008728312585872795",
            "extra": "mean: 471.11154500015573 usec\nrounds: 1200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.59672707231954,
            "unit": "iter/sec",
            "range": "stddev: 0.0007904629099427213",
            "extra": "mean: 9.940681263726349 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12051.656452736146,
            "unit": "iter/sec",
            "range": "stddev: 0.00001515219851727769",
            "extra": "mean: 82.97614555490959 usec\nrounds: 5084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.48627988748162,
            "unit": "iter/sec",
            "range": "stddev: 0.0008354868242101488",
            "extra": "mean: 21.511723511119072 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2167.3747391741013,
            "unit": "iter/sec",
            "range": "stddev: 0.00008893345661011988",
            "extra": "mean: 461.3876788012485 usec\nrounds: 1236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.69856397703596,
            "unit": "iter/sec",
            "range": "stddev: 0.0007181904565426436",
            "extra": "mean: 10.449477593414695 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1750.6649919394163,
            "unit": "iter/sec",
            "range": "stddev: 0.000006303788122754452",
            "extra": "mean: 571.2115136843989 usec\nrounds: 1425"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 301.52197066031204,
            "unit": "iter/sec",
            "range": "stddev: 0.000026066817440470833",
            "extra": "mean: 3.3165079075666357 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.44835482868774,
            "unit": "iter/sec",
            "range": "stddev: 0.00005257008748606217",
            "extra": "mean: 3.4429528808652408 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.20058990073278,
            "unit": "iter/sec",
            "range": "stddev: 0.0001656162269650721",
            "extra": "mean: 9.881365325843413 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.8250752066685,
            "unit": "iter/sec",
            "range": "stddev: 0.00003420013145976927",
            "extra": "mean: 5.106598319671917 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2009758.5904150982,
            "unit": "iter/sec",
            "range": "stddev: 9.55662250453979e-8",
            "extra": "mean: 497.5721983571463 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.9139759140251,
            "unit": "iter/sec",
            "range": "stddev: 0.0002891491562323943",
            "extra": "mean: 9.909430194802376 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.48529999158116,
            "unit": "iter/sec",
            "range": "stddev: 0.00021054109410912998",
            "extra": "mean: 8.36923035779681 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.23402405594116,
            "unit": "iter/sec",
            "range": "stddev: 0.000555336785013704",
            "extra": "mean: 15.814271113211635 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.58372368994222,
            "unit": "iter/sec",
            "range": "stddev: 0.0007793382704499761",
            "extra": "mean: 10.247610586959679 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.9331906519751,
            "unit": "iter/sec",
            "range": "stddev: 0.00006222262054055589",
            "extra": "mean: 1.3588189970261892 msec\nrounds: 673"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.439321365741591,
            "unit": "iter/sec",
            "range": "stddev: 0.00010536567351812694",
            "extra": "mean: 64.76968619999752 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6114001.241944596,
            "unit": "iter/sec",
            "range": "stddev: 8.917603159963438e-9",
            "extra": "mean: 163.55901159096177 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.64007016474118,
            "unit": "iter/sec",
            "range": "stddev: 0.0007266875535211031",
            "extra": "mean: 10.455868531646702 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.88259787662467,
            "unit": "iter/sec",
            "range": "stddev: 0.0007161910416334812",
            "extra": "mean: 9.912512376247086 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.13539785876378,
            "unit": "iter/sec",
            "range": "stddev: 0.0007193122991798001",
            "extra": "mean: 9.887734870005715 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.92190936790572,
            "unit": "iter/sec",
            "range": "stddev: 0.033544192900029385",
            "extra": "mean: 27.83816388372289 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1176.7960414382878,
            "unit": "iter/sec",
            "range": "stddev: 0.00005149846944866256",
            "extra": "mean: 849.7649250908369 usec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 220.07658972362069,
            "unit": "iter/sec",
            "range": "stddev: 0.013154373205331768",
            "extra": "mean: 4.543872663856853 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 493167.83782625524,
            "unit": "iter/sec",
            "range": "stddev: 8.855877216457335e-8",
            "extra": "mean: 2.027707249539463 usec\nrounds: 2152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.6998183554561,
            "unit": "iter/sec",
            "range": "stddev: 0.00006477985530903573",
            "extra": "mean: 10.449340627645897 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2212.636095489145,
            "unit": "iter/sec",
            "range": "stddev: 0.00008190294635082304",
            "extra": "mean: 451.9496007674642 usec\nrounds: 1305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.69069578104606,
            "unit": "iter/sec",
            "range": "stddev: 0.00039950460344583704",
            "extra": "mean: 3.9418079442025507 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148773.75877612666,
            "unit": "iter/sec",
            "range": "stddev: 3.197087947327878e-7",
            "extra": "mean: 6.721615479950269 usec\nrounds: 38760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.60873355728677,
            "unit": "iter/sec",
            "range": "stddev: 0.0008018656227620385",
            "extra": "mean: 9.939494958761193 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12776.129031659995,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014451438179946163",
            "extra": "mean: 78.27096904875816 usec\nrounds: 5331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7018347.045872834,
            "unit": "iter/sec",
            "range": "stddev: 5.164582348484769e-9",
            "extra": "mean: 142.48369216620114 nsec\nrounds: 65360"
          }
        ]
      }
    ]
  }
}