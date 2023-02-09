window.BENCHMARK_DATA = {
  "lastUpdate": 1675951988250,
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
          "id": "94b01ed34a134f7a97c2c9b0c290d240f797b0e4",
          "message": "ci(cloud): cache virtualenvs where possible",
          "timestamp": "2023-02-09T09:05:35-05:00",
          "tree_id": "f4b18957f9f0eb73d2be934535add8d0d4d7e087",
          "url": "https://github.com/ibis-project/ibis/commit/94b01ed34a134f7a97c2c9b0c290d240f797b0e4"
        },
        "date": 1675951912234,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 225.15599939922132,
            "unit": "iter/sec",
            "range": "stddev: 0.005362231384596625",
            "extra": "mean: 4.441365109827308 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.223128023142138,
            "unit": "iter/sec",
            "range": "stddev: 0.00020937144612649108",
            "extra": "mean: 75.62507133333914 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 602.5466110304279,
            "unit": "iter/sec",
            "range": "stddev: 0.00006590273138258428",
            "extra": "mean: 1.6596226444455118 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.85236932952117,
            "unit": "iter/sec",
            "range": "stddev: 0.0002988544584787187",
            "extra": "mean: 21.34363777777853 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 60.25687037168739,
            "unit": "iter/sec",
            "range": "stddev: 0.00010087401508442272",
            "extra": "mean: 16.595617957448138 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10755.62926098295,
            "unit": "iter/sec",
            "range": "stddev: 0.000002208903973344982",
            "extra": "mean: 92.97456947754729 usec\nrounds: 4613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1350237224490401,
            "unit": "iter/sec",
            "range": "stddev: 0.07013865822936599",
            "extra": "mean: 7.406105992800002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1415319.397909971,
            "unit": "iter/sec",
            "range": "stddev: 9.980061789831747e-8",
            "extra": "mean: 706.5542954309246 nsec\nrounds: 117634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.28878261869802,
            "unit": "iter/sec",
            "range": "stddev: 0.00005688450123515885",
            "extra": "mean: 11.32646719480553 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 408.30858983302875,
            "unit": "iter/sec",
            "range": "stddev: 0.000036861934561656014",
            "extra": "mean: 2.4491279999985647 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 266.9063112314469,
            "unit": "iter/sec",
            "range": "stddev: 0.00006810039093898275",
            "extra": "mean: 3.7466330240983075 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.92194054173679,
            "unit": "iter/sec",
            "range": "stddev: 0.0006916610325058414",
            "extra": "mean: 21.31199154285842 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5722980609292966,
            "unit": "iter/sec",
            "range": "stddev: 0.04521221515010414",
            "extra": "mean: 1.7473412339999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.818480008765913,
            "unit": "iter/sec",
            "range": "stddev: 0.0002053639243941163",
            "extra": "mean: 207.53432579999753 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 265.9968165877746,
            "unit": "iter/sec",
            "range": "stddev: 0.000036261493617746725",
            "extra": "mean: 3.759443488189327 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18952.268726335227,
            "unit": "iter/sec",
            "range": "stddev: 0.00001573209989145256",
            "extra": "mean: 52.76413153695128 usec\nrounds: 4379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5042.980511386671,
            "unit": "iter/sec",
            "range": "stddev: 0.00006490431033114253",
            "extra": "mean: 198.2954321838197 usec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 580711.2550267708,
            "unit": "iter/sec",
            "range": "stddev: 7.740057723508247e-7",
            "extra": "mean: 1.7220262072480412 usec\nrounds: 19880"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5359.628507041902,
            "unit": "iter/sec",
            "range": "stddev: 0.00005271787643627861",
            "extra": "mean: 186.5800957447184 usec\nrounds: 1786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1455201.2711641996,
            "unit": "iter/sec",
            "range": "stddev: 1.131000094856949e-7",
            "extra": "mean: 687.1901638733269 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7252418460865594,
            "unit": "iter/sec",
            "range": "stddev: 0.004087073193771651",
            "extra": "mean: 1.3788503868000022 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4433469.935730246,
            "unit": "iter/sec",
            "range": "stddev: 1.1896859021681362e-8",
            "extra": "mean: 225.55695978514635 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 136.79869649498866,
            "unit": "iter/sec",
            "range": "stddev: 0.00011333392585773589",
            "extra": "mean: 7.310011174241218 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.04362899958817,
            "unit": "iter/sec",
            "range": "stddev: 0.00105169358395884",
            "extra": "mean: 30.263019839995877 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 149.28115851009701,
            "unit": "iter/sec",
            "range": "stddev: 0.0008384623710061024",
            "extra": "mean: 6.698769020688987 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 151.47410184231057,
            "unit": "iter/sec",
            "range": "stddev: 0.000856078967295279",
            "extra": "mean: 6.601788608332744 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.9935671365012,
            "unit": "iter/sec",
            "range": "stddev: 0.00007853602063673636",
            "extra": "mean: 3.7736765114939135 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 233.92264134213258,
            "unit": "iter/sec",
            "range": "stddev: 0.00023761312164144208",
            "extra": "mean: 4.274917529412689 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.29088659699302,
            "unit": "iter/sec",
            "range": "stddev: 0.0008022086503255843",
            "extra": "mean: 11.72458207317141 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 135.9700201515271,
            "unit": "iter/sec",
            "range": "stddev: 0.0008658208928345568",
            "extra": "mean: 7.354562416667913 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.04366331995942,
            "unit": "iter/sec",
            "range": "stddev: 0.0006461144460258063",
            "extra": "mean: 27.744127757575722 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1680802.551225078,
            "unit": "iter/sec",
            "range": "stddev: 1.0235257934686532e-7",
            "extra": "mean: 594.9538803776417 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 309.6071381820193,
            "unit": "iter/sec",
            "range": "stddev: 0.02478383297649279",
            "extra": "mean: 3.2298996911760347 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4377821.936486149,
            "unit": "iter/sec",
            "range": "stddev: 1.2289831126794804e-8",
            "extra": "mean: 228.42409182191682 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4730.872806882387,
            "unit": "iter/sec",
            "range": "stddev: 0.00008369880444600379",
            "extra": "mean: 211.3774858933469 usec\nrounds: 1595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.76410172346323,
            "unit": "iter/sec",
            "range": "stddev: 0.0007371115690435083",
            "extra": "mean: 11.938288352943554 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1412884.6803477905,
            "unit": "iter/sec",
            "range": "stddev: 1.355909012589508e-7",
            "extra": "mean: 707.7718471360619 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.152261007924494,
            "unit": "iter/sec",
            "range": "stddev: 0.0002100735028456482",
            "extra": "mean: 28.44767225000311 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123630.11311952185,
            "unit": "iter/sec",
            "range": "stddev: 4.3623268162164e-7",
            "extra": "mean: 8.08864422079134 usec\nrounds: 34364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10720512.910168651,
            "unit": "iter/sec",
            "range": "stddev: 4.545258350306294e-9",
            "extra": "mean: 93.27911904771325 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.0674600932335,
            "unit": "iter/sec",
            "range": "stddev: 0.00025082294559175674",
            "extra": "mean: 4.063926207963889 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 215.38068196650667,
            "unit": "iter/sec",
            "range": "stddev: 0.0005100123906516201",
            "extra": "mean: 4.642941933648013 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 118.30708905864243,
            "unit": "iter/sec",
            "range": "stddev: 0.014797045417458658",
            "extra": "mean: 8.452578860293995 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 137.73255492964117,
            "unit": "iter/sec",
            "range": "stddev: 0.00010992251113110535",
            "extra": "mean: 7.260447615386476 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 244.09546358423913,
            "unit": "iter/sec",
            "range": "stddev: 0.0002810430439131472",
            "extra": "mean: 4.096757823010065 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 507.17068784522723,
            "unit": "iter/sec",
            "range": "stddev: 0.000053081338370480285",
            "extra": "mean: 1.9717227828142327 msec\nrounds: 419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.36300130783182,
            "unit": "iter/sec",
            "range": "stddev: 0.000886786182286682",
            "extra": "mean: 11.44649319540208 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.83950040363894,
            "unit": "iter/sec",
            "range": "stddev: 0.000894877526117762",
            "extra": "mean: 13.185740869569575 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4500.107324522117,
            "unit": "iter/sec",
            "range": "stddev: 0.00006517262473072248",
            "extra": "mean: 222.21692237222223 usec\nrounds: 2074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5218.871726862449,
            "unit": "iter/sec",
            "range": "stddev: 0.00005462968181740215",
            "extra": "mean: 191.61229712790688 usec\nrounds: 3167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.38102225599165,
            "unit": "iter/sec",
            "range": "stddev: 0.00028235080798731817",
            "extra": "mean: 11.851005987652547 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.96253397305486,
            "unit": "iter/sec",
            "range": "stddev: 0.00014043544959831374",
            "extra": "mean: 10.313261824179351 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5411702.453974332,
            "unit": "iter/sec",
            "range": "stddev: 5.423114975995998e-9",
            "extra": "mean: 184.78473428741393 nsec\nrounds: 53761"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 168.7793341914246,
            "unit": "iter/sec",
            "range": "stddev: 0.00003871226775078846",
            "extra": "mean: 5.9248959879521115 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59345.36717322968,
            "unit": "iter/sec",
            "range": "stddev: 7.981072280604972e-7",
            "extra": "mean: 16.85051500449885 usec\nrounds: 12563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.47578097530912,
            "unit": "iter/sec",
            "range": "stddev: 0.02113574707407075",
            "extra": "mean: 14.39350498780846 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5475.177472353402,
            "unit": "iter/sec",
            "range": "stddev: 0.000051571171077660025",
            "extra": "mean: 182.64248146282807 usec\nrounds: 1969"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.22026406642505,
            "unit": "iter/sec",
            "range": "stddev: 0.00007409856393050506",
            "extra": "mean: 14.87646640322374 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.093180278014463,
            "unit": "iter/sec",
            "range": "stddev: 0.00041100628112079743",
            "extra": "mean: 109.9725254999953 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 151.20761152840132,
            "unit": "iter/sec",
            "range": "stddev: 0.0009093665713144762",
            "extra": "mean: 6.613423688741821 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 147.1059409953569,
            "unit": "iter/sec",
            "range": "stddev: 0.00093573743585488",
            "extra": "mean: 6.797821986207635 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10661.288959081598,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019934312551250054",
            "extra": "mean: 93.79728884922218 usec\nrounds: 4968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.47946413607314,
            "unit": "iter/sec",
            "range": "stddev: 0.0007706086187359316",
            "extra": "mean: 46.55609626315469 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.232113505846722,
            "unit": "iter/sec",
            "range": "stddev: 0.003369286785199721",
            "extra": "mean: 448.0058910000025 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 376890.41367846564,
            "unit": "iter/sec",
            "range": "stddev: 4.0029861567564886e-7",
            "extra": "mean: 2.6532911523006377 usec\nrounds: 1944"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 87.14436953976812,
            "unit": "iter/sec",
            "range": "stddev: 0.0008759952982173151",
            "extra": "mean: 11.475210679488047 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 940.204908986893,
            "unit": "iter/sec",
            "range": "stddev: 0.0001563794104980403",
            "extra": "mean: 1.0635979353453264 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 113.81665386745026,
            "unit": "iter/sec",
            "range": "stddev: 0.0002720075834924225",
            "extra": "mean: 8.78606044036921 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1442.2219727726592,
            "unit": "iter/sec",
            "range": "stddev: 0.00001416471600932224",
            "extra": "mean: 693.374542115392 usec\nrounds: 1116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 70.34184169129904,
            "unit": "iter/sec",
            "range": "stddev: 0.0005410513457660543",
            "extra": "mean: 14.216289706894258 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 111.92352530251829,
            "unit": "iter/sec",
            "range": "stddev: 0.01734346693880133",
            "extra": "mean: 8.93467211023865 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.07110889648954,
            "unit": "iter/sec",
            "range": "stddev: 0.0006950513275079267",
            "extra": "mean: 31.18071168750447 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4070.8862680863576,
            "unit": "iter/sec",
            "range": "stddev: 0.000028477473271635964",
            "extra": "mean: 245.64675457516034 usec\nrounds: 1858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 242.54787330735604,
            "unit": "iter/sec",
            "range": "stddev: 0.0002731631242796047",
            "extra": "mean: 4.122897415525069 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7330939634825974,
            "unit": "iter/sec",
            "range": "stddev: 0.01293425037625491",
            "extra": "mean: 1.3640816182000095 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5819275534129558,
            "unit": "iter/sec",
            "range": "stddev: 0.0022481981456485504",
            "extra": "mean: 632.1402000000148 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 249.22450334328792,
            "unit": "iter/sec",
            "range": "stddev: 0.0002316236611305406",
            "extra": "mean: 4.012446555556279 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9634.642138528854,
            "unit": "iter/sec",
            "range": "stddev: 0.00002265968360702551",
            "extra": "mean: 103.79212695415103 usec\nrounds: 4222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7513283770835962,
            "unit": "iter/sec",
            "range": "stddev: 0.0033541900358411625",
            "extra": "mean: 1.330975949399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 148.65682646645826,
            "unit": "iter/sec",
            "range": "stddev: 0.0009186137321205558",
            "extra": "mean: 6.726902650687435 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 236.11396384876224,
            "unit": "iter/sec",
            "range": "stddev: 0.00011788930623619994",
            "extra": "mean: 4.235242946666757 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.33750435572749,
            "unit": "iter/sec",
            "range": "stddev: 0.0009144700401101171",
            "extra": "mean: 11.582451999999947 msec\nrounds: 87"
          }
        ]
      }
    ]
  }
}