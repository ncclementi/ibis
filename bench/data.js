window.BENCHMARK_DATA = {
  "lastUpdate": 1676373547467,
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
      },
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
          "id": "4994add3fe719660ef991daa64c97cc9bf46506a",
          "message": "feat(pandas/dask): implement bitwise operations",
          "timestamp": "2023-02-14T06:12:57-05:00",
          "tree_id": "998fbbe8e66b4926b5e5cf623fb0c158217b12cb",
          "url": "https://github.com/ibis-project/ibis/commit/4994add3fe719660ef991daa64c97cc9bf46506a"
        },
        "date": 1676373462283,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 326.50497579018776,
            "unit": "iter/sec",
            "range": "stddev: 0.000043883876401020135",
            "extra": "mean: 3.0627404607842803 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.66697342981698,
            "unit": "iter/sec",
            "range": "stddev: 0.00021345645973712242",
            "extra": "mean: 11.406804191781115 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.1452355203661,
            "unit": "iter/sec",
            "range": "stddev: 0.00010825758388006805",
            "extra": "mean: 7.0350581666644985 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1460500.0954183599,
            "unit": "iter/sec",
            "range": "stddev: 1.1428188046251951e-7",
            "extra": "mean: 684.6969768348766 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8959.588184705295,
            "unit": "iter/sec",
            "range": "stddev: 0.00006676898922098285",
            "extra": "mean: 111.6122727277886 usec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 143.1494789011972,
            "unit": "iter/sec",
            "range": "stddev: 0.0005403223159325194",
            "extra": "mean: 6.985704786883696 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.902057945985658,
            "unit": "iter/sec",
            "range": "stddev: 0.00019029223111276987",
            "extra": "mean: 203.995956600005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4428.445381715661,
            "unit": "iter/sec",
            "range": "stddev: 0.00003524517010702678",
            "extra": "mean: 225.81287874269358 usec\nrounds: 668"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.568305395043396,
            "unit": "iter/sec",
            "range": "stddev: 0.013518354878304058",
            "extra": "mean: 28.928233205883036 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 157.53730365198803,
            "unit": "iter/sec",
            "range": "stddev: 0.0005798577925982461",
            "extra": "mean: 6.34770290476138 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.20480051856113,
            "unit": "iter/sec",
            "range": "stddev: 0.0005673076617924732",
            "extra": "mean: 11.210159029411503 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.0098696491149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000150887474390165",
            "extra": "mean: 3.7592590129045513 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8726613488299091,
            "unit": "iter/sec",
            "range": "stddev: 0.0019925078171271833",
            "extra": "mean: 1.145919893599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10874.909010234782,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017239461937370083",
            "extra": "mean: 91.95479236275565 usec\nrounds: 5447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.17877714784962,
            "unit": "iter/sec",
            "range": "stddev: 0.00006288802215588535",
            "extra": "mean: 5.876173379311628 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10256.167747572481,
            "unit": "iter/sec",
            "range": "stddev: 0.000001664535911087045",
            "extra": "mean: 97.50230540414948 usec\nrounds: 1647"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5983.291053754959,
            "unit": "iter/sec",
            "range": "stddev: 0.00004970292184038319",
            "extra": "mean: 167.13210021304678 usec\nrounds: 469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.90010754723339,
            "unit": "iter/sec",
            "range": "stddev: 0.00014700491889672277",
            "extra": "mean: 13.908185037735434 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 585011.4747512182,
            "unit": "iter/sec",
            "range": "stddev: 1.9507273759879572e-7",
            "extra": "mean: 1.7093681802143448 usec\nrounds: 22728"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8670789490302073,
            "unit": "iter/sec",
            "range": "stddev: 0.0039372219857655415",
            "extra": "mean: 1.1532975181999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 270.792207859364,
            "unit": "iter/sec",
            "range": "stddev: 0.00004967765812291287",
            "extra": "mean: 3.692868446640644 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.31975473462869,
            "unit": "iter/sec",
            "range": "stddev: 0.000602376617804617",
            "extra": "mean: 12.147752422534117 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.29034415701445,
            "unit": "iter/sec",
            "range": "stddev: 0.0006273127716048033",
            "extra": "mean: 10.835369714286582 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 136.19878789377324,
            "unit": "iter/sec",
            "range": "stddev: 0.01130445244194848",
            "extra": "mean: 7.342209247705927 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 980.2904919615025,
            "unit": "iter/sec",
            "range": "stddev: 0.000012662944066258287",
            "extra": "mean: 1.0201057831327731 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5218.817837056074,
            "unit": "iter/sec",
            "range": "stddev: 0.000050618208180469366",
            "extra": "mean: 191.614275727259 usec\nrounds: 2303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.16476932502492,
            "unit": "iter/sec",
            "range": "stddev: 0.0006117096847830657",
            "extra": "mean: 10.619683000001183 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120316.8129402883,
            "unit": "iter/sec",
            "range": "stddev: 3.668602500092988e-7",
            "extra": "mean: 8.311390366500875 usec\nrounds: 42373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.37113194892736,
            "unit": "iter/sec",
            "range": "stddev: 0.0007091393437194005",
            "extra": "mean: 11.445428000000598 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 249.05326709034378,
            "unit": "iter/sec",
            "range": "stddev: 0.0002110593634272228",
            "extra": "mean: 4.015205308016502 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.40760969391295,
            "unit": "iter/sec",
            "range": "stddev: 0.00015821662175391474",
            "extra": "mean: 10.161815769231671 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 159.0031583618944,
            "unit": "iter/sec",
            "range": "stddev: 0.0006354159005903456",
            "extra": "mean: 6.289183248322526 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 160.76163288590465,
            "unit": "iter/sec",
            "range": "stddev: 0.0006288619879357468",
            "extra": "mean: 6.22038966666703 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5778973480831958,
            "unit": "iter/sec",
            "range": "stddev: 0.06508981055329896",
            "extra": "mean: 1.7304111245999991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1441671.4517076262,
            "unit": "iter/sec",
            "range": "stddev: 1.127426740262101e-7",
            "extra": "mean: 693.6393162363889 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.75862312140748,
            "unit": "iter/sec",
            "range": "stddev: 0.00015040659865283657",
            "extra": "mean: 6.956104463768248 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.49715905692464,
            "unit": "iter/sec",
            "range": "stddev: 0.0006146874683560545",
            "extra": "mean: 10.582328717391436 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.59529008804697,
            "unit": "iter/sec",
            "range": "stddev: 0.0000664994818704751",
            "extra": "mean: 10.57135084705829 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5995310077833689,
            "unit": "iter/sec",
            "range": "stddev: 0.0018835756844712281",
            "extra": "mean: 625.1832538000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56871.60537115481,
            "unit": "iter/sec",
            "range": "stddev: 4.6399006047660227e-7",
            "extra": "mean: 17.58346706539778 usec\nrounds: 12707"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.295486773671502,
            "unit": "iter/sec",
            "range": "stddev: 0.0014659749518176265",
            "extra": "mean: 435.6374479999971 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5103.749338941909,
            "unit": "iter/sec",
            "range": "stddev: 0.00006883491909769469",
            "extra": "mean: 195.93438736693847 usec\nrounds: 1789"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.76929041402127,
            "unit": "iter/sec",
            "range": "stddev: 0.00020944131651793238",
            "extra": "mean: 4.17067589545455 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.591641364241301,
            "unit": "iter/sec",
            "range": "stddev: 0.0005965200713760838",
            "extra": "mean: 73.57463114285322 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 417.41682403819556,
            "unit": "iter/sec",
            "range": "stddev: 0.000028247633959478957",
            "extra": "mean: 2.3956868588231495 msec\nrounds: 340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.98724829086936,
            "unit": "iter/sec",
            "range": "stddev: 0.0002741575187270253",
            "extra": "mean: 9.805147376346335 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.26622853680624,
            "unit": "iter/sec",
            "range": "stddev: 0.00021001965368097408",
            "extra": "mean: 4.011774903764557 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1968044.4953762596,
            "unit": "iter/sec",
            "range": "stddev: 2.0467750957410983e-8",
            "extra": "mean: 508.1185930244936 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.078226353586164,
            "unit": "iter/sec",
            "range": "stddev: 0.0003125290968223286",
            "extra": "mean: 38.346166125001226 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.010478158450887,
            "unit": "iter/sec",
            "range": "stddev: 0.0242814320501123",
            "extra": "mean: 33.32169499999793 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15300599056998365,
            "unit": "iter/sec",
            "range": "stddev: 0.07219645181379554",
            "extra": "mean: 6.5356918135999935 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 395473.73931769456,
            "unit": "iter/sec",
            "range": "stddev: 5.381959708042181e-7",
            "extra": "mean: 2.528612902908007 usec\nrounds: 1922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5808.457616248766,
            "unit": "iter/sec",
            "range": "stddev: 0.000046457962844416805",
            "extra": "mean: 172.1627437209093 usec\nrounds: 2150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.760253834413882,
            "unit": "iter/sec",
            "range": "stddev: 0.0032364163023895537",
            "extra": "mean: 1.315350156400001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 147.06806718997794,
            "unit": "iter/sec",
            "range": "stddev: 0.0006607457444844133",
            "extra": "mean: 6.799572600000456 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.63973988649717,
            "unit": "iter/sec",
            "range": "stddev: 0.00005867101517279135",
            "extra": "mean: 14.568819777778911 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11852488.324915554,
            "unit": "iter/sec",
            "range": "stddev: 8.996345496730972e-9",
            "extra": "mean: 84.37046910198983 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.40863549429502,
            "unit": "iter/sec",
            "range": "stddev: 0.00020447483537845937",
            "extra": "mean: 23.03689090000134 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6001.876400507092,
            "unit": "iter/sec",
            "range": "stddev: 0.00004597071861235593",
            "extra": "mean: 166.6145607256276 usec\nrounds: 2536"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.0997391684945,
            "unit": "iter/sec",
            "range": "stddev: 0.0007135240197782131",
            "extra": "mean: 22.675871078947665 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4666577.300295278,
            "unit": "iter/sec",
            "range": "stddev: 1.084897472249083e-8",
            "extra": "mean: 214.28981792214552 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5147.276026793111,
            "unit": "iter/sec",
            "range": "stddev: 0.00006788758264491946",
            "extra": "mean: 194.27751587338642 usec\nrounds: 2142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 247.95747569051784,
            "unit": "iter/sec",
            "range": "stddev: 0.00017918346905969874",
            "extra": "mean: 4.032949590308484 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 519.8666046837304,
            "unit": "iter/sec",
            "range": "stddev: 0.00002242773247790996",
            "extra": "mean: 1.9235703755357911 msec\nrounds: 466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 222.56563074898733,
            "unit": "iter/sec",
            "range": "stddev: 0.0003843580960960741",
            "extra": "mean: 4.493056707069989 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19070.506867598182,
            "unit": "iter/sec",
            "range": "stddev: 0.000012232298435176454",
            "extra": "mean: 52.436991158271404 usec\nrounds: 5768"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 254.19290174664656,
            "unit": "iter/sec",
            "range": "stddev: 0.00019680122093608993",
            "extra": "mean: 3.9340201599991866 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.67220400432376,
            "unit": "iter/sec",
            "range": "stddev: 0.00008075683474231876",
            "extra": "mean: 8.28691253508695 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.96652756366865,
            "unit": "iter/sec",
            "range": "stddev: 0.0006790713982466604",
            "extra": "mean: 11.240182430233132 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 252.52175338043145,
            "unit": "iter/sec",
            "range": "stddev: 0.0002431902824670996",
            "extra": "mean: 3.9600548729497795 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 157.389445962126,
            "unit": "iter/sec",
            "range": "stddev: 0.000690638428692187",
            "extra": "mean: 6.353666180644913 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 242.97691171816342,
            "unit": "iter/sec",
            "range": "stddev: 0.0002253996263466588",
            "extra": "mean: 4.115617376682816 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4366812.653306108,
            "unit": "iter/sec",
            "range": "stddev: 1.1562475579087123e-8",
            "extra": "mean: 228.99997764846907 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.05729874744459,
            "unit": "iter/sec",
            "range": "stddev: 0.00030409107152722396",
            "extra": "mean: 18.162896160001196 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5929.976100272627,
            "unit": "iter/sec",
            "range": "stddev: 0.00005040973435734722",
            "extra": "mean: 168.63474373092762 usec\nrounds: 2353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.092491799832645,
            "unit": "iter/sec",
            "range": "stddev: 0.00035278964742916475",
            "extra": "mean: 109.98085255555641 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1460.73626755308,
            "unit": "iter/sec",
            "range": "stddev: 0.000006814292943789386",
            "extra": "mean: 684.5862748893938 usec\nrounds: 1135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5274862.860620934,
            "unit": "iter/sec",
            "range": "stddev: 5.211516074072043e-9",
            "extra": "mean: 189.578388371927 nsec\nrounds: 52357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.63180130720653,
            "unit": "iter/sec",
            "range": "stddev: 0.00010038053898540786",
            "extra": "mean: 6.96224645864569 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1611448.7044000973,
            "unit": "iter/sec",
            "range": "stddev: 1.2650695057165463e-7",
            "extra": "mean: 620.5596226981829 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.47073302293062,
            "unit": "iter/sec",
            "range": "stddev: 0.0002634794518380846",
            "extra": "mean: 15.2740003636397 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 631.0069331584386,
            "unit": "iter/sec",
            "range": "stddev: 0.000012665909145584975",
            "extra": "mean: 1.5847686411219057 msec\nrounds: 535"
          }
        ]
      }
    ]
  }
}