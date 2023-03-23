window.BENCHMARK_DATA = {
  "lastUpdate": 1679578311898,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "ab0df7aac6f06727d857c7c23a3279f341bdee64",
          "message": "feat(pyspark): support basic caching",
          "timestamp": "2023-03-23T09:26:12-04:00",
          "tree_id": "25b78974dd2231517bea1fbf81975627c5f787a8",
          "url": "https://github.com/ibis-project/ibis/commit/ab0df7aac6f06727d857c7c23a3279f341bdee64"
        },
        "date": 1679578224825,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.11232810591997,
            "unit": "iter/sec",
            "range": "stddev: 0.00006034921291215214",
            "extra": "mean: 6.206849666665922 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7125215.17987233,
            "unit": "iter/sec",
            "range": "stddev: 9.475190878227043e-9",
            "extra": "mean: 140.3466386283996 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13435.269092448234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015689417684129212",
            "extra": "mean: 74.43096175588215 usec\nrounds: 5465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.12076068354354,
            "unit": "iter/sec",
            "range": "stddev: 0.00040678624193701704",
            "extra": "mean: 17.205555953488105 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11548.832962956803,
            "unit": "iter/sec",
            "range": "stddev: 0.000012902836950417658",
            "extra": "mean: 86.58883570379166 usec\nrounds: 4711"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7804.471262478949,
            "unit": "iter/sec",
            "range": "stddev: 0.000014000681435755984",
            "extra": "mean: 128.13167815834433 usec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 315.70224070675664,
            "unit": "iter/sec",
            "range": "stddev: 0.00016433019173255382",
            "extra": "mean: 3.1675416612860237 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5906076.488011009,
            "unit": "iter/sec",
            "range": "stddev: 9.535595484814723e-9",
            "extra": "mean: 169.31714345922202 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1789693.735287059,
            "unit": "iter/sec",
            "range": "stddev: 1.0170564561623516e-7",
            "extra": "mean: 558.7548194884888 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.8724120965545,
            "unit": "iter/sec",
            "range": "stddev: 0.00006808592893736134",
            "extra": "mean: 10.114044745094754 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5105.264684450591,
            "unit": "iter/sec",
            "range": "stddev: 0.00010429117614773059",
            "extra": "mean: 195.87623008964837 usec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11991.672471033206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027175544631933354",
            "extra": "mean: 83.3912035552652 usec\nrounds: 5738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9301235277617449,
            "unit": "iter/sec",
            "range": "stddev: 0.001785983810968414",
            "extra": "mean: 1.075126013000022 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.81559572877529,
            "unit": "iter/sec",
            "range": "stddev: 0.0005167026946965552",
            "extra": "mean: 9.361928781815593 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1692368.8326289,
            "unit": "iter/sec",
            "range": "stddev: 1.0852142144594339e-7",
            "extra": "mean: 590.8877430971211 nsec\nrounds: 35588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.63875155924737,
            "unit": "iter/sec",
            "range": "stddev: 0.00027685859936227476",
            "extra": "mean: 14.784424267855709 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 107.98438936373387,
            "unit": "iter/sec",
            "range": "stddev: 0.010193919155881264",
            "extra": "mean: 9.260597813185822 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.81880935150249,
            "unit": "iter/sec",
            "range": "stddev: 0.0007488676584914802",
            "extra": "mean: 26.441868931028928 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.08179886099995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006128332760334587",
            "extra": "mean: 8.765640180853252 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.48526242291798,
            "unit": "iter/sec",
            "range": "stddev: 0.00022233932622058977",
            "extra": "mean: 10.696873219182933 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.621154288429204,
            "unit": "iter/sec",
            "range": "stddev: 0.0014349013437793092",
            "extra": "mean: 381.51130760001024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.26766036913864,
            "unit": "iter/sec",
            "range": "stddev: 0.014079863330529496",
            "extra": "mean: 12.30501770886159 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5408.7676123283745,
            "unit": "iter/sec",
            "range": "stddev: 0.00009320809067878934",
            "extra": "mean: 184.88499999901427 usec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6405517.808451676,
            "unit": "iter/sec",
            "range": "stddev: 9.904724758716837e-9",
            "extra": "mean: 156.11540392236014 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.299843201834607,
            "unit": "iter/sec",
            "range": "stddev: 0.0006318115877250138",
            "extra": "mean: 97.088856636369 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 355.7548174406579,
            "unit": "iter/sec",
            "range": "stddev: 0.000029434478563037417",
            "extra": "mean: 2.8109246901956744 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2563268.400461223,
            "unit": "iter/sec",
            "range": "stddev: 1.7481529780686517e-8",
            "extra": "mean: 390.12691757905617 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 245.40174938964537,
            "unit": "iter/sec",
            "range": "stddev: 0.004160742499019144",
            "extra": "mean: 4.074950575891023 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5797.215260470136,
            "unit": "iter/sec",
            "range": "stddev: 0.00004540756598987171",
            "extra": "mean: 172.49661347212128 usec\nrounds: 2212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.49966816129749,
            "unit": "iter/sec",
            "range": "stddev: 0.0002262570870226225",
            "extra": "mean: 9.478702800004157 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8609504814417679,
            "unit": "iter/sec",
            "range": "stddev: 0.0029668770096721512",
            "extra": "mean: 1.1615069873999915 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.04311838113205,
            "unit": "iter/sec",
            "range": "stddev: 0.00021623719326925472",
            "extra": "mean: 3.321783289309281 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.79817255434728,
            "unit": "iter/sec",
            "range": "stddev: 0.002145818787971228",
            "extra": "mean: 556.1201552000057 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.06363153201946,
            "unit": "iter/sec",
            "range": "stddev: 0.0006056534531695805",
            "extra": "mean: 9.340239871285617 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5476.679037725905,
            "unit": "iter/sec",
            "range": "stddev: 0.00004858875996317856",
            "extra": "mean: 182.5924055639442 usec\nrounds: 2912"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.1889041912979,
            "unit": "iter/sec",
            "range": "stddev: 0.00001761186474362269",
            "extra": "mean: 1.3312230710816515 msec\nrounds: 619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6649698400734679,
            "unit": "iter/sec",
            "range": "stddev: 0.05486586075322498",
            "extra": "mean: 1.5038276019999899 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.577689856126902,
            "unit": "iter/sec",
            "range": "stddev: 0.00010939688354479159",
            "extra": "mean: 64.19437087500413 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.84666760758101,
            "unit": "iter/sec",
            "range": "stddev: 0.0006124974315169778",
            "extra": "mean: 9.818681587629722 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 307.3270877924322,
            "unit": "iter/sec",
            "range": "stddev: 0.0002197595281301981",
            "extra": "mean: 3.2538622195105593 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1179.5681438922168,
            "unit": "iter/sec",
            "range": "stddev: 0.000011290230109230685",
            "extra": "mean: 847.7678930021826 usec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.28065491106767,
            "unit": "iter/sec",
            "range": "stddev: 0.00004031455940820246",
            "extra": "mean: 6.481694030767708 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5293.777476526636,
            "unit": "iter/sec",
            "range": "stddev: 0.000047226583558544984",
            "extra": "mean: 188.90102661740934 usec\nrounds: 2442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18055948446924974,
            "unit": "iter/sec",
            "range": "stddev: 0.07734391787220499",
            "extra": "mean: 5.538341023399994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.87202161211366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006491523041914361",
            "extra": "mean: 8.27321316101642 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.71892150227932,
            "unit": "iter/sec",
            "range": "stddev: 0.00034440263378347026",
            "extra": "mean: 20.525905934785825 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 287.07595896262046,
            "unit": "iter/sec",
            "range": "stddev: 0.00023358082224703277",
            "extra": "mean: 3.4833986224886493 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.77612376755309,
            "unit": "iter/sec",
            "range": "stddev: 0.00004757016581275373",
            "extra": "mean: 8.419200494848756 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 314.844301357626,
            "unit": "iter/sec",
            "range": "stddev: 0.00020587579494266725",
            "extra": "mean: 3.176173097902502 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9252135637392828,
            "unit": "iter/sec",
            "range": "stddev: 0.001464379389255298",
            "extra": "mean: 1.080831538999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.961226305784,
            "unit": "iter/sec",
            "range": "stddev: 0.00010849882847549306",
            "extra": "mean: 13.705909983049793 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138381.59297476386,
            "unit": "iter/sec",
            "range": "stddev: 3.756464330686669e-7",
            "extra": "mean: 7.22639462737191 usec\nrounds: 41842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 491433.6023568615,
            "unit": "iter/sec",
            "range": "stddev: 5.410140011518514e-7",
            "extra": "mean: 2.034862889318333 usec\nrounds: 2188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5821.834795979144,
            "unit": "iter/sec",
            "range": "stddev: 0.00004130046599325487",
            "extra": "mean: 171.76715503687103 usec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69556.8397621714,
            "unit": "iter/sec",
            "range": "stddev: 4.3108318403162226e-7",
            "extra": "mean: 14.376731367025842 usec\nrounds: 13967"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 106.74809184344588,
            "unit": "iter/sec",
            "range": "stddev: 0.01220531781775513",
            "extra": "mean: 9.367848949155695 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.5382985487989,
            "unit": "iter/sec",
            "range": "stddev: 0.00011289446350680963",
            "extra": "mean: 9.046638252338703 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.933776222876865,
            "unit": "iter/sec",
            "range": "stddev: 0.0005552660081412035",
            "extra": "mean: 27.828970542855455 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11221881.216444047,
            "unit": "iter/sec",
            "range": "stddev: 3.814235979690328e-9",
            "extra": "mean: 89.11161869501309 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 187.34701298036555,
            "unit": "iter/sec",
            "range": "stddev: 0.000030765021068137436",
            "extra": "mean: 5.33768851764294 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.59852625223758,
            "unit": "iter/sec",
            "range": "stddev: 0.00003553180445587524",
            "extra": "mean: 7.374711419354371 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 177.67658540489768,
            "unit": "iter/sec",
            "range": "stddev: 0.003947602583154381",
            "extra": "mean: 5.628203613442668 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 316.4862506465611,
            "unit": "iter/sec",
            "range": "stddev: 0.00008311915456950326",
            "extra": "mean: 3.1596949249993145 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.8905221160012,
            "unit": "iter/sec",
            "range": "stddev: 0.000017115182223521897",
            "extra": "mean: 1.4558360725657549 msec\nrounds: 565"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.30130646507148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005596920404059816",
            "extra": "mean: 9.775046229164511 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2521076.897238239,
            "unit": "iter/sec",
            "range": "stddev: 1.4720573487017694e-8",
            "extra": "mean: 396.65588982839245 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5286.514015374884,
            "unit": "iter/sec",
            "range": "stddev: 0.00004902793503776075",
            "extra": "mean: 189.1605691560976 usec\nrounds: 2263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5812.449334444672,
            "unit": "iter/sec",
            "range": "stddev: 0.00004417053701877389",
            "extra": "mean: 172.04451040527502 usec\nrounds: 2739"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.7017545726748,
            "unit": "iter/sec",
            "range": "stddev: 0.000048972901403505716",
            "extra": "mean: 3.4518258319665764 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.09344058188143,
            "unit": "iter/sec",
            "range": "stddev: 0.0008505281374006184",
            "extra": "mean: 22.17617434145845 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 754333.3863582833,
            "unit": "iter/sec",
            "range": "stddev: 1.4957249315180397e-7",
            "extra": "mean: 1.3256737910378438 usec\nrounds: 22832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.4068243169828,
            "unit": "iter/sec",
            "range": "stddev: 0.00003902235260490431",
            "extra": "mean: 1.8402418873868889 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.892534883152965,
            "unit": "iter/sec",
            "range": "stddev: 0.000618285355427562",
            "extra": "mean: 37.18504054545106 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.04308283942285,
            "unit": "iter/sec",
            "range": "stddev: 0.0006592556226692881",
            "extra": "mean: 8.26152124137991 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.15131915453024,
            "unit": "iter/sec",
            "range": "stddev: 0.014293060822075942",
            "extra": "mean: 11.21688393939132 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 307.0164367923014,
            "unit": "iter/sec",
            "range": "stddev: 0.00020206360994857374",
            "extra": "mean: 3.257154602040106 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.53445358802111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000835947449665503",
            "extra": "mean: 13.599067528298079 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.75957095986172,
            "unit": "iter/sec",
            "range": "stddev: 0.000057544234133524624",
            "extra": "mean: 6.069450133756522 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.1386224253789,
            "unit": "iter/sec",
            "range": "stddev: 0.00019204128312480423",
            "extra": "mean: 3.2037047906145095 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.61666651856156,
            "unit": "iter/sec",
            "range": "stddev: 0.0006243684868403289",
            "extra": "mean: 8.724734633929135 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.61660501577882,
            "unit": "iter/sec",
            "range": "stddev: 0.0007065251640425505",
            "extra": "mean: 8.360043322313723 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 295.6678709474844,
            "unit": "iter/sec",
            "range": "stddev: 0.000232924009560356",
            "extra": "mean: 3.3821733717479803 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1744.4133300328497,
            "unit": "iter/sec",
            "range": "stddev: 0.000004901035740905376",
            "extra": "mean: 573.2586324487492 usec\nrounds: 1393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.444239578313827,
            "unit": "iter/sec",
            "range": "stddev: 0.0005411654006721585",
            "extra": "mean: 183.6803810000068 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.15819633281663,
            "unit": "iter/sec",
            "range": "stddev: 0.0005858453944272564",
            "extra": "mean: 8.25367189565154 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.05821351763181,
            "unit": "iter/sec",
            "range": "stddev: 0.000561194643450048",
            "extra": "mean: 9.340712563219695 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.05095737241462,
            "unit": "iter/sec",
            "range": "stddev: 0.017288922181646887",
            "extra": "mean: 11.357059932585 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5574.586200951863,
            "unit": "iter/sec",
            "range": "stddev: 0.000056471061271028834",
            "extra": "mean: 179.38551202764603 usec\nrounds: 3492"
          }
        ]
      }
    ]
  }
}