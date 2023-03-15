window.BENCHMARK_DATA = {
  "lastUpdate": 1678881848097,
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
          "id": "cceffebb85c36baab6069c06a6b5b9e3b4edf8c4",
          "message": "ci: include only a single macos nix job",
          "timestamp": "2023-03-15T07:40:52-04:00",
          "tree_id": "715a962c3adeb2b2811522a26e6a0c2ac6d362e9",
          "url": "https://github.com/ibis-project/ibis/commit/cceffebb85c36baab6069c06a6b5b9e3b4edf8c4"
        },
        "date": 1678881770161,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.52427372990316,
            "unit": "iter/sec",
            "range": "stddev: 0.00960406157102549",
            "extra": "mean: 10.807974596149759 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 322.12520315723543,
            "unit": "iter/sec",
            "range": "stddev: 0.00023371479796712051",
            "extra": "mean: 3.1043829858661547 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.53149594274076,
            "unit": "iter/sec",
            "range": "stddev: 0.00018532412854337582",
            "extra": "mean: 15.740224358974222 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 109.32431207001177,
            "unit": "iter/sec",
            "range": "stddev: 0.0006765722050212098",
            "extra": "mean: 9.147096204544104 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5240.79432448056,
            "unit": "iter/sec",
            "range": "stddev: 0.0000235036363299599",
            "extra": "mean: 190.8107699111269 usec\nrounds: 1469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1996841.23959936,
            "unit": "iter/sec",
            "range": "stddev: 1.4927103152479953e-7",
            "extra": "mean: 500.7909392940207 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.8207806238082,
            "unit": "iter/sec",
            "range": "stddev: 0.0006431952909740986",
            "extra": "mean: 8.208780102042489 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.61364223327269,
            "unit": "iter/sec",
            "range": "stddev: 0.0007259440941223874",
            "extra": "mean: 9.206946562497839 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.7473825682664,
            "unit": "iter/sec",
            "range": "stddev: 0.00015127081089011588",
            "extra": "mean: 8.35091321874959 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.487008197685157,
            "unit": "iter/sec",
            "range": "stddev: 0.0003675579543835912",
            "extra": "mean: 95.35608069999739 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12210.398132491464,
            "unit": "iter/sec",
            "range": "stddev: 0.000019030258318041988",
            "extra": "mean: 81.8974114643349 usec\nrounds: 4309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 498895.6725184881,
            "unit": "iter/sec",
            "range": "stddev: 4.787831064719741e-7",
            "extra": "mean: 2.0044270878355674 usec\nrounds: 2311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.585188199880584,
            "unit": "iter/sec",
            "range": "stddev: 0.00006330025247483282",
            "extra": "mean: 64.16348568749797 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.30238163683085,
            "unit": "iter/sec",
            "range": "stddev: 0.019615213251031795",
            "extra": "mean: 30.957469676471472 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.8593348148793,
            "unit": "iter/sec",
            "range": "stddev: 0.00032563961588135727",
            "extra": "mean: 3.5353261388897135 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.9199734172956,
            "unit": "iter/sec",
            "range": "stddev: 0.00001394438904618138",
            "extra": "mean: 1.3246437174967047 msec\nrounds: 623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11729372.052870842,
            "unit": "iter/sec",
            "range": "stddev: 4.243694019817976e-9",
            "extra": "mean: 85.25605595016172 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6958783.842527634,
            "unit": "iter/sec",
            "range": "stddev: 4.476413382192089e-9",
            "extra": "mean: 143.70327094930255 nsec\nrounds: 59524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6164919.100868874,
            "unit": "iter/sec",
            "range": "stddev: 8.340610232103859e-9",
            "extra": "mean: 162.20813016959463 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.2256762132184,
            "unit": "iter/sec",
            "range": "stddev: 0.00016850045645983922",
            "extra": "mean: 1.8614151264116274 msec\nrounds: 443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1175.9258051436013,
            "unit": "iter/sec",
            "range": "stddev: 0.00001756189372463549",
            "extra": "mean: 850.3937881334974 usec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.98020303991662,
            "unit": "iter/sec",
            "range": "stddev: 0.0006125300502275956",
            "extra": "mean: 9.347523855669618 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 104.2281678570968,
            "unit": "iter/sec",
            "range": "stddev: 0.0005548576089280749",
            "extra": "mean: 9.59433539473764 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.6680940436726,
            "unit": "iter/sec",
            "range": "stddev: 0.0002768246360872919",
            "extra": "mean: 5.190272966386055 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13968.48994793576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020605728287653624",
            "extra": "mean: 71.58969965452697 usec\nrounds: 6366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5457372.728073086,
            "unit": "iter/sec",
            "range": "stddev: 9.968183887471907e-9",
            "extra": "mean: 183.23835475908606 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.31372313535192,
            "unit": "iter/sec",
            "range": "stddev: 0.000751204605397653",
            "extra": "mean: 10.602910867646225 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2685923.487443053,
            "unit": "iter/sec",
            "range": "stddev: 1.5999112726325696e-8",
            "extra": "mean: 372.31142460893136 nsec\nrounds: 120468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12775.316292902304,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016597294277690277",
            "extra": "mean: 78.27594848321516 usec\nrounds: 5241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5578.191273661025,
            "unit": "iter/sec",
            "range": "stddev: 0.00009233803775828987",
            "extra": "mean: 179.2695787829609 usec\nrounds: 2234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.78112315063687,
            "unit": "iter/sec",
            "range": "stddev: 0.0006738135492603511",
            "extra": "mean: 8.211453254237542 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5507.719328704113,
            "unit": "iter/sec",
            "range": "stddev: 0.000065996672067168",
            "extra": "mean: 181.5633550512251 usec\nrounds: 3039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.23022566570512,
            "unit": "iter/sec",
            "range": "stddev: 0.00011482113020111099",
            "extra": "mean: 6.126316348100848 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 338.7169715945444,
            "unit": "iter/sec",
            "range": "stddev: 0.000010571621476151084",
            "extra": "mean: 2.9523173736833996 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9059226280251913,
            "unit": "iter/sec",
            "range": "stddev: 0.0032489708886619764",
            "extra": "mean: 1.1038470273999963 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.90130236661375,
            "unit": "iter/sec",
            "range": "stddev: 0.00047003995265136947",
            "extra": "mean: 18.552427419998594 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.835265097289,
            "unit": "iter/sec",
            "range": "stddev: 0.00016888806164985722",
            "extra": "mean: 9.917165378949209 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.403146741259,
            "unit": "iter/sec",
            "range": "stddev: 0.000019238776049003872",
            "extra": "mean: 1.465409420773321 msec\nrounds: 568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.00053286093681,
            "unit": "iter/sec",
            "range": "stddev: 0.0007080111075478086",
            "extra": "mean: 8.333296329265927 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5285.142845158267,
            "unit": "iter/sec",
            "range": "stddev: 0.00004660574208899451",
            "extra": "mean: 189.20964471492056 usec\nrounds: 2384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.77257734095832,
            "unit": "iter/sec",
            "range": "stddev: 0.003592045819113355",
            "extra": "mean: 6.143540984212031 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.68691445755534,
            "unit": "iter/sec",
            "range": "stddev: 0.0011555104007286048",
            "extra": "mean: 25.84853338709998 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.1087697346869,
            "unit": "iter/sec",
            "range": "stddev: 0.00007754315382400979",
            "extra": "mean: 6.168697730768276 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5320.755106758195,
            "unit": "iter/sec",
            "range": "stddev: 0.000050804862984109815",
            "extra": "mean: 187.943248643382 usec\nrounds: 2212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1776891.966477008,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011431748182133264",
            "extra": "mean: 562.7804159544212 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.00737283228551,
            "unit": "iter/sec",
            "range": "stddev: 0.0007703932896920367",
            "extra": "mean: 8.848980158879563 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.65408147160969,
            "unit": "iter/sec",
            "range": "stddev: 0.0010010421741937468",
            "extra": "mean: 17.96813411627539 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5403.7116049839215,
            "unit": "iter/sec",
            "range": "stddev: 0.00005101199018817399",
            "extra": "mean: 185.05798849029722 usec\nrounds: 2172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 788578.170686182,
            "unit": "iter/sec",
            "range": "stddev: 2.1062891514829968e-7",
            "extra": "mean: 1.2681051000053034 usec\nrounds: 24510"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6792581505366597,
            "unit": "iter/sec",
            "range": "stddev: 0.0068451012433511215",
            "extra": "mean: 1.4721943332000251 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.076084355773112,
            "unit": "iter/sec",
            "range": "stddev: 0.0005760001455750237",
            "extra": "mean: 41.534993200014014 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 203.86701747533456,
            "unit": "iter/sec",
            "range": "stddev: 0.01100076478665241",
            "extra": "mean: 4.905158334996429 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.37480000453411,
            "unit": "iter/sec",
            "range": "stddev: 0.0007298427742197524",
            "extra": "mean: 9.673537457447454 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69323.98142383988,
            "unit": "iter/sec",
            "range": "stddev: 0.000005102101742019786",
            "extra": "mean: 14.425022617874472 usec\nrounds: 14104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.21981870568415,
            "unit": "iter/sec",
            "range": "stddev: 0.000279987572821109",
            "extra": "mean: 8.991203291261009 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.3758081615349,
            "unit": "iter/sec",
            "range": "stddev: 0.00006133532375982851",
            "extra": "mean: 10.376047880438067 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1753.7351913187888,
            "unit": "iter/sec",
            "range": "stddev: 0.00000569756138576207",
            "extra": "mean: 570.211514800026 usec\nrounds: 1385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8744430384377814,
            "unit": "iter/sec",
            "range": "stddev: 0.013830187872214248",
            "extra": "mean: 1.1435850662000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.12455501277523,
            "unit": "iter/sec",
            "range": "stddev: 0.00025710669465802387",
            "extra": "mean: 10.854869256750565 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146338.26560577453,
            "unit": "iter/sec",
            "range": "stddev: 3.428964421898014e-7",
            "extra": "mean: 6.833482656504437 usec\nrounds: 39525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.29475091734815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000967627761573172",
            "extra": "mean: 6.19982977941066 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 306.4691004887242,
            "unit": "iter/sec",
            "range": "stddev: 0.00020541465277526663",
            "extra": "mean: 3.262971694064121 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5327.868945726115,
            "unit": "iter/sec",
            "range": "stddev: 0.00004710650700753512",
            "extra": "mean: 187.69230440665686 usec\nrounds: 2224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7912900662909605,
            "unit": "iter/sec",
            "range": "stddev: 0.002605380761637746",
            "extra": "mean: 558.2568779999974 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1687872036747759,
            "unit": "iter/sec",
            "range": "stddev: 0.1864113699204495",
            "extra": "mean: 5.924619747399982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8519.461993441184,
            "unit": "iter/sec",
            "range": "stddev: 0.000011660132331871491",
            "extra": "mean: 117.37830402551978 usec\nrounds: 3378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 62.851345161738124,
            "unit": "iter/sec",
            "range": "stddev: 0.0194976468711533",
            "extra": "mean: 15.9105584363653 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.2308703235906,
            "unit": "iter/sec",
            "range": "stddev: 0.00019821226629592663",
            "extra": "mean: 3.308728849999097 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.21050838009296,
            "unit": "iter/sec",
            "range": "stddev: 0.00021925769638675899",
            "extra": "mean: 3.244535707934964 msec\nrounds: 315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.57487061049231,
            "unit": "iter/sec",
            "range": "stddev: 0.0007032396356713227",
            "extra": "mean: 9.295851292452916 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.434670922464356,
            "unit": "iter/sec",
            "range": "stddev: 0.0002390210063469808",
            "extra": "mean: 20.646367177777037 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5714.395626939742,
            "unit": "iter/sec",
            "range": "stddev: 0.00004893735346942501",
            "extra": "mean: 174.99663398971464 usec\nrounds: 2183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.09235519422225,
            "unit": "iter/sec",
            "range": "stddev: 0.000037990190916609345",
            "extra": "mean: 3.4471780524187943 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.09916245352674,
            "unit": "iter/sec",
            "range": "stddev: 0.03039789765534992",
            "extra": "mean: 32.15520680000168 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5727.7377413226395,
            "unit": "iter/sec",
            "range": "stddev: 0.00004713276754489159",
            "extra": "mean: 174.58899921089642 usec\nrounds: 2537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8480340180176157,
            "unit": "iter/sec",
            "range": "stddev: 0.004746127334503713",
            "extra": "mean: 1.1791979787999822 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.57749553283037,
            "unit": "iter/sec",
            "range": "stddev: 0.002136074373387092",
            "extra": "mean: 179.29194100000245 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.24678454556138,
            "unit": "iter/sec",
            "range": "stddev: 0.0004105439008456792",
            "extra": "mean: 7.448967983740532 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1956090.212001493,
            "unit": "iter/sec",
            "range": "stddev: 8.093686457434217e-8",
            "extra": "mean: 511.2238657831578 nsec\nrounds: 178540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 286.16734564055196,
            "unit": "iter/sec",
            "range": "stddev: 0.0001708195511865689",
            "extra": "mean: 3.4944588026338836 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 314.0188539443932,
            "unit": "iter/sec",
            "range": "stddev: 0.0002857657669862044",
            "extra": "mean: 3.184522163045284 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 316.3093340598911,
            "unit": "iter/sec",
            "range": "stddev: 0.0001997881587364288",
            "extra": "mean: 3.1614621900808544 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.48278018455086,
            "unit": "iter/sec",
            "range": "stddev: 0.0006719900412749809",
            "extra": "mean: 8.299941273501812 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.20501840111153,
            "unit": "iter/sec",
            "range": "stddev: 0.0006527220958258295",
            "extra": "mean: 8.319120227269588 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.72005990087901,
            "unit": "iter/sec",
            "range": "stddev: 0.000791918355919248",
            "extra": "mean: 8.35281907499829 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.535022122821152,
            "unit": "iter/sec",
            "range": "stddev: 0.00239075984647466",
            "extra": "mean: 394.4738750000056 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 307.2086036452767,
            "unit": "iter/sec",
            "range": "stddev: 0.00023458438546239936",
            "extra": "mean: 3.255117168380694 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.72163107231445,
            "unit": "iter/sec",
            "range": "stddev: 0.0007325403365994398",
            "extra": "mean: 8.793401840711464 msec\nrounds: 113"
          }
        ]
      }
    ]
  }
}