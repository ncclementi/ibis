window.BENCHMARK_DATA = {
  "lastUpdate": 1678896112879,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "a5461e562ddc74e6f4eceabd27fe14612a43a68e",
          "message": "test(backends): strict validate exceptions in test_aggregation",
          "timestamp": "2023-03-15T11:55:35-04:00",
          "tree_id": "ca1c1f2be6d2f621954c7f37a3346f8919ee2578",
          "url": "https://github.com/ibis-project/ibis/commit/a5461e562ddc74e6f4eceabd27fe14612a43a68e"
        },
        "date": 1678896017563,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14482136882817617,
            "unit": "iter/sec",
            "range": "stddev: 0.05721050089017334",
            "extra": "mean: 6.905058335600001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 113.19248578361314,
            "unit": "iter/sec",
            "range": "stddev: 0.0004684679274075245",
            "extra": "mean: 8.834508696201544 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1571396.7865418403,
            "unit": "iter/sec",
            "range": "stddev: 1.3257708232910959e-7",
            "extra": "mean: 636.3765081896926 nsec\nrounds: 90091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 74.9307560200481,
            "unit": "iter/sec",
            "range": "stddev: 0.0002355545603786043",
            "extra": "mean: 13.345654749999387 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11921.266061297374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022827155634481744",
            "extra": "mean: 83.88370789294937 usec\nrounds: 4447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 72.2165344521856,
            "unit": "iter/sec",
            "range": "stddev: 0.016522722759062004",
            "extra": "mean: 13.84724436842227 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.87759521483827,
            "unit": "iter/sec",
            "range": "stddev: 0.00018755972524716632",
            "extra": "mean: 23.322203472221286 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4729.353340601844,
            "unit": "iter/sec",
            "range": "stddev: 0.00005899628729237044",
            "extra": "mean: 211.44539812978806 usec\nrounds: 2032"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4293.860282382233,
            "unit": "iter/sec",
            "range": "stddev: 0.00006749831902212143",
            "extra": "mean: 232.89067045404656 usec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4324.1665724633285,
            "unit": "iter/sec",
            "range": "stddev: 0.00003908616243993192",
            "extra": "mean: 231.25843633501253 usec\nrounds: 1932"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.7216991948901,
            "unit": "iter/sec",
            "range": "stddev: 0.00006706131715459271",
            "extra": "mean: 5.891998517241497 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4537.2121162036765,
            "unit": "iter/sec",
            "range": "stddev: 0.00007149073696553556",
            "extra": "mean: 220.39965828988142 usec\nrounds: 398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.663176478417503,
            "unit": "iter/sec",
            "range": "stddev: 0.0050467674753791525",
            "extra": "mean: 1.5078942522000147 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1586709.7718802483,
            "unit": "iter/sec",
            "range": "stddev: 1.573434456716512e-7",
            "extra": "mean: 630.2349791512293 nsec\nrounds: 98030"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 241.67227547688236,
            "unit": "iter/sec",
            "range": "stddev: 0.000317005268952268",
            "extra": "mean: 4.137835000008749 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.335272757507,
            "unit": "iter/sec",
            "range": "stddev: 0.0006699758877600362",
            "extra": "mean: 11.718483666673805 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 261.8148523183173,
            "unit": "iter/sec",
            "range": "stddev: 0.00028603793323542947",
            "extra": "mean: 3.8194930163250986 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5073949.2450847635,
            "unit": "iter/sec",
            "range": "stddev: 1.2637618399969655e-8",
            "extra": "mean: 197.08514052787356 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 99.15544089505165,
            "unit": "iter/sec",
            "range": "stddev: 0.0008077187166618513",
            "extra": "mean: 10.085175265958652 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 451.84952502176185,
            "unit": "iter/sec",
            "range": "stddev: 0.00004850364887581466",
            "extra": "mean: 2.21312615068443 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 151.76646581390776,
            "unit": "iter/sec",
            "range": "stddev: 0.004753905778922403",
            "extra": "mean: 6.5890708770024 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9981298.185128314,
            "unit": "iter/sec",
            "range": "stddev: 5.95270477720078e-9",
            "extra": "mean: 100.18736856190753 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 24.493064142882517,
            "unit": "iter/sec",
            "range": "stddev: 0.03715211416975585",
            "extra": "mean: 40.82788475000143 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.759896688422839,
            "unit": "iter/sec",
            "range": "stddev: 0.000142456468754833",
            "extra": "mean: 210.0885933999848 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 577.8878852815233,
            "unit": "iter/sec",
            "range": "stddev: 0.00006207572298651224",
            "extra": "mean: 1.7304394597454504 msec\nrounds: 472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4374.691159750253,
            "unit": "iter/sec",
            "range": "stddev: 0.00006572079543195967",
            "extra": "mean: 228.58756503786864 usec\nrounds: 1699"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 298.6426052246827,
            "unit": "iter/sec",
            "range": "stddev: 0.00002948332699982584",
            "extra": "mean: 3.348484049178628 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10300.292348145615,
            "unit": "iter/sec",
            "range": "stddev: 0.000016692740184040923",
            "extra": "mean: 97.0846230573283 usec\nrounds: 3539"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 103.95722188595118,
            "unit": "iter/sec",
            "range": "stddev: 0.004577140186117132",
            "extra": "mean: 9.61934132000059 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.10655107871587,
            "unit": "iter/sec",
            "range": "stddev: 0.0008793461097901054",
            "extra": "mean: 10.192999234043496 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4447.795856301024,
            "unit": "iter/sec",
            "range": "stddev: 0.00015831470332371676",
            "extra": "mean: 224.8304626174193 usec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 248.69507016759636,
            "unit": "iter/sec",
            "range": "stddev: 0.00010196103060988857",
            "extra": "mean: 4.020988431037644 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 259.72916401234164,
            "unit": "iter/sec",
            "range": "stddev: 0.00031325796860703263",
            "extra": "mean: 3.8501644734531335 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1496220.0635132089,
            "unit": "iter/sec",
            "range": "stddev: 1.3404821626291296e-7",
            "extra": "mean: 668.3508825913908 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 131.80406075192184,
            "unit": "iter/sec",
            "range": "stddev: 0.00028541104877747756",
            "extra": "mean: 7.587019658538244 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4874879644931724,
            "unit": "iter/sec",
            "range": "stddev: 0.002676245968693169",
            "extra": "mean: 672.2743469999955 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.04030143095802,
            "unit": "iter/sec",
            "range": "stddev: 0.000922542101937503",
            "extra": "mean: 10.6337387777747 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.804515972048335,
            "unit": "iter/sec",
            "range": "stddev: 0.0011438656227671313",
            "extra": "mean: 32.462772695645945 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.44077320996428,
            "unit": "iter/sec",
            "range": "stddev: 0.0008785913901232888",
            "extra": "mean: 11.9845485789504 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.06729333013217,
            "unit": "iter/sec",
            "range": "stddev: 0.0010032978373241354",
            "extra": "mean: 13.146254536230158 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 92.32152595029568,
            "unit": "iter/sec",
            "range": "stddev: 0.00015106065141258333",
            "extra": "mean: 10.831710044939928 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7241.028824048136,
            "unit": "iter/sec",
            "range": "stddev: 0.000016309937597469264",
            "extra": "mean: 138.10192229575253 usec\nrounds: 3050"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1961334018833885,
            "unit": "iter/sec",
            "range": "stddev: 0.0026667713005690506",
            "extra": "mean: 455.345745000011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.90507505863334,
            "unit": "iter/sec",
            "range": "stddev: 0.0008164390646567886",
            "extra": "mean: 11.375907469881488 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7162631089108005,
            "unit": "iter/sec",
            "range": "stddev: 0.004815994643923115",
            "extra": "mean: 1.3961350061999838 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4396.94915557869,
            "unit": "iter/sec",
            "range": "stddev: 0.00006203959262515103",
            "extra": "mean: 227.43042155291613 usec\nrounds: 1893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139973.6841513785,
            "unit": "iter/sec",
            "range": "stddev: 6.318192315153849e-7",
            "extra": "mean: 7.144200040619935 usec\nrounds: 34483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.882175754930678,
            "unit": "iter/sec",
            "range": "stddev: 0.0008852541392583477",
            "extra": "mean: 33.46476535715429 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 82.11712099488543,
            "unit": "iter/sec",
            "range": "stddev: 0.0001397843306197183",
            "extra": "mean: 12.177728443040325 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4456128.223574314,
            "unit": "iter/sec",
            "range": "stddev: 1.6262666230610203e-8",
            "extra": "mean: 224.41005954691076 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 87.30562480923723,
            "unit": "iter/sec",
            "range": "stddev: 0.0009081530380964501",
            "extra": "mean: 11.45401573134606 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.03140623885713,
            "unit": "iter/sec",
            "range": "stddev: 0.0009743330461580208",
            "extra": "mean: 12.19045297222168 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.943374465044748,
            "unit": "iter/sec",
            "range": "stddev: 0.0007371254239045538",
            "extra": "mean: 52.78890526316996 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.342502618764634,
            "unit": "iter/sec",
            "range": "stddev: 0.00032072749704966557",
            "extra": "mean: 29.118437031248945 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 232.2160568517572,
            "unit": "iter/sec",
            "range": "stddev: 0.0003817609753722774",
            "extra": "mean: 4.306334426470703 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 252.14063105129497,
            "unit": "iter/sec",
            "range": "stddev: 0.0003282494084504829",
            "extra": "mean: 3.966040680673009 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 65.49856711566127,
            "unit": "iter/sec",
            "range": "stddev: 0.00027238168056692224",
            "extra": "mean: 15.267509566035855 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 91.66384769783411,
            "unit": "iter/sec",
            "range": "stddev: 0.0010094140120935448",
            "extra": "mean: 10.909426399996391 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 979.8138334136655,
            "unit": "iter/sec",
            "range": "stddev: 0.000014540187058363031",
            "extra": "mean: 1.020602042855433 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 97.22115573429723,
            "unit": "iter/sec",
            "range": "stddev: 0.0009543160602335011",
            "extra": "mean: 10.285827117021451 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 37.43748695626845,
            "unit": "iter/sec",
            "range": "stddev: 0.003864485173138408",
            "extra": "mean: 26.711194615389697 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4418.492250517512,
            "unit": "iter/sec",
            "range": "stddev: 0.00008531792577209235",
            "extra": "mean: 226.32154665041588 usec\nrounds: 1672"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60611.05783004626,
            "unit": "iter/sec",
            "range": "stddev: 0.000011084713398365554",
            "extra": "mean: 16.498639617939116 usec\nrounds: 11313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 635.4695154102828,
            "unit": "iter/sec",
            "range": "stddev: 0.000027587556673750436",
            "extra": "mean: 1.573639609375066 msec\nrounds: 512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 136.35320032873162,
            "unit": "iter/sec",
            "range": "stddev: 0.00010536091245838948",
            "extra": "mean: 7.33389460305381 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4740.96539026802,
            "unit": "iter/sec",
            "range": "stddev: 0.000058772075696739904",
            "extra": "mean: 210.9275047762935 usec\nrounds: 1989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 98.18957596472482,
            "unit": "iter/sec",
            "range": "stddev: 0.00015374976547631247",
            "extra": "mean: 10.184380471907282 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 402850.4326981557,
            "unit": "iter/sec",
            "range": "stddev: 5.078858966967221e-7",
            "extra": "mean: 2.482310849965678 usec\nrounds: 1705"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5834377819500692,
            "unit": "iter/sec",
            "range": "stddev: 0.002117747570000737",
            "extra": "mean: 1.7139788181999847 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1487.2631458351402,
            "unit": "iter/sec",
            "range": "stddev: 0.000010736365404103009",
            "extra": "mean: 672.375969780702 usec\nrounds: 1092"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.79100608355353,
            "unit": "iter/sec",
            "range": "stddev: 0.0008958610920156801",
            "extra": "mean: 10.1223789456526 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1619105.9644799882,
            "unit": "iter/sec",
            "range": "stddev: 9.019799128820249e-8",
            "extra": "mean: 617.6248015497689 nsec\nrounds: 81301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.926237249410065,
            "unit": "iter/sec",
            "range": "stddev: 0.0002730190345524706",
            "extra": "mean: 112.02928760000077 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 123.68110980487393,
            "unit": "iter/sec",
            "range": "stddev: 0.00012169006562716269",
            "extra": "mean: 8.085309078950331 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 84.9022994399508,
            "unit": "iter/sec",
            "range": "stddev: 0.0008647671091083924",
            "extra": "mean: 11.778244012192793 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 643732.2564985704,
            "unit": "iter/sec",
            "range": "stddev: 2.5830676050361587e-7",
            "extra": "mean: 1.5534408753093463 usec\nrounds: 20203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5534976.719058888,
            "unit": "iter/sec",
            "range": "stddev: 1.4684936700265945e-8",
            "extra": "mean: 180.66923327002598 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6647872897752385,
            "unit": "iter/sec",
            "range": "stddev: 0.00453992294317265",
            "extra": "mean: 1.5042405523999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.251530788204633,
            "unit": "iter/sec",
            "range": "stddev: 0.00005945824405896534",
            "extra": "mean: 75.46297978571 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.39034318009123,
            "unit": "iter/sec",
            "range": "stddev: 0.0001467177751175123",
            "extra": "mean: 19.458908777776035 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 259.0038374523837,
            "unit": "iter/sec",
            "range": "stddev: 0.0002812871915722022",
            "extra": "mean: 3.8609466556025214 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 245.4864088986378,
            "unit": "iter/sec",
            "range": "stddev: 0.00030614057316890334",
            "extra": "mean: 4.073545270740033 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10801.530265238303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028369450733879295",
            "extra": "mean: 92.57947489331391 usec\nrounds: 4441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 63.54006015186366,
            "unit": "iter/sec",
            "range": "stddev: 0.00011686811976124676",
            "extra": "mean: 15.738102822218831 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 81.6084220217939,
            "unit": "iter/sec",
            "range": "stddev: 0.02025694870971157",
            "extra": "mean: 12.253637250000319 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 227.7540850194035,
            "unit": "iter/sec",
            "range": "stddev: 0.00011416967821905183",
            "extra": "mean: 4.390700609891607 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.72237662797473,
            "unit": "iter/sec",
            "range": "stddev: 0.0009754592343269514",
            "extra": "mean: 10.23307081250143 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 251.0376506612222,
            "unit": "iter/sec",
            "range": "stddev: 0.0003745284740090373",
            "extra": "mean: 3.9834662145938813 msec\nrounds: 233"
          }
        ]
      }
    ]
  }
}