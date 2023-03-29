window.BENCHMARK_DATA = {
  "lastUpdate": 1680108704243,
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
          "id": "59806d415b2a15cdd426cb9c539ab635abb6af35",
          "message": "chore(conda-lock): relock",
          "timestamp": "2023-03-29T16:28:14Z",
          "tree_id": "815bad47cb5e1892bb329f43f6031b08b9c968e8",
          "url": "https://github.com/ibis-project/ibis/commit/59806d415b2a15cdd426cb9c539ab635abb6af35"
        },
        "date": 1680108610880,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.79933779091897,
            "unit": "iter/sec",
            "range": "stddev: 0.00007766091632721522",
            "extra": "mean: 7.204645324074634 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5663718.115550037,
            "unit": "iter/sec",
            "range": "stddev: 1.7821585956563938e-8",
            "extra": "mean: 176.56245942994474 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 75.19019847227834,
            "unit": "iter/sec",
            "range": "stddev: 0.008866915651529557",
            "extra": "mean: 13.299605803922532 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 247.70130912867666,
            "unit": "iter/sec",
            "range": "stddev: 0.00009404150547347477",
            "extra": "mean: 4.037120366935634 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 267.49998369115826,
            "unit": "iter/sec",
            "range": "stddev: 0.00021147889441196858",
            "extra": "mean: 3.738317984925743 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1489311004067157,
            "unit": "iter/sec",
            "range": "stddev: 0.10265365077528742",
            "extra": "mean: 6.714514277200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4965.292692602062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000547146373637176",
            "extra": "mean: 201.3979964343149 usec\nrounds: 561"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 104.8478473959343,
            "unit": "iter/sec",
            "range": "stddev: 0.0005907415212317151",
            "extra": "mean: 9.537630240740425 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.888339490739085,
            "unit": "iter/sec",
            "range": "stddev: 0.0006787130658146099",
            "extra": "mean: 23.872992153844763 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 105.09954328590949,
            "unit": "iter/sec",
            "range": "stddev: 0.0006808916894621141",
            "extra": "mean: 9.514789205882956 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 99.9068306362281,
            "unit": "iter/sec",
            "range": "stddev: 0.00018125622695841056",
            "extra": "mean: 10.009325625002674 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2111780111174735,
            "unit": "iter/sec",
            "range": "stddev: 0.00247530240764513",
            "extra": "mean: 452.2476232000088 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.65136494838342,
            "unit": "iter/sec",
            "range": "stddev: 0.00009629004492709832",
            "extra": "mean: 10.565088000002257 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.51811040175927,
            "unit": "iter/sec",
            "range": "stddev: 0.0006274990244887271",
            "extra": "mean: 73.97483599999734 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.511472701894459,
            "unit": "iter/sec",
            "range": "stddev: 0.0043234239047224765",
            "extra": "mean: 661.6063913999994 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 119.75084725350696,
            "unit": "iter/sec",
            "range": "stddev: 0.00012815286115904032",
            "extra": "mean: 8.350671606381594 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 75.2595536220435,
            "unit": "iter/sec",
            "range": "stddev: 0.017083646519696266",
            "extra": "mean: 13.2873496037731 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 636002.5587639239,
            "unit": "iter/sec",
            "range": "stddev: 5.63520466922081e-7",
            "extra": "mean: 1.5723207182428762 usec\nrounds: 22222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1643749.3262443605,
            "unit": "iter/sec",
            "range": "stddev: 2.489643302842739e-7",
            "extra": "mean: 608.3652683738588 nsec\nrounds: 175408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.319939690831,
            "unit": "iter/sec",
            "range": "stddev: 0.0006233583376228872",
            "extra": "mean: 11.195708410253813 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.65018146438473,
            "unit": "iter/sec",
            "range": "stddev: 0.00017895629399951383",
            "extra": "mean: 11.408989499997032 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.12336494033011,
            "unit": "iter/sec",
            "range": "stddev: 0.0001648311088777665",
            "extra": "mean: 18.14112765217579 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.83630270655084,
            "unit": "iter/sec",
            "range": "stddev: 0.0005316631915594279",
            "extra": "mean: 26.429643714285636 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.175830619172583,
            "unit": "iter/sec",
            "range": "stddev: 0.0006419123800680497",
            "extra": "mean: 108.98195940000619 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2255146.0955818645,
            "unit": "iter/sec",
            "range": "stddev: 4.5433504747737944e-8",
            "extra": "mean: 443.4302513520568 nsec\nrounds: 103083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5828456309471922,
            "unit": "iter/sec",
            "range": "stddev: 0.0829803905693887",
            "extra": "mean: 1.7157201613999973 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4292.666853506349,
            "unit": "iter/sec",
            "range": "stddev: 0.00006260016802137412",
            "extra": "mean: 232.9554177220105 usec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 65.08655982000508,
            "unit": "iter/sec",
            "range": "stddev: 0.00015254946988589393",
            "extra": "mean: 15.364155100000215 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.07476369618611,
            "unit": "iter/sec",
            "range": "stddev: 0.0006602860471042547",
            "extra": "mean: 11.226524309520192 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4776.323436281674,
            "unit": "iter/sec",
            "range": "stddev: 0.00005877084950969075",
            "extra": "mean: 209.3660559927431 usec\nrounds: 3054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 297.9981722087839,
            "unit": "iter/sec",
            "range": "stddev: 0.00010720211655965741",
            "extra": "mean: 3.3557252804201045 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 102.0480735979659,
            "unit": "iter/sec",
            "range": "stddev: 0.0006866555760059754",
            "extra": "mean: 9.79930306121852 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 641.0103406623634,
            "unit": "iter/sec",
            "range": "stddev: 0.00002064350591609349",
            "extra": "mean: 1.5600372358528387 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.86954230339917,
            "unit": "iter/sec",
            "range": "stddev: 0.00015178152739401705",
            "extra": "mean: 12.214554666668517 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4666.978977164703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000574005176346481",
            "extra": "mean: 214.27137445721323 usec\nrounds: 1840"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 88.85181620398521,
            "unit": "iter/sec",
            "range": "stddev: 0.015517443867046628",
            "extra": "mean: 11.254693969386164 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12092.412812416496,
            "unit": "iter/sec",
            "range": "stddev: 0.000004760773098343178",
            "extra": "mean: 82.6964821258169 usec\nrounds: 6266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4472.084580790074,
            "unit": "iter/sec",
            "range": "stddev: 0.00005626508328054753",
            "extra": "mean: 223.60936648996292 usec\nrounds: 2262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 144.99096067142082,
            "unit": "iter/sec",
            "range": "stddev: 0.004323428345319932",
            "extra": "mean: 6.89698168333545 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 103.17058199471555,
            "unit": "iter/sec",
            "range": "stddev: 0.000665214825691285",
            "extra": "mean: 9.692685460000803 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 415669.9510304678,
            "unit": "iter/sec",
            "range": "stddev: 5.00648968008172e-7",
            "extra": "mean: 2.4057548483380797 usec\nrounds: 2011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 103.7432489337756,
            "unit": "iter/sec",
            "range": "stddev: 0.0006998955330811575",
            "extra": "mean: 9.639181443395406 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4673882.901844543,
            "unit": "iter/sec",
            "range": "stddev: 2.800248913250287e-8",
            "extra": "mean: 213.95486814741162 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.805977812076739,
            "unit": "iter/sec",
            "range": "stddev: 0.0006513171554450694",
            "extra": "mean: 208.07420240000738 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4420.324083328338,
            "unit": "iter/sec",
            "range": "stddev: 0.00004960939545159951",
            "extra": "mean: 226.22775641532547 usec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4872.605071202018,
            "unit": "iter/sec",
            "range": "stddev: 0.000056366886958051407",
            "extra": "mean: 205.2290274683212 usec\nrounds: 2694"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.84125155173506,
            "unit": "iter/sec",
            "range": "stddev: 0.0006739536115815849",
            "extra": "mean: 10.771074099994848 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.88211771968813,
            "unit": "iter/sec",
            "range": "stddev: 0.00011789738977152778",
            "extra": "mean: 7.305556172412778 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 137.90210654393306,
            "unit": "iter/sec",
            "range": "stddev: 0.00011124308026510978",
            "extra": "mean: 7.251520843747361 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 61200.093442854835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019038312963802573",
            "extra": "mean: 16.33984433265193 usec\nrounds: 12122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 246.2543229687246,
            "unit": "iter/sec",
            "range": "stddev: 0.000053053207175338674",
            "extra": "mean: 4.060842416671014 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.93853888990053,
            "unit": "iter/sec",
            "range": "stddev: 0.00048102497151313067",
            "extra": "mean: 17.562797000001257 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 262.5885603713379,
            "unit": "iter/sec",
            "range": "stddev: 0.00023007336508458877",
            "extra": "mean: 3.808239013100405 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4752.372704365057,
            "unit": "iter/sec",
            "range": "stddev: 0.00002821315572912054",
            "extra": "mean: 210.42120688082807 usec\nrounds: 2151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 93.55438874477687,
            "unit": "iter/sec",
            "range": "stddev: 0.000704902882484856",
            "extra": "mean: 10.688969415727488 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7191506345665325,
            "unit": "iter/sec",
            "range": "stddev: 0.004227845786814887",
            "extra": "mean: 1.3905292604000123 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.745518604260486,
            "unit": "iter/sec",
            "range": "stddev: 0.00042282598023150056",
            "extra": "mean: 43.96470431818112 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7204.979155991543,
            "unit": "iter/sec",
            "range": "stddev: 0.000014585164788328392",
            "extra": "mean: 138.7929067315089 usec\nrounds: 3313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.18457292866113,
            "unit": "iter/sec",
            "range": "stddev: 0.000877319685559524",
            "extra": "mean: 11.088370965520143 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 576.1988309074583,
            "unit": "iter/sec",
            "range": "stddev: 0.00003245970676053235",
            "extra": "mean: 1.7355120252935872 msec\nrounds: 514"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1618711.084567142,
            "unit": "iter/sec",
            "range": "stddev: 2.3405479331776523e-7",
            "extra": "mean: 617.7754693435049 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9803229.604748728,
            "unit": "iter/sec",
            "range": "stddev: 6.513562066190427e-9",
            "extra": "mean: 102.00719970031969 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.06811357346105,
            "unit": "iter/sec",
            "range": "stddev: 0.0008414983652382334",
            "extra": "mean: 10.409281111107937 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 982.2043526902664,
            "unit": "iter/sec",
            "range": "stddev: 0.000017413861437191847",
            "extra": "mean: 1.0181180700950785 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.44660071567019,
            "unit": "iter/sec",
            "range": "stddev: 0.0010015382095389068",
            "extra": "mean: 21.07632548836591 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 264.41936741388787,
            "unit": "iter/sec",
            "range": "stddev: 0.00027099683199499077",
            "extra": "mean: 3.7818712365147196 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 214.62146606315198,
            "unit": "iter/sec",
            "range": "stddev: 0.003368769814181534",
            "extra": "mean: 4.659366177779028 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 241.61344887526707,
            "unit": "iter/sec",
            "range": "stddev: 0.00031087913754236066",
            "extra": "mean: 4.138842455397629 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 269.1791087298744,
            "unit": "iter/sec",
            "range": "stddev: 0.00024301271902112516",
            "extra": "mean: 3.714998555120101 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.43802091333464,
            "unit": "iter/sec",
            "range": "stddev: 0.0012539732695141359",
            "extra": "mean: 28.218280090909918 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1498.7344623772685,
            "unit": "iter/sec",
            "range": "stddev: 0.000014491139978686349",
            "extra": "mean: 667.2296027768763 usec\nrounds: 1080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.737106424085065,
            "unit": "iter/sec",
            "range": "stddev: 0.011044940443118588",
            "extra": "mean: 1.3566561996000133 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.59482633914277,
            "unit": "iter/sec",
            "range": "stddev: 0.045609303056207695",
            "extra": "mean: 34.971361187499994 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.68114963649572,
            "unit": "iter/sec",
            "range": "stddev: 0.00012792954493319835",
            "extra": "mean: 5.963699570093778 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.737969728150248,
            "unit": "iter/sec",
            "range": "stddev: 0.02153590332883324",
            "extra": "mean: 1.3550691334000136 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 271.0734922046519,
            "unit": "iter/sec",
            "range": "stddev: 0.000290237973416304",
            "extra": "mean: 3.6890364744518496 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.63041453180466,
            "unit": "iter/sec",
            "range": "stddev: 0.0007853083807981321",
            "extra": "mean: 10.456924242103133 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 268.2235004677604,
            "unit": "iter/sec",
            "range": "stddev: 0.0003113709269819003",
            "extra": "mean: 3.7282340967740697 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11050.138115768512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033020072254933308",
            "extra": "mean: 90.49660642458424 usec\nrounds: 5074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 254.27893024911108,
            "unit": "iter/sec",
            "range": "stddev: 0.0002673110185909993",
            "extra": "mean: 3.9326891890740754 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4982666.568404451,
            "unit": "iter/sec",
            "range": "stddev: 2.346418916391238e-8",
            "extra": "mean: 200.69574920823962 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.79393694550801,
            "unit": "iter/sec",
            "range": "stddev: 0.0007215481062758648",
            "extra": "mean: 12.532280499994743 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10365.92276930178,
            "unit": "iter/sec",
            "range": "stddev: 0.000015462227697001047",
            "extra": "mean: 96.46994505510456 usec\nrounds: 4914"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 455.6465960831721,
            "unit": "iter/sec",
            "range": "stddev: 0.00003578978501896772",
            "extra": "mean: 2.1946833545914686 msec\nrounds: 392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.26173942928936,
            "unit": "iter/sec",
            "range": "stddev: 0.0007854432970006201",
            "extra": "mean: 11.459776146341067 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1442940.8603525383,
            "unit": "iter/sec",
            "range": "stddev: 1.2785387841580623e-7",
            "extra": "mean: 693.0290959781129 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4558.562696703888,
            "unit": "iter/sec",
            "range": "stddev: 0.00007788496009839498",
            "extra": "mean: 219.36738979658207 usec\nrounds: 2019"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144689.23398858088,
            "unit": "iter/sec",
            "range": "stddev: 7.419378587116532e-7",
            "extra": "mean: 6.911364255884594 usec\nrounds: 35088"
          }
        ]
      }
    ]
  }
}