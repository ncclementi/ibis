window.BENCHMARK_DATA = {
  "lastUpdate": 1676896852670,
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
          "id": "68f73b1505cc8d60c74a6053e5a577e6f899f10e",
          "message": "docs: don't sort backends by coverage percentage by default",
          "timestamp": "2023-02-20T07:33:34-05:00",
          "tree_id": "146b3796e4d2c3c105a6db39cb6e9947de3c53f5",
          "url": "https://github.com/ibis-project/ibis/commit/68f73b1505cc8d60c74a6053e5a577e6f899f10e"
        },
        "date": 1676896771011,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 151.82156720874156,
            "unit": "iter/sec",
            "range": "stddev: 0.004276428032571936",
            "extra": "mean: 6.586679471073344 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10265.462502847608,
            "unit": "iter/sec",
            "range": "stddev: 0.000001896220780752519",
            "extra": "mean: 97.41402296512243 usec\nrounds: 5835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.42312162941047,
            "unit": "iter/sec",
            "range": "stddev: 0.0018118559427049276",
            "extra": "mean: 74.4983192142854 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 145.46601581722544,
            "unit": "iter/sec",
            "range": "stddev: 0.00011963498195768004",
            "extra": "mean: 6.874457888889155 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2006428.6575807116,
            "unit": "iter/sec",
            "range": "stddev: 3.012941294539848e-8",
            "extra": "mean: 498.3979850077735 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4918.80347273918,
            "unit": "iter/sec",
            "range": "stddev: 0.00008016207396863662",
            "extra": "mean: 203.30147474729677 usec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5442575.316286658,
            "unit": "iter/sec",
            "range": "stddev: 4.806174193865877e-9",
            "extra": "mean: 183.73654784484606 nsec\nrounds: 51814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.707961062378004,
            "unit": "iter/sec",
            "range": "stddev: 0.0003566317900381683",
            "extra": "mean: 18.278875333332206 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.72352634371782,
            "unit": "iter/sec",
            "range": "stddev: 0.0005929276757844803",
            "extra": "mean: 11.39945054285444 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9806.963607444444,
            "unit": "iter/sec",
            "range": "stddev: 0.000012001042336616188",
            "extra": "mean: 101.96836044552079 usec\nrounds: 3590"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.18047704084087,
            "unit": "iter/sec",
            "range": "stddev: 0.00014256385576327294",
            "extra": "mean: 14.666955166667268 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4483.725138855164,
            "unit": "iter/sec",
            "range": "stddev: 0.000027983046632149886",
            "extra": "mean: 223.02883629823293 usec\nrounds: 1405"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 161.39350124227124,
            "unit": "iter/sec",
            "range": "stddev: 0.0006557421997030677",
            "extra": "mean: 6.196036347825918 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.857840529555,
            "unit": "iter/sec",
            "range": "stddev: 0.000018913510426282197",
            "extra": "mean: 3.7473135434791476 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.61719007756354,
            "unit": "iter/sec",
            "range": "stddev: 0.00017814060569933243",
            "extra": "mean: 10.458370499999129 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55497.42578885488,
            "unit": "iter/sec",
            "range": "stddev: 6.476897308455876e-7",
            "extra": "mean: 18.018853771787416 usec\nrounds: 12501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 244.32025982421789,
            "unit": "iter/sec",
            "range": "stddev: 0.00023656039577757315",
            "extra": "mean: 4.092988443608705 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5255.388710497167,
            "unit": "iter/sec",
            "range": "stddev: 0.00005009247434962274",
            "extra": "mean: 190.2808821738704 usec\nrounds: 2631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1475016.1028106844,
            "unit": "iter/sec",
            "range": "stddev: 1.0854019372739058e-7",
            "extra": "mean: 677.9587003114557 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.10808163363905,
            "unit": "iter/sec",
            "range": "stddev: 0.0006737750147799429",
            "extra": "mean: 28.483470285708886 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10887.605209967503,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017697470640950934",
            "extra": "mean: 91.84756250020061 usec\nrounds: 5456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4420983.033376931,
            "unit": "iter/sec",
            "range": "stddev: 1.1497410597896025e-8",
            "extra": "mean: 226.19403703896964 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12580152.618238462,
            "unit": "iter/sec",
            "range": "stddev: 3.5725542217514476e-9",
            "extra": "mean: 79.49029160020768 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 250.07662180970803,
            "unit": "iter/sec",
            "range": "stddev: 0.0002818850729486742",
            "extra": "mean: 3.998774426667258 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1446.6627909005306,
            "unit": "iter/sec",
            "range": "stddev: 0.000018974757962489276",
            "extra": "mean: 691.2460915494423 usec\nrounds: 1136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.35762701824,
            "unit": "iter/sec",
            "range": "stddev: 0.00013516586221926392",
            "extra": "mean: 6.975561892307033 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.15697770416702,
            "unit": "iter/sec",
            "range": "stddev: 0.00005756381986861357",
            "extra": "mean: 8.186188122808215 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.73751904493508,
            "unit": "iter/sec",
            "range": "stddev: 0.0006307368715782958",
            "extra": "mean: 6.221322849461453 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.84822523624327,
            "unit": "iter/sec",
            "range": "stddev: 0.013023976762464536",
            "extra": "mean: 12.523759883721224 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 628.4917607839819,
            "unit": "iter/sec",
            "range": "stddev: 0.000010876308144372183",
            "extra": "mean: 1.59111075498046 msec\nrounds: 502"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.99116569756883,
            "unit": "iter/sec",
            "range": "stddev: 0.0006793997748116877",
            "extra": "mean: 10.639297774193539 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.39989230614841,
            "unit": "iter/sec",
            "range": "stddev: 0.00046946457981173904",
            "extra": "mean: 39.37024566666905 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 273.0085613929552,
            "unit": "iter/sec",
            "range": "stddev: 0.00012044349177250721",
            "extra": "mean: 3.6628887932955654 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7347701805851661,
            "unit": "iter/sec",
            "range": "stddev: 0.0027434713922659484",
            "extra": "mean: 1.3609697649999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 148.5169590315795,
            "unit": "iter/sec",
            "range": "stddev: 0.0006668135702682351",
            "extra": "mean: 6.733237783217524 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.02116321034907,
            "unit": "iter/sec",
            "range": "stddev: 0.0004605431992878779",
            "extra": "mean: 15.867685537035346 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 84.84579672556296,
            "unit": "iter/sec",
            "range": "stddev: 0.00045402233848946573",
            "extra": "mean: 11.786087686046947 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4653301.628722329,
            "unit": "iter/sec",
            "range": "stddev: 1.1211437463508395e-8",
            "extra": "mean: 214.90117765595178 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.24220854334956,
            "unit": "iter/sec",
            "range": "stddev: 0.00007242746627815182",
            "extra": "mean: 10.610956761905891 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2043136.5687054873,
            "unit": "iter/sec",
            "range": "stddev: 2.2531392812354863e-8",
            "extra": "mean: 489.44354250068045 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.883320588143945,
            "unit": "iter/sec",
            "range": "stddev: 0.02300978008172054",
            "extra": "mean: 30.410554108107593 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 243.05245283101036,
            "unit": "iter/sec",
            "range": "stddev: 0.00020437854699800105",
            "extra": "mean: 4.11433823585101 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119406.88678616616,
            "unit": "iter/sec",
            "range": "stddev: 3.015534624899531e-7",
            "extra": "mean: 8.374726340456391 usec\nrounds: 35588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.72865973064258,
            "unit": "iter/sec",
            "range": "stddev: 0.0002886661662328116",
            "extra": "mean: 23.403495600000213 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.63355174064029,
            "unit": "iter/sec",
            "range": "stddev: 0.00018820567826050838",
            "extra": "mean: 5.965392903845303 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8474521952373448,
            "unit": "iter/sec",
            "range": "stddev: 0.007955946513130807",
            "extra": "mean: 1.1800075633999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6014.503622748659,
            "unit": "iter/sec",
            "range": "stddev: 0.00004511294650791534",
            "extra": "mean: 166.26475977463872 usec\nrounds: 2302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19326.54665666725,
            "unit": "iter/sec",
            "range": "stddev: 0.000012268934765632281",
            "extra": "mean: 51.74230128976617 usec\nrounds: 6897"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 257.4404547588043,
            "unit": "iter/sec",
            "range": "stddev: 0.0001993302852065551",
            "extra": "mean: 3.8843933869558263 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.086164494053307,
            "unit": "iter/sec",
            "range": "stddev: 0.0023351174404319924",
            "extra": "mean: 110.057439600007 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 386302.23089246365,
            "unit": "iter/sec",
            "range": "stddev: 2.164871152898584e-7",
            "extra": "mean: 2.5886467124192554 usec\nrounds: 1871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 123.65760804341764,
            "unit": "iter/sec",
            "range": "stddev: 0.012323697626982873",
            "extra": "mean: 8.086845733332382 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1610471.5591406075,
            "unit": "iter/sec",
            "range": "stddev: 1.127175734244601e-7",
            "extra": "mean: 620.9361440282919 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 520.7899651003278,
            "unit": "iter/sec",
            "range": "stddev: 0.0000579127313754702",
            "extra": "mean: 1.9201598859673776 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.85730403455103,
            "unit": "iter/sec",
            "range": "stddev: 0.00010660448257769694",
            "extra": "mean: 9.722206987498794 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1507117617349383,
            "unit": "iter/sec",
            "range": "stddev: 0.08116029533671278",
            "extra": "mean: 6.635182208000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 588124.228530931,
            "unit": "iter/sec",
            "range": "stddev: 4.7136681499690505e-7",
            "extra": "mean: 1.7003210401616828 usec\nrounds: 21882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.88019510263905,
            "unit": "iter/sec",
            "range": "stddev: 0.00039504391206651555",
            "extra": "mean: 4.466674685277743 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.49912814931098,
            "unit": "iter/sec",
            "range": "stddev: 0.000762808498695529",
            "extra": "mean: 11.299546344827869 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8450062919371425,
            "unit": "iter/sec",
            "range": "stddev: 0.0028912339353570618",
            "extra": "mean: 1.1834231407999822 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 978.168524634409,
            "unit": "iter/sec",
            "range": "stddev: 0.00010723526693744812",
            "extra": "mean: 1.0223187260842916 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5979.921804414979,
            "unit": "iter/sec",
            "range": "stddev: 0.00004827050251155285",
            "extra": "mean: 167.22626694912626 usec\nrounds: 2124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 252.30288238658247,
            "unit": "iter/sec",
            "range": "stddev: 0.00021346964893277363",
            "extra": "mean: 3.9634901929807693 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 252.19456081524413,
            "unit": "iter/sec",
            "range": "stddev: 0.00013209130479144182",
            "extra": "mean: 3.965192575000031 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.92324424132144,
            "unit": "iter/sec",
            "range": "stddev: 0.00008343323249240799",
            "extra": "mean: 7.046062153847288 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.839828780099518,
            "unit": "iter/sec",
            "range": "stddev: 0.0027643739692997105",
            "extra": "mean: 206.61887960000058 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.42152659872046,
            "unit": "iter/sec",
            "range": "stddev: 0.0003823723563111516",
            "extra": "mean: 22.015992743585382 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.213890178642197,
            "unit": "iter/sec",
            "range": "stddev: 0.0022249002843557773",
            "extra": "mean: 451.6935888000148 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.545321860776061,
            "unit": "iter/sec",
            "range": "stddev: 0.0022680087793667696",
            "extra": "mean: 647.1143814000015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5172.144124085667,
            "unit": "iter/sec",
            "range": "stddev: 0.00004558210797965095",
            "extra": "mean: 193.34341348749254 usec\nrounds: 2150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5999.59079139336,
            "unit": "iter/sec",
            "range": "stddev: 0.00004667376871706103",
            "extra": "mean: 166.6780343476988 usec\nrounds: 3319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 159.10063559217446,
            "unit": "iter/sec",
            "range": "stddev: 0.0006662285952796845",
            "extra": "mean: 6.28533001315795 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 417.5371315743045,
            "unit": "iter/sec",
            "range": "stddev: 0.00002445545424641535",
            "extra": "mean: 2.3949965748663984 msec\nrounds: 374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5798.244218827537,
            "unit": "iter/sec",
            "range": "stddev: 0.00004835096545931801",
            "extra": "mean: 172.46600216542967 usec\nrounds: 2771"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.38046239968627,
            "unit": "iter/sec",
            "range": "stddev: 0.0001147531041956407",
            "extra": "mean: 13.815883000000488 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 253.47008600117334,
            "unit": "iter/sec",
            "range": "stddev: 0.00020875324392479497",
            "extra": "mean: 3.9452387292572704 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 328.5343684808318,
            "unit": "iter/sec",
            "range": "stddev: 0.000027511244244898694",
            "extra": "mean: 3.043821578314856 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5742127628894276,
            "unit": "iter/sec",
            "range": "stddev: 0.011562137247440193",
            "extra": "mean: 1.7415147566000087 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.81773101825723,
            "unit": "iter/sec",
            "range": "stddev: 0.000638606349718975",
            "extra": "mean: 10.773803550566218 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.23937367385554,
            "unit": "iter/sec",
            "range": "stddev: 0.000611540378793253",
            "extra": "mean: 10.499859054349422 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 160.4127935694329,
            "unit": "iter/sec",
            "range": "stddev: 0.0006845207788413807",
            "extra": "mean: 6.233916745344636 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.88051673524726,
            "unit": "iter/sec",
            "range": "stddev: 0.0006530970230251566",
            "extra": "mean: 12.065561839996615 msec\nrounds: 75"
          }
        ]
      }
    ]
  }
}