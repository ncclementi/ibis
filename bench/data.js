window.BENCHMARK_DATA = {
  "lastUpdate": 1680398192592,
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
          "id": "d31494544c22879cee8267f69c4bfc83a66b9af2",
          "message": "chore(conda-lock): relock",
          "timestamp": "2023-04-02T01:11:11Z",
          "tree_id": "b50047d96b1ea5eb50a4cbc717ee6491b9ad40cb",
          "url": "https://github.com/ibis-project/ibis/commit/d31494544c22879cee8267f69c4bfc83a66b9af2"
        },
        "date": 1680398113953,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12683.958471834716,
            "unit": "iter/sec",
            "range": "stddev: 0.000004154560241672055",
            "extra": "mean: 78.83974093896188 usec\nrounds: 4111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 92.40412558376597,
            "unit": "iter/sec",
            "range": "stddev: 0.011095053910519981",
            "extra": "mean: 10.822027627905882 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.493572655100046,
            "unit": "iter/sec",
            "range": "stddev: 0.00018280973310964315",
            "extra": "mean: 64.54289286666419 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.782817404350904,
            "unit": "iter/sec",
            "range": "stddev: 0.0012262002755083579",
            "extra": "mean: 42.047163000000864 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8271566717159083,
            "unit": "iter/sec",
            "range": "stddev: 0.0029342420924914343",
            "extra": "mean: 1.2089608102 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 340.83058912773936,
            "unit": "iter/sec",
            "range": "stddev: 0.00008333252686008843",
            "extra": "mean: 2.9340089531260105 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13966.737969962958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020325138842981293",
            "extra": "mean: 71.59867981704909 usec\nrounds: 3067"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.71683271610131,
            "unit": "iter/sec",
            "range": "stddev: 0.00011672488183178923",
            "extra": "mean: 9.735502678162755 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5715218.819709819,
            "unit": "iter/sec",
            "range": "stddev: 5.11155581556891e-9",
            "extra": "mean: 174.97142831206085 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4269.453361585783,
            "unit": "iter/sec",
            "range": "stddev: 0.0021770001252693827",
            "extra": "mean: 234.2220221908162 usec\nrounds: 1397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5132.954871380904,
            "unit": "iter/sec",
            "range": "stddev: 0.000042572918622205964",
            "extra": "mean: 194.8195581409764 usec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.6619812788241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000428213228713764",
            "extra": "mean: 3.428626506668403 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6135277.994073693,
            "unit": "iter/sec",
            "range": "stddev: 8.440904039892057e-9",
            "extra": "mean: 162.99179938785528 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 122.12804839505506,
            "unit": "iter/sec",
            "range": "stddev: 0.0005085995945706739",
            "extra": "mean: 8.188127241378973 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17066549412791207,
            "unit": "iter/sec",
            "range": "stddev: 0.10292270051060705",
            "extra": "mean: 5.859415256200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.67697674258307,
            "unit": "iter/sec",
            "range": "stddev: 0.00021088954403190727",
            "extra": "mean: 3.3369263493971424 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12209.314079211255,
            "unit": "iter/sec",
            "range": "stddev: 0.000011041639290618572",
            "extra": "mean: 81.90468305690453 usec\nrounds: 3742"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.41199796969997,
            "unit": "iter/sec",
            "range": "stddev: 0.0005755314367353887",
            "extra": "mean: 8.236418284209142 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.4758356738612,
            "unit": "iter/sec",
            "range": "stddev: 0.00009826727440890397",
            "extra": "mean: 6.270542466666029 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5722.180087680701,
            "unit": "iter/sec",
            "range": "stddev: 0.000048984033826400784",
            "extra": "mean: 174.75856835629887 usec\nrounds: 2604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 226.47911941788132,
            "unit": "iter/sec",
            "range": "stddev: 0.011015657583945609",
            "extra": "mean: 4.415418086092428 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.1113523710773,
            "unit": "iter/sec",
            "range": "stddev: 0.00006942948943284004",
            "extra": "mean: 1.8687699215667957 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.7282769845368,
            "unit": "iter/sec",
            "range": "stddev: 0.000632089060842442",
            "extra": "mean: 8.283063628317024 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.7907317970842,
            "unit": "iter/sec",
            "range": "stddev: 0.00026203810279957715",
            "extra": "mean: 3.270210297490564 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.07846537994092,
            "unit": "iter/sec",
            "range": "stddev: 0.014047297332871493",
            "extra": "mean: 10.86030263290908 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7284349484589354,
            "unit": "iter/sec",
            "range": "stddev: 0.0020633254146909",
            "extra": "mean: 578.5580770000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5130793049074174,
            "unit": "iter/sec",
            "range": "stddev: 0.0026171068981813363",
            "extra": "mean: 397.91820259999326 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5150.261566378797,
            "unit": "iter/sec",
            "range": "stddev: 0.00005158148001871792",
            "extra": "mean: 194.16489572647285 usec\nrounds: 2340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.50293895559147,
            "unit": "iter/sec",
            "range": "stddev: 0.0000761472691400271",
            "extra": "mean: 13.244517549021099 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2714935.7122641765,
            "unit": "iter/sec",
            "range": "stddev: 1.4540179553166621e-8",
            "extra": "mean: 368.3328468819657 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 284.06673843929553,
            "unit": "iter/sec",
            "range": "stddev: 0.00010143339915114318",
            "extra": "mean: 3.5202995095242313 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.2020776030922,
            "unit": "iter/sec",
            "range": "stddev: 0.0007363310767319861",
            "extra": "mean: 9.881220066666351 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.25303864880567,
            "unit": "iter/sec",
            "range": "stddev: 0.0002577953733361047",
            "extra": "mean: 3.2231755226480177 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8395.389205505033,
            "unit": "iter/sec",
            "range": "stddev: 0.00001720242000683696",
            "extra": "mean: 119.11300066282561 usec\nrounds: 4527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6781425870388552,
            "unit": "iter/sec",
            "range": "stddev: 0.005587301445526477",
            "extra": "mean: 1.4746161340000072 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 781985.9700849801,
            "unit": "iter/sec",
            "range": "stddev: 2.0831353567743334e-7",
            "extra": "mean: 1.2787953214701893 usec\nrounds: 23256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.4117037979128,
            "unit": "iter/sec",
            "range": "stddev: 0.014779775542079468",
            "extra": "mean: 10.821140168422971 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.2675372042154,
            "unit": "iter/sec",
            "range": "stddev: 0.000057123397431886",
            "extra": "mean: 1.4657006899343086 msec\nrounds: 616"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.69724470155292,
            "unit": "iter/sec",
            "range": "stddev: 0.00017102699600741778",
            "extra": "mean: 10.559969333337966 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.95099992415365,
            "unit": "iter/sec",
            "range": "stddev: 0.000625639406913865",
            "extra": "mean: 9.619917083333837 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5217.37326762073,
            "unit": "iter/sec",
            "range": "stddev: 0.00010167059105312454",
            "extra": "mean: 191.66732926816798 usec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11528710.453720639,
            "unit": "iter/sec",
            "range": "stddev: 3.0559038270276903e-9",
            "extra": "mean: 86.73997009592316 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 498586.5039182179,
            "unit": "iter/sec",
            "range": "stddev: 9.380389622711728e-8",
            "extra": "mean: 2.005670013410607 usec\nrounds: 2191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.599402772926219,
            "unit": "iter/sec",
            "range": "stddev: 0.00019963954339667856",
            "extra": "mean: 178.59047483333748 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.46122828290974,
            "unit": "iter/sec",
            "range": "stddev: 0.00004344690370437217",
            "extra": "mean: 10.475457083334305 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8374549123487188,
            "unit": "iter/sec",
            "range": "stddev: 0.028723834606425167",
            "extra": "mean: 1.194094136000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.09782145497325,
            "unit": "iter/sec",
            "range": "stddev: 0.024414787543070905",
            "extra": "mean: 26.248220024388324 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73926.17975115676,
            "unit": "iter/sec",
            "range": "stddev: 7.406256755932977e-7",
            "extra": "mean: 13.527007663132391 usec\nrounds: 13832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.54852580597154,
            "unit": "iter/sec",
            "range": "stddev: 0.0006247294295639334",
            "extra": "mean: 8.654372637165398 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.4312939386597,
            "unit": "iter/sec",
            "range": "stddev: 0.00033277425275925096",
            "extra": "mean: 15.28320685416181 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 753.7473207136043,
            "unit": "iter/sec",
            "range": "stddev: 0.000011040721580219212",
            "extra": "mean: 1.326704550078212 msec\nrounds: 629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.20655898315474,
            "unit": "iter/sec",
            "range": "stddev: 0.00011306243846391555",
            "extra": "mean: 6.164978816324257 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.83988362006431,
            "unit": "iter/sec",
            "range": "stddev: 0.00006833854292378677",
            "extra": "mean: 8.941354082566281 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.09321777117306,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940003237942608",
            "extra": "mean: 8.258100811968479 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.378791003709956,
            "unit": "iter/sec",
            "range": "stddev: 0.02598042473755562",
            "extra": "mean: 26.753139230767175 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.589842705387639,
            "unit": "iter/sec",
            "range": "stddev: 0.0003135009729666838",
            "extra": "mean: 94.43010890910065 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5692.001460772341,
            "unit": "iter/sec",
            "range": "stddev: 0.00004817195114794141",
            "extra": "mean: 175.6851270843334 usec\nrounds: 2219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.48129176732995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006048262920330628",
            "extra": "mean: 9.391321079998534 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.845144665851534,
            "unit": "iter/sec",
            "range": "stddev: 0.005081997162904284",
            "extra": "mean: 1.1832293812000103 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1794.3748857385374,
            "unit": "iter/sec",
            "range": "stddev: 0.000007278080977198185",
            "extra": "mean: 557.2971445085819 usec\nrounds: 1384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.72441260026385,
            "unit": "iter/sec",
            "range": "stddev: 0.0001949228824811036",
            "extra": "mean: 8.352515400002858 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1170.3483652250738,
            "unit": "iter/sec",
            "range": "stddev: 0.000009387111196584906",
            "extra": "mean: 854.4464449332455 usec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.961726717743,
            "unit": "iter/sec",
            "range": "stddev: 0.00022637500540226944",
            "extra": "mean: 3.2366468514514946 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.83995559884744,
            "unit": "iter/sec",
            "range": "stddev: 0.0007497939738093845",
            "extra": "mean: 8.344462370692145 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.70902057048633,
            "unit": "iter/sec",
            "range": "stddev: 0.00047813922648302866",
            "extra": "mean: 18.61884632000738 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 157.92876327231258,
            "unit": "iter/sec",
            "range": "stddev: 0.0035519681390478353",
            "extra": "mean: 6.331968789470765 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.27486156705083,
            "unit": "iter/sec",
            "range": "stddev: 0.00023267401930446508",
            "extra": "mean: 15.804064603765658 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.101832576881066,
            "unit": "iter/sec",
            "range": "stddev: 0.0005405405677536424",
            "extra": "mean: 21.691111700003773 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.63000666206183,
            "unit": "iter/sec",
            "range": "stddev: 0.0006628728651940893",
            "extra": "mean: 10.567472573167539 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5233.015343428377,
            "unit": "iter/sec",
            "range": "stddev: 0.000059979693078858176",
            "extra": "mean: 191.0944139034105 usec\nrounds: 2805"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.78148198018918,
            "unit": "iter/sec",
            "range": "stddev: 0.0008527784499223526",
            "extra": "mean: 23.934048114285492 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 312.26254624417356,
            "unit": "iter/sec",
            "range": "stddev: 0.0002469547876838637",
            "extra": "mean: 3.202433375464922 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5526.39057905028,
            "unit": "iter/sec",
            "range": "stddev: 0.000026306853813697896",
            "extra": "mean: 180.9499320932636 usec\nrounds: 2474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5337.297299754527,
            "unit": "iter/sec",
            "range": "stddev: 0.000055668306491141395",
            "extra": "mean: 187.36074530567973 usec\nrounds: 2450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.71895282506628,
            "unit": "iter/sec",
            "range": "stddev: 0.00007879588035289122",
            "extra": "mean: 6.1455656064543795 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146576.4919132557,
            "unit": "iter/sec",
            "range": "stddev: 3.7214250426869794e-7",
            "extra": "mean: 6.8223764052956195 usec\nrounds: 34601"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 219.24952697174047,
            "unit": "iter/sec",
            "range": "stddev: 0.003976282398916599",
            "extra": "mean: 4.561013261063464 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.38366953638172,
            "unit": "iter/sec",
            "range": "stddev: 0.000058392320450486404",
            "extra": "mean: 5.040737487803195 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.1132217695972,
            "unit": "iter/sec",
            "range": "stddev: 0.0007197611097401979",
            "extra": "mean: 8.840699472223697 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.45994352275738,
            "unit": "iter/sec",
            "range": "stddev: 0.0004591038063442482",
            "extra": "mean: 7.2748465798288615 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.09261696167354,
            "unit": "iter/sec",
            "range": "stddev: 0.0007371958031810798",
            "extra": "mean: 9.70001567010145 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2715128.5981538286,
            "unit": "iter/sec",
            "range": "stddev: 4.314242449343326e-8",
            "extra": "mean: 368.3066800886658 nsec\nrounds: 121937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.5078672214117,
            "unit": "iter/sec",
            "range": "stddev: 0.0007145882792476218",
            "extra": "mean: 8.29821341176571 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 297.39465050048125,
            "unit": "iter/sec",
            "range": "stddev: 0.00024060598552307387",
            "extra": "mean: 3.3625352652346443 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2715052.655176402,
            "unit": "iter/sec",
            "range": "stddev: 1.963464327250788e-8",
            "extra": "mean: 368.3169820273283 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6962994.984598077,
            "unit": "iter/sec",
            "range": "stddev: 3.918995898332403e-9",
            "extra": "mean: 143.61636080623379 nsec\nrounds: 58480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1844435.6084954003,
            "unit": "iter/sec",
            "range": "stddev: 1.1117832695984095e-7",
            "extra": "mean: 542.1712720108189 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 307.2185927087616,
            "unit": "iter/sec",
            "range": "stddev: 0.000318999918364844",
            "extra": "mean: 3.2550113298252894 msec\nrounds: 285"
          }
        ]
      }
    ]
  }
}