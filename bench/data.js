window.BENCHMARK_DATA = {
  "lastUpdate": 1678494986736,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "db7f9db7bccc17065504bf4c926b064bd6eaa0f3",
          "message": "chore(flake/nixpkgs): `7eeb3262` -> `b9c3e7d6`",
          "timestamp": "2023-03-11T00:31:20Z",
          "tree_id": "2d77f036cbaf39ed36e66581d2f36ee7efe2eb31",
          "url": "https://github.com/ibis-project/ibis/commit/db7f9db7bccc17065504bf4c926b064bd6eaa0f3"
        },
        "date": 1678494902510,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 111.61702721185804,
            "unit": "iter/sec",
            "range": "stddev: 0.006377424299042261",
            "extra": "mean: 8.959206538460482 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.96013795670946,
            "unit": "iter/sec",
            "range": "stddev: 0.0010027589557509914",
            "extra": "mean: 21.294656351347545 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7713.129509452079,
            "unit": "iter/sec",
            "range": "stddev: 0.000021132050148558663",
            "extra": "mean: 129.64906122405267 usec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 709135.74989564,
            "unit": "iter/sec",
            "range": "stddev: 8.489621204914225e-7",
            "extra": "mean: 1.410167235465375 usec\nrounds: 23147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 677.2534515728458,
            "unit": "iter/sec",
            "range": "stddev: 0.00008802916120291281",
            "extra": "mean: 1.4765520909160539 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4550.637166671065,
            "unit": "iter/sec",
            "range": "stddev: 0.000051163980002565993",
            "extra": "mean: 219.74944680802398 usec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 13056.52339926347,
            "unit": "iter/sec",
            "range": "stddev: 0.000009650230510835027",
            "extra": "mean: 76.59006685167132 usec\nrounds: 5056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.773901116841187,
            "unit": "iter/sec",
            "range": "stddev: 0.0031949510141487205",
            "extra": "mean: 173.19312883333282 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5633.96431240552,
            "unit": "iter/sec",
            "range": "stddev: 0.00005383998929112895",
            "extra": "mean: 177.4949120281226 usec\nrounds: 2012"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.71477562802467,
            "unit": "iter/sec",
            "range": "stddev: 0.0004918596768094944",
            "extra": "mean: 8.423551278345952 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8290507925663223,
            "unit": "iter/sec",
            "range": "stddev: 0.02767989377291685",
            "extra": "mean: 1.2061987142000135 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 113.71572881566074,
            "unit": "iter/sec",
            "range": "stddev: 0.0006511304531023899",
            "extra": "mean: 8.793858249996825 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5832379375422163,
            "unit": "iter/sec",
            "range": "stddev: 0.01582721912913395",
            "extra": "mean: 387.11106920001157 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8809306776646322,
            "unit": "iter/sec",
            "range": "stddev: 0.017882161237683346",
            "extra": "mean: 1.1351631011999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 277.7891408268653,
            "unit": "iter/sec",
            "range": "stddev: 0.0003893686188832196",
            "extra": "mean: 3.5998527409077496 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.6325622337681,
            "unit": "iter/sec",
            "range": "stddev: 0.0009749901220325333",
            "extra": "mean: 9.377998418604284 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.63549552494058,
            "unit": "iter/sec",
            "range": "stddev: 0.0008658125246214445",
            "extra": "mean: 9.743217927534618 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.93943797172838,
            "unit": "iter/sec",
            "range": "stddev: 0.00025272419973478005",
            "extra": "mean: 6.252366600017467 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2006798.0327049575,
            "unit": "iter/sec",
            "range": "stddev: 3.342501389495218e-7",
            "extra": "mean: 498.30624891140775 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5206.668701237121,
            "unit": "iter/sec",
            "range": "stddev: 0.000055735394434451546",
            "extra": "mean: 192.06138461669298 usec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5933775.039210818,
            "unit": "iter/sec",
            "range": "stddev: 4.455303571391952e-8",
            "extra": "mean: 168.52677989852486 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5323.527266165529,
            "unit": "iter/sec",
            "range": "stddev: 0.00009162102636887049",
            "extra": "mean: 187.8453795767421 usec\nrounds: 1939"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.87973084482368,
            "unit": "iter/sec",
            "range": "stddev: 0.0005716125140728755",
            "extra": "mean: 9.62651704877641 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.74551065437043,
            "unit": "iter/sec",
            "range": "stddev: 0.0004801107575022429",
            "extra": "mean: 6.033345917195324 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 61.76271242594359,
            "unit": "iter/sec",
            "range": "stddev: 0.0011591436839184816",
            "extra": "mean: 16.19099875509916 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11619942.547616903,
            "unit": "iter/sec",
            "range": "stddev: 1.8215519497771602e-8",
            "extra": "mean: 86.05894529184897 nsec\nrounds: 92585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5510.985237198968,
            "unit": "iter/sec",
            "range": "stddev: 0.000046217636350361987",
            "extra": "mean: 181.4557573571479 usec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 307.19204675694436,
            "unit": "iter/sec",
            "range": "stddev: 0.0003471108113022794",
            "extra": "mean: 3.255292611111176 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 169558.82158940568,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013663951608450947",
            "extra": "mean: 5.897658350218693 usec\nrounds: 37035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5980.448311285274,
            "unit": "iter/sec",
            "range": "stddev: 0.00006286785597834566",
            "extra": "mean: 167.21154467851045 usec\nrounds: 1992"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.19665587523933,
            "unit": "iter/sec",
            "range": "stddev: 0.000830113440582914",
            "extra": "mean: 8.319699019230379 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 318.8420456863084,
            "unit": "iter/sec",
            "range": "stddev: 0.0003398974885248089",
            "extra": "mean: 3.136349215949538 msec\nrounds: 301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 106.62724363854237,
            "unit": "iter/sec",
            "range": "stddev: 0.0008313206055903153",
            "extra": "mean: 9.37846619565557 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.39368637413392,
            "unit": "iter/sec",
            "range": "stddev: 0.0007964348912521893",
            "extra": "mean: 8.237660704346778 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 321.1779816210936,
            "unit": "iter/sec",
            "range": "stddev: 0.00034604296175816797",
            "extra": "mean: 3.113538465347664 msec\nrounds: 303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5274.293534046296,
            "unit": "iter/sec",
            "range": "stddev: 0.00004407023186090685",
            "extra": "mean: 189.5988521580874 usec\nrounds: 1691"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.31654291172107,
            "unit": "iter/sec",
            "range": "stddev: 0.000521022873639204",
            "extra": "mean: 10.602593873017437 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 113.01471885122082,
            "unit": "iter/sec",
            "range": "stddev: 0.0006054691768758048",
            "extra": "mean: 8.848404970298235 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12255.557166021346,
            "unit": "iter/sec",
            "range": "stddev: 0.00001648649029151468",
            "extra": "mean: 81.59563750985633 usec\nrounds: 5476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 104.8488185288937,
            "unit": "iter/sec",
            "range": "stddev: 0.0007463790594085018",
            "extra": "mean: 9.537541901098532 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1930425.6107055522,
            "unit": "iter/sec",
            "range": "stddev: 3.2203636323938954e-7",
            "extra": "mean: 518.0204792426626 nsec\nrounds: 136968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 99.15357109233841,
            "unit": "iter/sec",
            "range": "stddev: 0.015484327544679044",
            "extra": "mean: 10.085365448600268 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.7716293531151,
            "unit": "iter/sec",
            "range": "stddev: 0.0010111386703234417",
            "extra": "mean: 10.779157453338637 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 287.756958504061,
            "unit": "iter/sec",
            "range": "stddev: 0.000672245213764253",
            "extra": "mean: 3.475154884867493 msec\nrounds: 304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5579.995167027611,
            "unit": "iter/sec",
            "range": "stddev: 0.00005503217054806475",
            "extra": "mean: 179.2116247535545 usec\nrounds: 2537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.80577055551042,
            "unit": "iter/sec",
            "range": "stddev: 0.0020597105562602455",
            "extra": "mean: 92.54314580000482 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14408.164500918016,
            "unit": "iter/sec",
            "range": "stddev: 0.000009802376919335973",
            "extra": "mean: 69.4050931981159 usec\nrounds: 6234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 107.09807932113598,
            "unit": "iter/sec",
            "range": "stddev: 0.0007358160466744793",
            "extra": "mean: 9.33723561000079 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70676.86092200087,
            "unit": "iter/sec",
            "range": "stddev: 0.000002564833740157051",
            "extra": "mean: 14.148902299206554 usec\nrounds: 15527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.524953453921736,
            "unit": "iter/sec",
            "range": "stddev: 0.028184824417052712",
            "extra": "mean: 32.76008271427924 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 312.7209549837996,
            "unit": "iter/sec",
            "range": "stddev: 0.00035928909040525977",
            "extra": "mean: 3.1977390196055286 msec\nrounds: 306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 469173.7583187953,
            "unit": "iter/sec",
            "range": "stddev: 6.577825875820966e-7",
            "extra": "mean: 2.131406504028125 usec\nrounds: 2091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 203.92242446845577,
            "unit": "iter/sec",
            "range": "stddev: 0.00399658405715776",
            "extra": "mean: 4.903825572918723 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.265363464716803,
            "unit": "iter/sec",
            "range": "stddev: 0.001009118968301185",
            "extra": "mean: 38.07295495237808 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8850004436383286,
            "unit": "iter/sec",
            "range": "stddev: 0.05062574106102323",
            "extra": "mean: 1.1299429364000049 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1801.374870917518,
            "unit": "iter/sec",
            "range": "stddev: 0.00006904928640187091",
            "extra": "mean: 555.1315365527759 usec\nrounds: 1491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.294221444152384,
            "unit": "iter/sec",
            "range": "stddev: 0.0008571386620776448",
            "extra": "mean: 15.799230596150855 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 207.73516552486413,
            "unit": "iter/sec",
            "range": "stddev: 0.00036390069486733767",
            "extra": "mean: 4.813821470589237 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17100709548779738,
            "unit": "iter/sec",
            "range": "stddev: 0.21868928573678137",
            "extra": "mean: 5.847710571000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1134.1807972356648,
            "unit": "iter/sec",
            "range": "stddev: 0.00009919944878088828",
            "extra": "mean: 881.6936439386884 usec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 336.0029384163079,
            "unit": "iter/sec",
            "range": "stddev: 0.00022128052136654973",
            "extra": "mean: 2.9761644487793113 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.59154980676563,
            "unit": "iter/sec",
            "range": "stddev: 0.0007387868205174466",
            "extra": "mean: 18.317853285712513 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.25868688562298,
            "unit": "iter/sec",
            "range": "stddev: 0.00036756602694378254",
            "extra": "mean: 6.358949192595749 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6659328463174244,
            "unit": "iter/sec",
            "range": "stddev: 0.08109457460673523",
            "extra": "mean: 1.5016529152000089 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2529922.4114389475,
            "unit": "iter/sec",
            "range": "stddev: 6.778620582910432e-8",
            "extra": "mean: 395.2690388757006 nsec\nrounds: 111099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.53336013970213,
            "unit": "iter/sec",
            "range": "stddev: 0.000689300440622314",
            "extra": "mean: 7.602634030924899 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 116.49744174630833,
            "unit": "iter/sec",
            "range": "stddev: 0.0008915521233520423",
            "extra": "mean: 8.58387948275859 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.707809816957114,
            "unit": "iter/sec",
            "range": "stddev: 0.009134304586980084",
            "extra": "mean: 585.5452932000048 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.692135196941116,
            "unit": "iter/sec",
            "range": "stddev: 0.034737328164142385",
            "extra": "mean: 34.85275644827613 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1998488.664308814,
            "unit": "iter/sec",
            "range": "stddev: 3.7180851258521416e-7",
            "extra": "mean: 500.378119655662 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 318.04500763417167,
            "unit": "iter/sec",
            "range": "stddev: 0.0003683849749374391",
            "extra": "mean: 3.1442090773210336 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5120.371051937785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000588479765007875",
            "extra": "mean: 195.29834651759344 usec\nrounds: 3489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.537236928685,
            "unit": "iter/sec",
            "range": "stddev: 0.00018138241983696064",
            "extra": "mean: 1.843191456610465 msec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 109.09235244852054,
            "unit": "iter/sec",
            "range": "stddev: 0.0008011790731423305",
            "extra": "mean: 9.166545386138674 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.02005292502645,
            "unit": "iter/sec",
            "range": "stddev: 0.00339750548140914",
            "extra": "mean: 62.42176631250729 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 286.7218341673777,
            "unit": "iter/sec",
            "range": "stddev: 0.0003757392450632249",
            "extra": "mean: 3.4877009032253765 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.88726451624197,
            "unit": "iter/sec",
            "range": "stddev: 0.0006380743724737879",
            "extra": "mean: 13.177441648143375 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 122.83823658380508,
            "unit": "iter/sec",
            "range": "stddev: 0.0007500296267188038",
            "extra": "mean: 8.14078765546069 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 661.3356625836427,
            "unit": "iter/sec",
            "range": "stddev: 0.0001763501159668352",
            "extra": "mean: 1.5120914485290209 msec\nrounds: 544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.08644208446246,
            "unit": "iter/sec",
            "range": "stddev: 0.002450561220076367",
            "extra": "mean: 24.338929078947114 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6745263.194118584,
            "unit": "iter/sec",
            "range": "stddev: 2.2659008327990706e-8",
            "extra": "mean: 148.25218397288393 nsec\nrounds: 62890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 329.423826387972,
            "unit": "iter/sec",
            "range": "stddev: 0.0003172446542441644",
            "extra": "mean: 3.0356031346144072 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.77445485667916,
            "unit": "iter/sec",
            "range": "stddev: 0.0009421438370807938",
            "extra": "mean: 9.193334972973172 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.6131450191515,
            "unit": "iter/sec",
            "range": "stddev: 0.010357490741967255",
            "extra": "mean: 3.779101752211231 msec\nrounds: 339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.69387603459853,
            "unit": "iter/sec",
            "range": "stddev: 0.00365132929476621",
            "extra": "mean: 6.184526121360493 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 98.75202234629688,
            "unit": "iter/sec",
            "range": "stddev: 0.0008077156752637288",
            "extra": "mean: 10.126374895830162 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5469231.586548153,
            "unit": "iter/sec",
            "range": "stddev: 3.748465883338768e-8",
            "extra": "mean: 182.84104159360044 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.18552984261494,
            "unit": "iter/sec",
            "range": "stddev: 0.0008730592172930536",
            "extra": "mean: 8.835051630632512 msec\nrounds: 111"
          }
        ]
      }
    ]
  }
}