window.BENCHMARK_DATA = {
  "lastUpdate": 1676373435104,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "40033e10a176d1b1542d93bd283ed04a37e8bba4",
          "message": "refactor(tests): reorganize `schema` test file to the `ibis.expr` subpackage",
          "timestamp": "2023-02-14T06:11:37-05:00",
          "tree_id": "dd637b1ecbe3e898d16b603ae6953f0cca534059",
          "url": "https://github.com/ibis-project/ibis/commit/40033e10a176d1b1542d93bd283ed04a37e8bba4"
        },
        "date": 1676373349672,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.56089193333349,
            "unit": "iter/sec",
            "range": "stddev: 0.0005157736368584913",
            "extra": "mean: 16.512306342859315 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5857978037908831,
            "unit": "iter/sec",
            "range": "stddev: 0.018441574098204606",
            "extra": "mean: 1.7070736584000201 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.03161320297822,
            "unit": "iter/sec",
            "range": "stddev: 0.0005768772994175922",
            "extra": "mean: 24.980257351347593 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 158.53872565605383,
            "unit": "iter/sec",
            "range": "stddev: 0.0006341844079538588",
            "extra": "mean: 6.307607153153718 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4553.03304013285,
            "unit": "iter/sec",
            "range": "stddev: 0.001226554730912909",
            "extra": "mean: 219.63381139242105 usec\nrounds: 2089"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.43258070282228,
            "unit": "iter/sec",
            "range": "stddev: 0.00008443856811503916",
            "extra": "mean: 11.30804949999707 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.54255472317013,
            "unit": "iter/sec",
            "range": "stddev: 0.00034196332250916215",
            "extra": "mean: 8.295825505743862 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1487102.8241822517,
            "unit": "iter/sec",
            "range": "stddev: 1.2993769960532222e-7",
            "extra": "mean: 672.4484573216338 nsec\nrounds: 175408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 143.1456538520046,
            "unit": "iter/sec",
            "range": "stddev: 0.0004501709431484268",
            "extra": "mean: 6.985891454545171 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6044.220495700532,
            "unit": "iter/sec",
            "range": "stddev: 0.000057169707991959094",
            "extra": "mean: 165.44730635014645 usec\nrounds: 2693"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15361899704290707,
            "unit": "iter/sec",
            "range": "stddev: 0.053300329034656854",
            "extra": "mean: 6.509611566600006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19266.835328111152,
            "unit": "iter/sec",
            "range": "stddev: 0.000013118201625268514",
            "extra": "mean: 51.902659828153325 usec\nrounds: 3948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.91414350189758,
            "unit": "iter/sec",
            "range": "stddev: 0.0002383365002913094",
            "extra": "mean: 11.121720800008461 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4166.245727797629,
            "unit": "iter/sec",
            "range": "stddev: 0.001933579809481162",
            "extra": "mean: 240.02424852857212 usec\nrounds: 2040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.61334915841515,
            "unit": "iter/sec",
            "range": "stddev: 0.0006447796295256027",
            "extra": "mean: 11.413785794124632 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.55253427453522,
            "unit": "iter/sec",
            "range": "stddev: 0.00009549310719438069",
            "extra": "mean: 7.014957714284806 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.92437563326223,
            "unit": "iter/sec",
            "range": "stddev: 0.0001874405638609173",
            "extra": "mean: 23.852472097559723 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 247.88877587230297,
            "unit": "iter/sec",
            "range": "stddev: 0.00022755702131794275",
            "extra": "mean: 4.034067280703094 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.501839880142946,
            "unit": "iter/sec",
            "range": "stddev: 0.0007698982604507842",
            "extra": "mean: 42.54986014286119 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10748.270880683727,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021147213264565227",
            "extra": "mean: 93.03822085440288 usec\nrounds: 5198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5831.475308729074,
            "unit": "iter/sec",
            "range": "stddev: 0.00007199966971140294",
            "extra": "mean: 171.4831919982771 usec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 239.00601732238005,
            "unit": "iter/sec",
            "range": "stddev: 0.00041293451080045673",
            "extra": "mean: 4.1839950776267 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 990.6210203177441,
            "unit": "iter/sec",
            "range": "stddev: 0.000016632151524863067",
            "extra": "mean: 1.0094677777776688 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 521.6866501906273,
            "unit": "iter/sec",
            "range": "stddev: 0.000028205404631230376",
            "extra": "mean: 1.9168594780690558 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 82.76226111544045,
            "unit": "iter/sec",
            "range": "stddev: 0.011743765830573655",
            "extra": "mean: 12.082801829268004 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11407803.167587187,
            "unit": "iter/sec",
            "range": "stddev: 3.63689611513047e-9",
            "extra": "mean: 87.6592964754106 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 276.42676731878646,
            "unit": "iter/sec",
            "range": "stddev: 0.00004600756824533514",
            "extra": "mean: 3.6175946696463006 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 152.79117504764963,
            "unit": "iter/sec",
            "range": "stddev: 0.0008930138252595582",
            "extra": "mean: 6.544880616882087 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4465660.9579895325,
            "unit": "iter/sec",
            "range": "stddev: 2.9218314848528594e-8",
            "extra": "mean: 223.9310170222853 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5886.601641785053,
            "unit": "iter/sec",
            "range": "stddev: 0.00008615504428851352",
            "extra": "mean: 169.87730117520914 usec\nrounds: 2467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4259010.931839614,
            "unit": "iter/sec",
            "range": "stddev: 1.3554293959511404e-8",
            "extra": "mean: 234.79629801496955 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5103987.881296344,
            "unit": "iter/sec",
            "range": "stddev: 5.765107919069952e-9",
            "extra": "mean: 195.9252300862012 nsec\nrounds: 52632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5675.434118501684,
            "unit": "iter/sec",
            "range": "stddev: 0.00007948359291210395",
            "extra": "mean: 176.19797518925307 usec\nrounds: 1975"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4502.358084873999,
            "unit": "iter/sec",
            "range": "stddev: 0.000019771229936048592",
            "extra": "mean: 222.10583457579108 usec\nrounds: 1342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.2993174633542,
            "unit": "iter/sec",
            "range": "stddev: 0.0002021553026419591",
            "extra": "mean: 14.858991705889432 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.756787034940587,
            "unit": "iter/sec",
            "range": "stddev: 0.00014505566784772512",
            "extra": "mean: 72.69139207142773 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 62.06133026160277,
            "unit": "iter/sec",
            "range": "stddev: 0.023895186190456653",
            "extra": "mean: 16.11309322221696 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10238.844223554279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018159901703905698",
            "extra": "mean: 97.66727358733692 usec\nrounds: 4335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 413.7479462160785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000643821122189701",
            "extra": "mean: 2.4169304262304503 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 222.80298209304885,
            "unit": "iter/sec",
            "range": "stddev: 0.0003906903264004808",
            "extra": "mean: 4.488270267326905 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.446110435617217,
            "unit": "iter/sec",
            "range": "stddev: 0.04808796630914131",
            "extra": "mean: 224.91569080001454 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 252.40620253335024,
            "unit": "iter/sec",
            "range": "stddev: 0.00023387005220133923",
            "extra": "mean: 3.9618677748930153 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 247.1447064458884,
            "unit": "iter/sec",
            "range": "stddev: 0.00015133728048917464",
            "extra": "mean: 4.0462124978547624 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.82918201207427,
            "unit": "iter/sec",
            "range": "stddev: 0.0001337293869244738",
            "extra": "mean: 9.91776368750319 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 383280.56138033123,
            "unit": "iter/sec",
            "range": "stddev: 3.8661921084601333e-7",
            "extra": "mean: 2.6090548302231666 usec\nrounds: 1915"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 249.82027868886217,
            "unit": "iter/sec",
            "range": "stddev: 0.00023975131782600617",
            "extra": "mean: 4.002877609649322 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.12037061489312,
            "unit": "iter/sec",
            "range": "stddev: 0.0005062337700344505",
            "extra": "mean: 109.64466711112033 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 140.55000844493483,
            "unit": "iter/sec",
            "range": "stddev: 0.00008439508478024922",
            "extra": "mean: 7.114905300000629 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.42429586580609,
            "unit": "iter/sec",
            "range": "stddev: 0.00010527030740171628",
            "extra": "mean: 10.819665874998208 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 138.84561267974993,
            "unit": "iter/sec",
            "range": "stddev: 0.009565027627499712",
            "extra": "mean: 7.202244137929797 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.672745181824475,
            "unit": "iter/sec",
            "range": "stddev: 0.0005916950215504037",
            "extra": "mean: 27.268206812497198 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57073.078777130075,
            "unit": "iter/sec",
            "range": "stddev: 6.184847468710859e-7",
            "extra": "mean: 17.52139575131372 usec\nrounds: 12240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.58307347612165,
            "unit": "iter/sec",
            "range": "stddev: 0.00025857591971842635",
            "extra": "mean: 4.24478713705787 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 145.05530921102118,
            "unit": "iter/sec",
            "range": "stddev: 0.000741761523974274",
            "extra": "mean: 6.893922086955373 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8654707864827823,
            "unit": "iter/sec",
            "range": "stddev: 0.01558734455404681",
            "extra": "mean: 1.155440501999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.35381209457563,
            "unit": "iter/sec",
            "range": "stddev: 0.00016186424080683756",
            "extra": "mean: 14.213870865386998 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5148.426590224223,
            "unit": "iter/sec",
            "range": "stddev: 0.00004861324696520593",
            "extra": "mean: 194.23409899614558 usec\nrounds: 2091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 326.85770987829954,
            "unit": "iter/sec",
            "range": "stddev: 0.00003078499219853873",
            "extra": "mean: 3.05943525203164 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.011777735612,
            "unit": "iter/sec",
            "range": "stddev: 0.000059422438571491963",
            "extra": "mean: 3.7734171988297303 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 623.4176716000259,
            "unit": "iter/sec",
            "range": "stddev: 0.00003405436850476648",
            "extra": "mean: 1.6040610421476516 msec\nrounds: 522"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1563395.699778578,
            "unit": "iter/sec",
            "range": "stddev: 1.2963158806600583e-7",
            "extra": "mean: 639.6333315625909 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1451.4335574758902,
            "unit": "iter/sec",
            "range": "stddev: 0.00004595328401899832",
            "extra": "mean: 688.9740111418163 usec\nrounds: 1077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5478672758877843,
            "unit": "iter/sec",
            "range": "stddev: 0.001105864407774143",
            "extra": "mean: 646.0502238000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.71007163178709,
            "unit": "iter/sec",
            "range": "stddev: 0.0006495366651182842",
            "extra": "mean: 11.401199216870655 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 158.67848945032054,
            "unit": "iter/sec",
            "range": "stddev: 0.0007366447514299458",
            "extra": "mean: 6.302051421488245 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 79.77465772335185,
            "unit": "iter/sec",
            "range": "stddev: 0.014514767856215057",
            "extra": "mean: 12.53530918888891 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2807316091628076,
            "unit": "iter/sec",
            "range": "stddev: 0.0014855616406274981",
            "extra": "mean: 438.45579899998484 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.38298870830639,
            "unit": "iter/sec",
            "range": "stddev: 0.0007270731196263484",
            "extra": "mean: 12.287580191779497 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7407234907720881,
            "unit": "iter/sec",
            "range": "stddev: 0.0018730289984300855",
            "extra": "mean: 1.3500314387999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120657.02503256536,
            "unit": "iter/sec",
            "range": "stddev: 3.5484325293517653e-7",
            "extra": "mean: 8.287955050525238 usec\nrounds: 37175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9759.784580772463,
            "unit": "iter/sec",
            "range": "stddev: 0.000017630618130026123",
            "extra": "mean: 102.46127788210389 usec\nrounds: 3721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.39766484440472,
            "unit": "iter/sec",
            "range": "stddev: 0.00011808950158154111",
            "extra": "mean: 6.9736142571433195 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1597428.4449895094,
            "unit": "iter/sec",
            "range": "stddev: 1.1674495392018163e-7",
            "extra": "mean: 626.0061307513321 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.75583843880167,
            "unit": "iter/sec",
            "range": "stddev: 0.0004771998814431939",
            "extra": "mean: 18.955247979994283 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 241.37643281524407,
            "unit": "iter/sec",
            "range": "stddev: 0.0002485271850837428",
            "extra": "mean: 4.142906531249579 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 155.89350836177923,
            "unit": "iter/sec",
            "range": "stddev: 0.0007116642216119792",
            "extra": "mean: 6.414635288592763 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1512541.2620079243,
            "unit": "iter/sec",
            "range": "stddev: 1.4536901023160037e-7",
            "extra": "mean: 661.1389884812022 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.79888547903323,
            "unit": "iter/sec",
            "range": "stddev: 0.0007202667534523564",
            "extra": "mean: 10.775991487806584 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.94767332759682,
            "unit": "iter/sec",
            "range": "stddev: 0.00003788607235117008",
            "extra": "mean: 5.815722775700417 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 588464.0983003245,
            "unit": "iter/sec",
            "range": "stddev: 2.2207650722971734e-7",
            "extra": "mean: 1.6993390130142603 usec\nrounds: 23474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.669261442967475,
            "unit": "iter/sec",
            "range": "stddev: 0.0007721963209005511",
            "extra": "mean: 28.84399489285475 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8706897962436931,
            "unit": "iter/sec",
            "range": "stddev: 0.004656389401199665",
            "extra": "mean: 1.1485146653999778 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}