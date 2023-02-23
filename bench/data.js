window.BENCHMARK_DATA = {
  "lastUpdate": 1677185873232,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ccf035eca3052b0c76cfccc8c67a0b1e78144a79",
          "message": "chore(deps): bump markdown-it-py from 2.1.0 to 2.2.0\n\nBumps [markdown-it-py](https://github.com/executablebooks/markdown-it-py) from 2.1.0 to 2.2.0.\n- [Release notes](https://github.com/executablebooks/markdown-it-py/releases)\n- [Changelog](https://github.com/executablebooks/markdown-it-py/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/executablebooks/markdown-it-py/compare/v2.1.0...v2.2.0)\n\n---\nupdated-dependencies:\n- dependency-name: markdown-it-py\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-23T15:49:47-05:00",
          "tree_id": "3bc4347f8f540a288c1c2ffa59ddb23adbabfa1f",
          "url": "https://github.com/ibis-project/ibis/commit/ccf035eca3052b0c76cfccc8c67a0b1e78144a79"
        },
        "date": 1677185783137,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.750594600922824,
            "unit": "iter/sec",
            "range": "stddev: 0.0003100461814722412",
            "extra": "mean: 18.957132285718462 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 10.82864447613213,
            "unit": "iter/sec",
            "range": "stddev: 0.004164374144649245",
            "extra": "mean: 92.34766199999842 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1357803.8391587494,
            "unit": "iter/sec",
            "range": "stddev: 8.4382139636876e-7",
            "extra": "mean: 736.4834088402395 nsec\nrounds: 138870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 294061.9678569414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011439209237922477",
            "extra": "mean: 3.400643773446049 usec\nrounds: 1558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.7296625175727,
            "unit": "iter/sec",
            "range": "stddev: 0.0018343664506980406",
            "extra": "mean: 14.76457969564733 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8109509039268583,
            "unit": "iter/sec",
            "range": "stddev: 0.0073693595389312675",
            "extra": "mean: 552.1960853999985 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3216.1335900669806,
            "unit": "iter/sec",
            "range": "stddev: 0.00007119524777060946",
            "extra": "mean: 310.9323577504669 usec\nrounds: 587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 348.77018623360874,
            "unit": "iter/sec",
            "range": "stddev: 0.0001569123023867814",
            "extra": "mean: 2.867217553194736 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.22304137676439,
            "unit": "iter/sec",
            "range": "stddev: 0.0006593614350228161",
            "extra": "mean: 10.726961760005906 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6817027847510914,
            "unit": "iter/sec",
            "range": "stddev: 0.05956532091211329",
            "extra": "mean: 1.4669149405999975 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8016.147209059592,
            "unit": "iter/sec",
            "range": "stddev: 0.000022918626579249504",
            "extra": "mean: 124.74820807554933 usec\nrounds: 3071"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5572.826642913147,
            "unit": "iter/sec",
            "range": "stddev: 0.00001805358512416452",
            "extra": "mean: 179.44215100817465 usec\nrounds: 1437"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.82754017662921,
            "unit": "iter/sec",
            "range": "stddev: 0.011501532792975241",
            "extra": "mean: 11.651271817205119 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9299.673560263427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036218485652202918",
            "extra": "mean: 107.5306561590398 usec\nrounds: 4822"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.63329648094237,
            "unit": "iter/sec",
            "range": "stddev: 0.0008469613800517495",
            "extra": "mean: 29.73244090321714 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1150032413816539,
            "unit": "iter/sec",
            "range": "stddev: 0.13112158408740732",
            "extra": "mean: 8.69540708579999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3505213.095547287,
            "unit": "iter/sec",
            "range": "stddev: 4.133543120661565e-8",
            "extra": "mean: 285.28935980259126 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 230.60064252628672,
            "unit": "iter/sec",
            "range": "stddev: 0.00003625392872120201",
            "extra": "mean: 4.3365013602943785 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3362.961641112267,
            "unit": "iter/sec",
            "range": "stddev: 0.00003185241009717407",
            "extra": "mean: 297.356945073349 usec\nrounds: 1056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 95.4960232717761,
            "unit": "iter/sec",
            "range": "stddev: 0.0007856912674894333",
            "extra": "mean: 10.471640239448071 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.97122991778253,
            "unit": "iter/sec",
            "range": "stddev: 0.0006797889127823146",
            "extra": "mean: 47.684375400035606 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1236.63148694651,
            "unit": "iter/sec",
            "range": "stddev: 0.00002987544823364414",
            "extra": "mean: 808.6483407188665 usec\nrounds: 948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.978038001810745,
            "unit": "iter/sec",
            "range": "stddev: 0.0008929510181791466",
            "extra": "mean: 20.842869813939846 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 98.99549722201317,
            "unit": "iter/sec",
            "range": "stddev: 0.00041467417704823287",
            "extra": "mean: 10.101469542168578 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 126.40845172839241,
            "unit": "iter/sec",
            "range": "stddev: 0.00009411362585076258",
            "extra": "mean: 7.910863445655126 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.40887619329593,
            "unit": "iter/sec",
            "range": "stddev: 0.0009322454252372862",
            "extra": "mean: 35.20026604346937 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3303.5152544235075,
            "unit": "iter/sec",
            "range": "stddev: 0.00007323030631349193",
            "extra": "mean: 302.70784996708267 usec\nrounds: 1453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 73.85151641530594,
            "unit": "iter/sec",
            "range": "stddev: 0.0007722972017732139",
            "extra": "mean: 13.540683367643718 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9305975.96513499,
            "unit": "iter/sec",
            "range": "stddev: 9.954233141705003e-9",
            "extra": "mean: 107.45783180037738 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 93.57339994578713,
            "unit": "iter/sec",
            "range": "stddev: 0.0008146583146988296",
            "extra": "mean: 10.686797749994785 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 218.05962828487216,
            "unit": "iter/sec",
            "range": "stddev: 0.0002974499303907316",
            "extra": "mean: 4.585901608039084 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 811.697714309127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000433600773943517",
            "extra": "mean: 1.2319857286417832 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 460.57919581072184,
            "unit": "iter/sec",
            "range": "stddev: 0.00005358892007640621",
            "extra": "mean: 2.1711792653590822 msec\nrounds: 407"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3081.664756799182,
            "unit": "iter/sec",
            "range": "stddev: 0.00006506950203307941",
            "extra": "mean: 324.4999306928717 usec\nrounds: 1717"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 134.15418187731626,
            "unit": "iter/sec",
            "range": "stddev: 0.000093545064633195",
            "extra": "mean: 7.45410978626442 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 76.79141394698556,
            "unit": "iter/sec",
            "range": "stddev: 0.0007382655208906083",
            "extra": "mean: 13.022289193559704 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.48082283138405,
            "unit": "iter/sec",
            "range": "stddev: 0.0007262848588501014",
            "extra": "mean: 32.80751328570984 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 94.8440672233555,
            "unit": "iter/sec",
            "range": "stddev: 0.0007389373843396047",
            "extra": "mean: 10.543622065943504 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 76.22250719975325,
            "unit": "iter/sec",
            "range": "stddev: 0.000328036447062868",
            "extra": "mean: 13.119484476931994 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1227148.0446926723,
            "unit": "iter/sec",
            "range": "stddev: 2.751567845965214e-7",
            "extra": "mean: 814.8976028808655 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 222.50630752367397,
            "unit": "iter/sec",
            "range": "stddev: 0.0002663284152865729",
            "extra": "mean: 4.494254617449903 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2943.5526678972124,
            "unit": "iter/sec",
            "range": "stddev: 0.00006540528012806745",
            "extra": "mean: 339.7255333346458 usec\nrounds: 1755"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 89.40164379921143,
            "unit": "iter/sec",
            "range": "stddev: 0.0007836411286031136",
            "extra": "mean: 11.185476659086001 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1228742.9421770053,
            "unit": "iter/sec",
            "range": "stddev: 2.5488216522923876e-7",
            "extra": "mean: 813.8398729910638 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.098268366728,
            "unit": "iter/sec",
            "range": "stddev: 0.0006039692432866324",
            "extra": "mean: 13.86995863636416 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4486736.919546951,
            "unit": "iter/sec",
            "range": "stddev: 2.628264434891771e-8",
            "extra": "mean: 222.87912528213636 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 66.10166783405684,
            "unit": "iter/sec",
            "range": "stddev: 0.0007239441241603499",
            "extra": "mean: 15.128211326080654 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 211.85290858937083,
            "unit": "iter/sec",
            "range": "stddev: 0.00026453018223500477",
            "extra": "mean: 4.720256175185561 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.85796330775122,
            "unit": "iter/sec",
            "range": "stddev: 0.0003254101459968331",
            "extra": "mean: 13.916342100001202 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3414.815066484674,
            "unit": "iter/sec",
            "range": "stddev: 0.000060761508611886165",
            "extra": "mean: 292.84162700776466 usec\nrounds: 1370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.49438361540036135,
            "unit": "iter/sec",
            "range": "stddev: 0.07538086194077515",
            "extra": "mean: 2.022720755399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 526.4755042848252,
            "unit": "iter/sec",
            "range": "stddev: 0.000026598636910720953",
            "extra": "mean: 1.8994236044437054 msec\nrounds: 450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 219.79460828831844,
            "unit": "iter/sec",
            "range": "stddev: 0.00022697561591096074",
            "extra": "mean: 4.549702141411207 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 116824.14560792965,
            "unit": "iter/sec",
            "range": "stddev: 8.694849771963705e-7",
            "extra": "mean: 8.55987428622909 usec\nrounds: 32049"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 230.7280252158878,
            "unit": "iter/sec",
            "range": "stddev: 0.00017147113806822487",
            "extra": "mean: 4.33410722024045 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 114.01495470365236,
            "unit": "iter/sec",
            "range": "stddev: 0.00010833859522151496",
            "extra": "mean: 8.770779259608528 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 49044.99441139897,
            "unit": "iter/sec",
            "range": "stddev: 0.000001702657283617537",
            "extra": "mean: 20.389440594320497 usec\nrounds: 10706"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 71.6098270098463,
            "unit": "iter/sec",
            "range": "stddev: 0.0007151398696810527",
            "extra": "mean: 13.964563828125165 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.83441631969545,
            "unit": "iter/sec",
            "range": "stddev: 0.0009130709162531959",
            "extra": "mean: 28.707241448297157 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9067.7137633345,
            "unit": "iter/sec",
            "range": "stddev: 0.000004130148516405861",
            "extra": "mean: 110.28138140437584 usec\nrounds: 3474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7128588770376852,
            "unit": "iter/sec",
            "range": "stddev: 0.007475245676908233",
            "extra": "mean: 1.4028021986000112 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2138.482180771867,
            "unit": "iter/sec",
            "range": "stddev: 0.00465571284042487",
            "extra": "mean: 467.621385387957 usec\nrounds: 1492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 191.28258370022863,
            "unit": "iter/sec",
            "range": "stddev: 0.00047614552187828546",
            "extra": "mean: 5.227867486185595 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3275.7195972535615,
            "unit": "iter/sec",
            "range": "stddev: 0.00007297455656553388",
            "extra": "mean: 305.27643478349705 usec\nrounds: 2277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.11184586309938,
            "unit": "iter/sec",
            "range": "stddev: 0.0005207880069205838",
            "extra": "mean: 21.68640142858045 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 144.7872734134016,
            "unit": "iter/sec",
            "range": "stddev: 0.00008016938545141292",
            "extra": "mean: 6.9066843820227595 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 83.10987565088149,
            "unit": "iter/sec",
            "range": "stddev: 0.00013528429355406083",
            "extra": "mean: 12.032264423071526 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.321769778961209,
            "unit": "iter/sec",
            "range": "stddev: 0.0019030941086266037",
            "extra": "mean: 756.5614041999879 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3722515.5594163933,
            "unit": "iter/sec",
            "range": "stddev: 3.885220504123427e-8",
            "extra": "mean: 268.6355460544422 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 81.61783701787088,
            "unit": "iter/sec",
            "range": "stddev: 0.00015702280329624472",
            "extra": "mean: 12.252223736106139 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1258449.7801162407,
            "unit": "iter/sec",
            "range": "stddev: 3.5487489713607376e-7",
            "extra": "mean: 794.6284514489182 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 210.27311484741782,
            "unit": "iter/sec",
            "range": "stddev: 0.00023629305075810298",
            "extra": "mean: 4.755719725394462 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6220708295798523,
            "unit": "iter/sec",
            "range": "stddev: 0.006423944696672643",
            "extra": "mean: 1.6075339856000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 87.75324697933459,
            "unit": "iter/sec",
            "range": "stddev: 0.0007642397427320897",
            "extra": "mean: 11.39558972940904 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.845924019424634,
            "unit": "iter/sec",
            "range": "stddev: 0.0009484718998469388",
            "extra": "mean: 127.45471374999795 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 58.69326106984058,
            "unit": "iter/sec",
            "range": "stddev: 0.00015097075571807086",
            "extra": "mean: 17.037731108688522 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 75.89641310703911,
            "unit": "iter/sec",
            "range": "stddev: 0.0007694354512749192",
            "extra": "mean: 13.17585323287503 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 92.07504088213757,
            "unit": "iter/sec",
            "range": "stddev: 0.00011309568125678372",
            "extra": "mean: 10.860706554342661 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.247508624028769,
            "unit": "iter/sec",
            "range": "stddev: 0.0011649435644476925",
            "extra": "mean: 235.43212940001013 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 229.4023562405968,
            "unit": "iter/sec",
            "range": "stddev: 0.00014883083538645665",
            "extra": "mean: 4.359153133332256 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 490639.60227488505,
            "unit": "iter/sec",
            "range": "stddev: 3.192662311571356e-7",
            "extra": "mean: 2.038155899693848 usec\nrounds: 21052"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 221.97773413614442,
            "unit": "iter/sec",
            "range": "stddev: 0.0002293694811735912",
            "extra": "mean: 4.504956336686793 msec\nrounds: 199"
          }
        ]
      }
    ]
  }
}