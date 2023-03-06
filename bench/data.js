window.BENCHMARK_DATA = {
  "lastUpdate": 1678104906982,
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
          "id": "ced5a61b0700c963522c15a24ebb018e33d44aba",
          "message": "fix(polars): back compat for `concat_str` separator argument",
          "timestamp": "2023-03-06T07:08:28-05:00",
          "tree_id": "e1d287dd5c20cf654fcdb11d1c24504e3802a44b",
          "url": "https://github.com/ibis-project/ibis/commit/ced5a61b0700c963522c15a24ebb018e33d44aba"
        },
        "date": 1678104821717,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.34385632314083,
            "unit": "iter/sec",
            "range": "stddev: 0.0004867555411869325",
            "extra": "mean: 9.315856857142027 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.44619287234553,
            "unit": "iter/sec",
            "range": "stddev: 0.00009350790021471493",
            "extra": "mean: 7.437919800001207 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1184.277404597993,
            "unit": "iter/sec",
            "range": "stddev: 0.000017711604301808728",
            "extra": "mean: 844.3967571427688 usec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.78023691965973,
            "unit": "iter/sec",
            "range": "stddev: 0.0005218442658936904",
            "extra": "mean: 6.955058785713168 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.00514961853182,
            "unit": "iter/sec",
            "range": "stddev: 0.00022714084866116158",
            "extra": "mean: 8.402997712329897 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.39797217068761,
            "unit": "iter/sec",
            "range": "stddev: 0.00005261436681231519",
            "extra": "mean: 13.44122656603797 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139496.9486493753,
            "unit": "iter/sec",
            "range": "stddev: 3.6194186844119254e-7",
            "extra": "mean: 7.168615583940074 usec\nrounds: 37038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5359.1846002497105,
            "unit": "iter/sec",
            "range": "stddev: 0.000021311920570961118",
            "extra": "mean: 186.59555036663696 usec\nrounds: 1499"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.0687636219924,
            "unit": "iter/sec",
            "range": "stddev: 0.000191096402492482",
            "extra": "mean: 3.225091067925529 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5865.523150309985,
            "unit": "iter/sec",
            "range": "stddev: 0.00004452234453666504",
            "extra": "mean: 170.48777651608987 usec\nrounds: 3611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8073.490215408169,
            "unit": "iter/sec",
            "range": "stddev: 0.000013145641219153884",
            "extra": "mean: 123.86216782569586 usec\nrounds: 4457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 497780.3779971334,
            "unit": "iter/sec",
            "range": "stddev: 4.3472288982065265e-7",
            "extra": "mean: 2.0089180775337003 usec\nrounds: 2185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1756.7868781124826,
            "unit": "iter/sec",
            "range": "stddev: 0.000005514334194323966",
            "extra": "mean: 569.2210093659252 usec\nrounds: 1388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 217.15189145305965,
            "unit": "iter/sec",
            "range": "stddev: 0.00787625459866129",
            "extra": "mean: 4.605071562161196 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 309.4955665875533,
            "unit": "iter/sec",
            "range": "stddev: 0.00021586648657503124",
            "extra": "mean: 3.2310640537628177 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2510142.226055368,
            "unit": "iter/sec",
            "range": "stddev: 1.6017552769287655e-8",
            "extra": "mean: 398.3838005751879 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.28641739999694,
            "unit": "iter/sec",
            "range": "stddev: 0.00005498140678997441",
            "extra": "mean: 3.4330471325300134 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1651897.0880302691,
            "unit": "iter/sec",
            "range": "stddev: 7.659274827333513e-8",
            "extra": "mean: 605.3645879310831 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.14356926493609,
            "unit": "iter/sec",
            "range": "stddev: 0.0005553572168765719",
            "extra": "mean: 9.333271300000092 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.773504564246,
            "unit": "iter/sec",
            "range": "stddev: 0.0002156641034222665",
            "extra": "mean: 3.2386198466453315 msec\nrounds: 313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2484180.2114281636,
            "unit": "iter/sec",
            "range": "stddev: 1.6974994485823677e-8",
            "extra": "mean: 402.54728517678524 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11871.31787159816,
            "unit": "iter/sec",
            "range": "stddev: 0.00002224955788139274",
            "extra": "mean: 84.23664590706275 usec\nrounds: 2553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 140.05700627446743,
            "unit": "iter/sec",
            "range": "stddev: 0.0005835379180804442",
            "extra": "mean: 7.139949843282501 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9179313648714492,
            "unit": "iter/sec",
            "range": "stddev: 0.003062164988427279",
            "extra": "mean: 1.0894060692000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.8282920426509,
            "unit": "iter/sec",
            "range": "stddev: 0.000024849068171751846",
            "extra": "mean: 3.069101193548595 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.62152769511069,
            "unit": "iter/sec",
            "range": "stddev: 0.00019206965171408345",
            "extra": "mean: 17.058579660376278 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5331.83713777541,
            "unit": "iter/sec",
            "range": "stddev: 0.000038031947879142705",
            "extra": "mean: 187.55261538562814 usec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2465107.287303379,
            "unit": "iter/sec",
            "range": "stddev: 3.461216656296982e-8",
            "extra": "mean: 405.66185705218123 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9173149488270816,
            "unit": "iter/sec",
            "range": "stddev: 0.0027749398572995305",
            "extra": "mean: 1.0901381268000079 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.96813037491674,
            "unit": "iter/sec",
            "range": "stddev: 0.00004609846931556046",
            "extra": "mean: 7.300968460785329 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.34859120241964,
            "unit": "iter/sec",
            "range": "stddev: 0.0004647072629329564",
            "extra": "mean: 22.051401675001614 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 691.0743102423161,
            "unit": "iter/sec",
            "range": "stddev: 0.000025480594703291143",
            "extra": "mean: 1.447022389892287 msec\nrounds: 554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5675.122305135328,
            "unit": "iter/sec",
            "range": "stddev: 0.00004188340686436973",
            "extra": "mean: 176.2076561936147 usec\nrounds: 2196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 195.09913168042496,
            "unit": "iter/sec",
            "range": "stddev: 0.00005062418263018328",
            "extra": "mean: 5.125599439560878 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5839.864552790487,
            "unit": "iter/sec",
            "range": "stddev: 0.000040722026050430395",
            "extra": "mean: 171.23684821117396 usec\nrounds: 2655"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 84.41513454620696,
            "unit": "iter/sec",
            "range": "stddev: 0.016857632705566332",
            "extra": "mean: 11.846216977272274 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.645053878242244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005365749507287229",
            "extra": "mean: 24.60323962161879 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.52386276746199,
            "unit": "iter/sec",
            "range": "stddev: 0.0005763331212813828",
            "extra": "mean: 9.849901025638438 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.6055116879126,
            "unit": "iter/sec",
            "range": "stddev: 0.00006874448691975123",
            "extra": "mean: 1.8328260594478782 msec\nrounds: 471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 131.47222140102872,
            "unit": "iter/sec",
            "range": "stddev: 0.0006422421532807803",
            "extra": "mean: 7.606169496061891 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.6207035352732,
            "unit": "iter/sec",
            "range": "stddev: 0.00026395330689855896",
            "extra": "mean: 3.538311197626724 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5044056740775122,
            "unit": "iter/sec",
            "range": "stddev: 0.003068135276076801",
            "extra": "mean: 399.2963321999923 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 737242.4180595028,
            "unit": "iter/sec",
            "range": "stddev: 1.8723979930241012e-7",
            "extra": "mean: 1.3564059466791152 usec\nrounds: 23981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 139.5772405200071,
            "unit": "iter/sec",
            "range": "stddev: 0.0006122246525539405",
            "extra": "mean: 7.1644918345886 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13235.149024924709,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016963471425436167",
            "extra": "mean: 75.55638384704086 usec\nrounds: 7008"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5329.823194384532,
            "unit": "iter/sec",
            "range": "stddev: 0.00004249236118320884",
            "extra": "mean: 187.6234845939343 usec\nrounds: 2499"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.76006600607366,
            "unit": "iter/sec",
            "range": "stddev: 0.00015194975294420242",
            "extra": "mean: 9.27987553333196 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6845588312398552,
            "unit": "iter/sec",
            "range": "stddev: 0.0013387496552527028",
            "extra": "mean: 1.4607948278000094 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 140.2062201789323,
            "unit": "iter/sec",
            "range": "stddev: 0.0006021581377116898",
            "extra": "mean: 7.132351180452564 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 163.19416094150336,
            "unit": "iter/sec",
            "range": "stddev: 0.011207274570853952",
            "extra": "mean: 6.127670219515073 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.48974780766791,
            "unit": "iter/sec",
            "range": "stddev: 0.0006021373574512834",
            "extra": "mean: 10.696360012193564 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 300.9934366050247,
            "unit": "iter/sec",
            "range": "stddev: 0.00020243471337604731",
            "extra": "mean: 3.3223315806458555 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.89725627063154,
            "unit": "iter/sec",
            "range": "stddev: 0.00011248001933520521",
            "extra": "mean: 6.5403397313420575 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.07596417254075,
            "unit": "iter/sec",
            "range": "stddev: 0.0004519963551566878",
            "extra": "mean: 15.134096225803859 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5580978.056991182,
            "unit": "iter/sec",
            "range": "stddev: 1.4348851677739128e-8",
            "extra": "mean: 179.1800630263957 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.17327377076116,
            "unit": "iter/sec",
            "range": "stddev: 0.0006610585446485209",
            "extra": "mean: 9.59939112790631 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.8767514246421,
            "unit": "iter/sec",
            "range": "stddev: 0.00006496746451016799",
            "extra": "mean: 10.113600877777017 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.87478352285657,
            "unit": "iter/sec",
            "range": "stddev: 0.00006275728928514298",
            "extra": "mean: 6.216014580420076 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.44044030909123,
            "unit": "iter/sec",
            "range": "stddev: 0.00005275804937545422",
            "extra": "mean: 10.477738752686207 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.2932220387623,
            "unit": "iter/sec",
            "range": "stddev: 0.0007167708007186292",
            "extra": "mean: 9.87232886734836 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5546.968667003279,
            "unit": "iter/sec",
            "range": "stddev: 0.00005208927008006768",
            "extra": "mean: 180.27864587528757 usec\nrounds: 3431"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 740.3156670073918,
            "unit": "iter/sec",
            "range": "stddev: 0.000014042014936077905",
            "extra": "mean: 1.350775141693733 msec\nrounds: 614"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.380155345082976,
            "unit": "iter/sec",
            "range": "stddev: 0.0005683693868811337",
            "extra": "mean: 96.33767190909091 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 298.75565315495237,
            "unit": "iter/sec",
            "range": "stddev: 0.00021838352158424514",
            "extra": "mean: 3.347216996363717 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69024.05398993814,
            "unit": "iter/sec",
            "range": "stddev: 4.4305102819794335e-7",
            "extra": "mean: 14.487703086025245 usec\nrounds: 3661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12135359.14668781,
            "unit": "iter/sec",
            "range": "stddev: 6.218616036727033e-9",
            "extra": "mean: 82.40382405749794 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8551549662538683,
            "unit": "iter/sec",
            "range": "stddev: 0.00320873819840867",
            "extra": "mean: 1.169378696800004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.553918147350329,
            "unit": "iter/sec",
            "range": "stddev: 0.0006299817106878765",
            "extra": "mean: 180.05306766666726 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5514.484632545439,
            "unit": "iter/sec",
            "range": "stddev: 0.000045606614779545865",
            "extra": "mean: 181.34060871222493 usec\nrounds: 2640"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6386370.49147458,
            "unit": "iter/sec",
            "range": "stddev: 9.529088524049858e-9",
            "extra": "mean: 156.58346181683942 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 140.82814283570778,
            "unit": "iter/sec",
            "range": "stddev: 0.0005652456029573871",
            "extra": "mean: 7.1008534222212605 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5777.763061326653,
            "unit": "iter/sec",
            "range": "stddev: 0.000049710197716805734",
            "extra": "mean: 173.07736391848275 usec\nrounds: 3869"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 271.09813896612303,
            "unit": "iter/sec",
            "range": "stddev: 0.008677310706877557",
            "extra": "mean: 3.688701087413079 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 171.8513587497848,
            "unit": "iter/sec",
            "range": "stddev: 0.003910646363942867",
            "extra": "mean: 5.818982213902643 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.081682086758057,
            "unit": "iter/sec",
            "range": "stddev: 0.00022637614514425428",
            "extra": "mean: 36.92532822726558 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 316.54577804934894,
            "unit": "iter/sec",
            "range": "stddev: 0.00019001970611867976",
            "extra": "mean: 3.1591007346940567 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17871535827451826,
            "unit": "iter/sec",
            "range": "stddev: 0.011039629185205718",
            "extra": "mean: 5.5954899996000105 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8024320736511315,
            "unit": "iter/sec",
            "range": "stddev: 0.001980189121114509",
            "extra": "mean: 554.805928400026 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 141.82170141448165,
            "unit": "iter/sec",
            "range": "stddev: 0.0005646227853239533",
            "extra": "mean: 7.051107059260596 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.42198741516151,
            "unit": "iter/sec",
            "range": "stddev: 0.0007551632543109508",
            "extra": "mean: 26.722257931037895 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.78877043991055,
            "unit": "iter/sec",
            "range": "stddev: 0.000517720938489543",
            "extra": "mean: 63.336154249999055 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7045457.527396851,
            "unit": "iter/sec",
            "range": "stddev: 7.47831437773451e-9",
            "extra": "mean: 141.93542379776295 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.70536137170807,
            "unit": "iter/sec",
            "range": "stddev: 0.0006402279587967263",
            "extra": "mean: 9.832323355552969 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11532.52438993221,
            "unit": "iter/sec",
            "range": "stddev: 0.000015810227439805846",
            "extra": "mean: 86.71128420703718 usec\nrounds: 5781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.27238881630432,
            "unit": "iter/sec",
            "range": "stddev: 0.00031312474124488407",
            "extra": "mean: 20.7157761304376 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.01874418966953,
            "unit": "iter/sec",
            "range": "stddev: 0.00015962716933344486",
            "extra": "mean: 13.885274052632555 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 131.22146780549463,
            "unit": "iter/sec",
            "range": "stddev: 0.000600963933770522",
            "extra": "mean: 7.620704269839962 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 353.1367604452074,
            "unit": "iter/sec",
            "range": "stddev: 0.00003423347242355331",
            "extra": "mean: 2.8317640982470293 msec\nrounds: 285"
          }
        ]
      }
    ]
  }
}