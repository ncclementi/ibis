window.BENCHMARK_DATA = {
  "lastUpdate": 1675876353471,
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
          "id": "c440adb4fc747056c67c49854c90159fda1552ab",
          "message": "fix(snowflake): remove broken pyarrow fetch support",
          "timestamp": "2023-02-08T12:07:10-05:00",
          "tree_id": "e9cba630927ca4322307b9fd3c4bb101d4556791",
          "url": "https://github.com/ibis-project/ibis/commit/c440adb4fc747056c67c49854c90159fda1552ab"
        },
        "date": 1675876271216,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.10318354652622,
            "unit": "iter/sec",
            "range": "stddev: 0.00012222192226630008",
            "extra": "mean: 6.9879647343755735 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.081615411522256,
            "unit": "iter/sec",
            "range": "stddev: 0.006180703563753879",
            "extra": "mean: 110.11256859999321 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.22654950680149,
            "unit": "iter/sec",
            "range": "stddev: 0.000585858382485914",
            "extra": "mean: 12.464701600001149 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 119.9654017440689,
            "unit": "iter/sec",
            "range": "stddev: 0.00011847789895439681",
            "extra": "mean: 8.335736682926084 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 158.04415840526718,
            "unit": "iter/sec",
            "range": "stddev: 0.0006691408982964927",
            "extra": "mean: 6.327345534883577 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.170945888686347,
            "unit": "iter/sec",
            "range": "stddev: 0.0005828686479648323",
            "extra": "mean: 41.37198455555967 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 219.09687537647667,
            "unit": "iter/sec",
            "range": "stddev: 0.00037817908256729824",
            "extra": "mean: 4.564191060605901 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.827126287603264,
            "unit": "iter/sec",
            "range": "stddev: 0.0006315727735300114",
            "extra": "mean: 25.755189621624925 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.26472879987134,
            "unit": "iter/sec",
            "range": "stddev: 0.0002375982837133824",
            "extra": "mean: 11.329553872729488 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8694973851027883,
            "unit": "iter/sec",
            "range": "stddev: 0.0028032284643134103",
            "extra": "mean: 1.150089715199988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.34878500297236,
            "unit": "iter/sec",
            "range": "stddev: 0.0006333571822009018",
            "extra": "mean: 18.067243932207322 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 248.89896114169633,
            "unit": "iter/sec",
            "range": "stddev: 0.0002339499330717075",
            "extra": "mean: 4.017694551287048 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.43047906824388,
            "unit": "iter/sec",
            "range": "stddev: 0.0007657022809602688",
            "extra": "mean: 10.9372717959139 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 156.93176614242986,
            "unit": "iter/sec",
            "range": "stddev: 0.0007834024953568863",
            "extra": "mean: 6.372196175326345 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 143.3471973461066,
            "unit": "iter/sec",
            "range": "stddev: 0.0006284557537013438",
            "extra": "mean: 6.976069421054227 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 253.7336468272364,
            "unit": "iter/sec",
            "range": "stddev: 0.00022771921050191866",
            "extra": "mean: 3.941140690264408 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 251.33681754055428,
            "unit": "iter/sec",
            "range": "stddev: 0.0002275502500169513",
            "extra": "mean: 3.9787246842124344 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 255.9419170381437,
            "unit": "iter/sec",
            "range": "stddev: 0.00010868577884311386",
            "extra": "mean: 3.9071364767927688 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.0684856035908,
            "unit": "iter/sec",
            "range": "stddev: 0.00019766025727305095",
            "extra": "mean: 23.770762974996273 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 627.2521413390975,
            "unit": "iter/sec",
            "range": "stddev: 0.00001881320787591796",
            "extra": "mean: 1.5942552190657122 msec\nrounds: 493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 325.4488028372217,
            "unit": "iter/sec",
            "range": "stddev: 0.00003325863585322557",
            "extra": "mean: 3.0726799154955433 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.21459129946081,
            "unit": "iter/sec",
            "range": "stddev: 0.0002498136876505695",
            "extra": "mean: 19.52568544680602 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 582431.2337435093,
            "unit": "iter/sec",
            "range": "stddev: 6.789666738727056e-7",
            "extra": "mean: 1.7169408885794395 usec\nrounds: 17763"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7424375792984326,
            "unit": "iter/sec",
            "range": "stddev: 0.007406011762343714",
            "extra": "mean: 1.3469145796000135 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 129.33657068439,
            "unit": "iter/sec",
            "range": "stddev: 0.010790467645082675",
            "extra": "mean: 7.731765228569592 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 132.1944355620528,
            "unit": "iter/sec",
            "range": "stddev: 0.00014694242661433078",
            "extra": "mean: 7.56461492307363 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11980203.706239875,
            "unit": "iter/sec",
            "range": "stddev: 1.0828274325332359e-8",
            "extra": "mean: 83.47103476032159 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5218.898928707675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000861434190733807",
            "extra": "mean: 191.61129840995486 usec\nrounds: 2138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.57132880577694,
            "unit": "iter/sec",
            "range": "stddev: 0.00023404188004965302",
            "extra": "mean: 4.055621571426479 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.17726693743468,
            "unit": "iter/sec",
            "range": "stddev: 0.00017593058642192085",
            "extra": "mean: 14.885988156251528 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.81247701185276,
            "unit": "iter/sec",
            "range": "stddev: 0.0007962296254090066",
            "extra": "mean: 11.387903337073864 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 416.90534883899994,
            "unit": "iter/sec",
            "range": "stddev: 0.00011277065933862414",
            "extra": "mean: 2.3986259777784213 msec\nrounds: 360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2000912.2900156758,
            "unit": "iter/sec",
            "range": "stddev: 2.3736890584091948e-8",
            "extra": "mean: 499.7720314829109 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1455.2788878636159,
            "unit": "iter/sec",
            "range": "stddev: 0.00002919688465920406",
            "extra": "mean: 687.153512869292 usec\nrounds: 1088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5424558.76855881,
            "unit": "iter/sec",
            "range": "stddev: 5.600552298460791e-9",
            "extra": "mean: 184.34679070970148 nsec\nrounds: 55249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5734144267772538,
            "unit": "iter/sec",
            "range": "stddev: 0.0011604809929615034",
            "extra": "mean: 635.5604619999895 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 977.4712034348046,
            "unit": "iter/sec",
            "range": "stddev: 0.00008402499776686465",
            "extra": "mean: 1.0230480411965386 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.18257212151423,
            "unit": "iter/sec",
            "range": "stddev: 0.023266247827050095",
            "extra": "mean: 31.072718371428568 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.56776191656265,
            "unit": "iter/sec",
            "range": "stddev: 0.0006935619341514537",
            "extra": "mean: 11.55164437500231 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2001460.0982110407,
            "unit": "iter/sec",
            "range": "stddev: 2.1317603431546857e-8",
            "extra": "mean: 499.63524173885656 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.47936624730333,
            "unit": "iter/sec",
            "range": "stddev: 0.00015647343163474898",
            "extra": "mean: 14.188549830188943 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.861457987875947,
            "unit": "iter/sec",
            "range": "stddev: 0.005201143139390183",
            "extra": "mean: 1.1608227145999876 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4350303.636483997,
            "unit": "iter/sec",
            "range": "stddev: 1.6730395603383498e-8",
            "extra": "mean: 229.86901227158992 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5736.166599488503,
            "unit": "iter/sec",
            "range": "stddev: 0.00010002762099679152",
            "extra": "mean: 174.33245402760278 usec\nrounds: 2284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.55265717285971,
            "unit": "iter/sec",
            "range": "stddev: 0.00011918625285023251",
            "extra": "mean: 9.751088148934354 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5154.747189512591,
            "unit": "iter/sec",
            "range": "stddev: 0.00005188843890746164",
            "extra": "mean: 193.99593486068818 usec\nrounds: 2487"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.53173776894313,
            "unit": "iter/sec",
            "range": "stddev: 0.0006926186740983508",
            "extra": "mean: 11.424427590363766 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1590033.3758637996,
            "unit": "iter/sec",
            "range": "stddev: 1.1321354507140439e-7",
            "extra": "mean: 628.9176159316412 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 246.44846723728241,
            "unit": "iter/sec",
            "range": "stddev: 0.0002898609479749051",
            "extra": "mean: 4.057643414098383 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1563335.6861878014,
            "unit": "iter/sec",
            "range": "stddev: 5.088340097051049e-7",
            "extra": "mean: 639.6578859134872 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4607974.247263796,
            "unit": "iter/sec",
            "range": "stddev: 2.013274231625335e-8",
            "extra": "mean: 217.01510172179627 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5878592414599632,
            "unit": "iter/sec",
            "range": "stddev: 0.0015830647493372159",
            "extra": "mean: 1.7010874874000024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5327.732866224313,
            "unit": "iter/sec",
            "range": "stddev: 0.00004626393105781915",
            "extra": "mean: 187.69709839237595 usec\nrounds: 2053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.34558612059921,
            "unit": "iter/sec",
            "range": "stddev: 0.00013160948275016304",
            "extra": "mean: 10.712879328949043 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6101.431363039636,
            "unit": "iter/sec",
            "range": "stddev: 0.00004610413230801172",
            "extra": "mean: 163.89596809326653 usec\nrounds: 2476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.86740658775078,
            "unit": "iter/sec",
            "range": "stddev: 0.00024028373831033574",
            "extra": "mean: 205.44821599999068 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 237.6236388854927,
            "unit": "iter/sec",
            "range": "stddev: 0.00023829776357805826",
            "extra": "mean: 4.2083355203641375 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4577.669310909085,
            "unit": "iter/sec",
            "range": "stddev: 0.000020876890643494944",
            "extra": "mean: 218.45177798599192 usec\nrounds: 2126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.560143631390645,
            "unit": "iter/sec",
            "range": "stddev: 0.0007448576776521159",
            "extra": "mean: 28.93506493102967 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19375.53860161057,
            "unit": "iter/sec",
            "range": "stddev: 0.00002897225849341733",
            "extra": "mean: 51.611468489287624 usec\nrounds: 5522"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9823.569092817239,
            "unit": "iter/sec",
            "range": "stddev: 0.000013363430193739859",
            "extra": "mean: 101.79599599204492 usec\nrounds: 3742"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.88356248386752,
            "unit": "iter/sec",
            "range": "stddev: 0.00015085601500911317",
            "extra": "mean: 10.883339445785802 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 519.1170587861719,
            "unit": "iter/sec",
            "range": "stddev: 0.00002453207767257873",
            "extra": "mean: 1.9263477920341416 msec\nrounds: 452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 391574.14782915276,
            "unit": "iter/sec",
            "range": "stddev: 3.1369074661757273e-7",
            "extra": "mean: 2.5537947424361347 usec\nrounds: 1788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6139.793044499507,
            "unit": "iter/sec",
            "range": "stddev: 0.00004633485002090949",
            "extra": "mean: 162.87193929050684 usec\nrounds: 2339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.6111705458873,
            "unit": "iter/sec",
            "range": "stddev: 0.000042771790367157",
            "extra": "mean: 5.793367815289555 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.93920787747896,
            "unit": "iter/sec",
            "range": "stddev: 0.00009029150840816236",
            "extra": "mean: 6.947377401515228 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 282.5435325622328,
            "unit": "iter/sec",
            "range": "stddev: 0.00005500103258253832",
            "extra": "mean: 3.5392776147857523 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15259198961148754,
            "unit": "iter/sec",
            "range": "stddev: 0.07964454718862328",
            "extra": "mean: 6.553423954600021 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.568607468943382,
            "unit": "iter/sec",
            "range": "stddev: 0.00020861657142004505",
            "extra": "mean: 73.69953050000585 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56074.67283418632,
            "unit": "iter/sec",
            "range": "stddev: 5.561794849265119e-7",
            "extra": "mean: 17.83336307564407 usec\nrounds: 12485"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.38428223079585,
            "unit": "iter/sec",
            "range": "stddev: 0.0007262138960922592",
            "extra": "mean: 10.708440179778183 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.18114621438622,
            "unit": "iter/sec",
            "range": "stddev: 0.0007543007803816657",
            "extra": "mean: 10.967179526881443 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.7336386388674,
            "unit": "iter/sec",
            "range": "stddev: 0.000012839744719675112",
            "extra": "mean: 3.7631667752798217 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 159.68514423288542,
            "unit": "iter/sec",
            "range": "stddev: 0.0007503445230582306",
            "extra": "mean: 6.262323303798356 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120234.24203617079,
            "unit": "iter/sec",
            "range": "stddev: 3.7870291755174415e-7",
            "extra": "mean: 8.317098216489477 usec\nrounds: 40818"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10751.34488570205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018982788114781664",
            "extra": "mean: 93.01161953514071 usec\nrounds: 4986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.24074580854416,
            "unit": "iter/sec",
            "range": "stddev: 0.001731674130061603",
            "extra": "mean: 446.27998240001716 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 155.35765933368685,
            "unit": "iter/sec",
            "range": "stddev: 0.0008027576304294035",
            "extra": "mean: 6.436760210529033 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 156.94625948864888,
            "unit": "iter/sec",
            "range": "stddev: 0.0007753019135444154",
            "extra": "mean: 6.371607729028579 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10405.03815348333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018433180711338293",
            "extra": "mean: 96.10728814725456 usec\nrounds: 5695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5983.1238374697205,
            "unit": "iter/sec",
            "range": "stddev: 0.00005090958066415583",
            "extra": "mean: 167.13677121931389 usec\nrounds: 2592"
          }
        ]
      }
    ]
  }
}