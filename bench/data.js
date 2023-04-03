window.BENCHMARK_DATA = {
  "lastUpdate": 1680522888425,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "d4126a9d09ae07bb8fdec3f590aaa83f949e691d",
          "message": "ci: reduce the minimum amount of time spent waiting for containers to start",
          "timestamp": "2023-04-03T13:49:40+02:00",
          "tree_id": "7ba107425e3a06dfbacf1125101766992b404e9d",
          "url": "https://github.com/ibis-project/ibis/commit/d4126a9d09ae07bb8fdec3f590aaa83f949e691d"
        },
        "date": 1680522809376,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.22049476045864,
            "unit": "iter/sec",
            "range": "stddev: 0.016524467731208345",
            "extra": "mean: 26.163973184213177 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 294.9061968140217,
            "unit": "iter/sec",
            "range": "stddev: 0.000047247127595550225",
            "extra": "mean: 3.3909087391291255 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.25374966927657,
            "unit": "iter/sec",
            "range": "stddev: 0.00018680551075909047",
            "extra": "mean: 6.2792870000028715 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 335.9981511949715,
            "unit": "iter/sec",
            "range": "stddev: 0.00014895083554181023",
            "extra": "mean: 2.9762068524589123 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2732905.642533883,
            "unit": "iter/sec",
            "range": "stddev: 1.319635975631168e-8",
            "extra": "mean: 365.91091343791527 nsec\nrounds: 104156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 495470.66344486084,
            "unit": "iter/sec",
            "range": "stddev: 3.434882771075616e-7",
            "extra": "mean: 2.018282965629682 usec\nrounds: 2131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.52566853722018,
            "unit": "iter/sec",
            "range": "stddev: 0.00004199375586976633",
            "extra": "mean: 7.167140000001058 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5764.524587853839,
            "unit": "iter/sec",
            "range": "stddev: 0.00004561411917947166",
            "extra": "mean: 173.47484337338997 usec\nrounds: 664"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.19816051290256,
            "unit": "iter/sec",
            "range": "stddev: 0.00007322412412675774",
            "extra": "mean: 13.123676388889608 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.71922620915736,
            "unit": "iter/sec",
            "range": "stddev: 0.014936287167466115",
            "extra": "mean: 11.803696099999428 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8790549199401352,
            "unit": "iter/sec",
            "range": "stddev: 0.006905304825977823",
            "extra": "mean: 1.1375853514000027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.1751048594604,
            "unit": "iter/sec",
            "range": "stddev: 0.00004398834257268457",
            "extra": "mean: 1.4637535719421677 msec\nrounds: 556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 758.9910711793021,
            "unit": "iter/sec",
            "range": "stddev: 0.000011394189081629968",
            "extra": "mean: 1.3175385560810668 msec\nrounds: 633"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12647.166577114389,
            "unit": "iter/sec",
            "range": "stddev: 0.000001656813046494633",
            "extra": "mean: 79.06909376915652 usec\nrounds: 4927"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.404525838653676,
            "unit": "iter/sec",
            "range": "stddev: 0.00020508906541450125",
            "extra": "mean: 20.65922520000072 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6823191853179774,
            "unit": "iter/sec",
            "range": "stddev: 0.045615500129847726",
            "extra": "mean: 1.4655897438000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.245194256516896,
            "unit": "iter/sec",
            "range": "stddev: 0.0005312036732728529",
            "extra": "mean: 18.101121979167207 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.81289241421167,
            "unit": "iter/sec",
            "range": "stddev: 0.0005535720060302824",
            "extra": "mean: 8.786350814814467 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1862137.1525391303,
            "unit": "iter/sec",
            "range": "stddev: 1.6325692416113217e-7",
            "extra": "mean: 537.0173720214126 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.524320897898857,
            "unit": "iter/sec",
            "range": "stddev: 0.0002551918054248235",
            "extra": "mean: 64.41505599999194 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.10722440872415,
            "unit": "iter/sec",
            "range": "stddev: 0.0006903989417358315",
            "extra": "mean: 16.364677166669544 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7059549.942903732,
            "unit": "iter/sec",
            "range": "stddev: 4.4248680323860095e-9",
            "extra": "mean: 141.6520894515728 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5454274.491582523,
            "unit": "iter/sec",
            "range": "stddev: 9.84050434392285e-9",
            "extra": "mean: 183.3424411520763 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 699637.3269437607,
            "unit": "iter/sec",
            "range": "stddev: 0.000015814548284077754",
            "extra": "mean: 1.4293119613390546 usec\nrounds: 22272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5221.019484471616,
            "unit": "iter/sec",
            "range": "stddev: 0.00008846364207785574",
            "extra": "mean: 191.53347406080465 usec\nrounds: 2236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.8151665568288,
            "unit": "iter/sec",
            "range": "stddev: 0.0005745642565019124",
            "extra": "mean: 9.540604025638016 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.22548960025854,
            "unit": "iter/sec",
            "range": "stddev: 0.00006492863847473371",
            "extra": "mean: 8.910631653842179 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.4096437532649,
            "unit": "iter/sec",
            "range": "stddev: 0.000059627944169429384",
            "extra": "mean: 5.170372999992247 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.64527026157936,
            "unit": "iter/sec",
            "range": "stddev: 0.00020857581674691862",
            "extra": "mean: 3.21910582819416 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5357.2548118960285,
            "unit": "iter/sec",
            "range": "stddev: 0.00005131662874513045",
            "extra": "mean: 186.66276574701178 usec\nrounds: 1921"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.95225796655794,
            "unit": "iter/sec",
            "range": "stddev: 0.0006586871865133245",
            "extra": "mean: 9.619800661970286 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.96130496347921,
            "unit": "iter/sec",
            "range": "stddev: 0.00010754861738941301",
            "extra": "mean: 15.393779428572023 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.631096041563491,
            "unit": "iter/sec",
            "range": "stddev: 0.00046764568463044477",
            "extra": "mean: 177.58532133334862 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.6364392143308,
            "unit": "iter/sec",
            "range": "stddev: 0.0005936007450458427",
            "extra": "mean: 8.647793090087387 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.93501754863787,
            "unit": "iter/sec",
            "range": "stddev: 0.0006904247859950387",
            "extra": "mean: 9.179784632186935 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.22303083150882,
            "unit": "iter/sec",
            "range": "stddev: 0.00005479125526870016",
            "extra": "mean: 6.126586394736633 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.6903040288837,
            "unit": "iter/sec",
            "range": "stddev: 0.003646555171296058",
            "extra": "mean: 6.035356177665512 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5097482486991547,
            "unit": "iter/sec",
            "range": "stddev: 0.0028973184496783127",
            "extra": "mean: 398.4463384000037 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.14148186854739,
            "unit": "iter/sec",
            "range": "stddev: 0.0006650260682216268",
            "extra": "mean: 8.323519773912466 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.11583798820998,
            "unit": "iter/sec",
            "range": "stddev: 0.00016487019839740344",
            "extra": "mean: 8.32529678640843 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.056253048415492,
            "unit": "iter/sec",
            "range": "stddev: 0.0003471396264714045",
            "extra": "mean: 38.37850354545935 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.2812837962479,
            "unit": "iter/sec",
            "range": "stddev: 0.0006441036737772855",
            "extra": "mean: 8.313845416664853 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5425.13878661361,
            "unit": "iter/sec",
            "range": "stddev: 0.00009730093636306271",
            "extra": "mean: 184.3270816347545 usec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.6482756462959,
            "unit": "iter/sec",
            "range": "stddev: 0.00007821918054637113",
            "extra": "mean: 6.0735528269256855 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.60130768732488,
            "unit": "iter/sec",
            "range": "stddev: 0.0005680435052765491",
            "extra": "mean: 8.223595773914816 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.00044935212387,
            "unit": "iter/sec",
            "range": "stddev: 0.0001981984157344041",
            "extra": "mean: 10.526266000000174 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 238.14613977479766,
            "unit": "iter/sec",
            "range": "stddev: 0.003760092369580715",
            "extra": "mean: 4.199102286292138 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.696088321815566,
            "unit": "iter/sec",
            "range": "stddev: 0.0016525502346903974",
            "extra": "mean: 589.5919376000165 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14053.007139163918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013800402482026842",
            "extra": "mean: 71.1591469425166 usec\nrounds: 6329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 317.75982652333767,
            "unit": "iter/sec",
            "range": "stddev: 0.00022988525107521833",
            "extra": "mean: 3.147030922508877 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.31256311992925,
            "unit": "iter/sec",
            "range": "stddev: 0.0006806051896845104",
            "extra": "mean: 9.232539339806303 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5264.734882088755,
            "unit": "iter/sec",
            "range": "stddev: 0.00006819011233239758",
            "extra": "mean: 189.94308780905897 usec\nrounds: 1936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148152.77316219904,
            "unit": "iter/sec",
            "range": "stddev: 3.0936392521450486e-7",
            "extra": "mean: 6.7497892793757615 usec\nrounds: 42554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8734954371930652,
            "unit": "iter/sec",
            "range": "stddev: 0.004087176872089509",
            "extra": "mean: 1.1448256710000124 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12087.827107925868,
            "unit": "iter/sec",
            "range": "stddev: 0.000016228437423977263",
            "extra": "mean: 82.72785431753155 usec\nrounds: 4146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.18650704946558,
            "unit": "iter/sec",
            "range": "stddev: 0.0007540965999742951",
            "extra": "mean: 8.39021148245391 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5367.986588133173,
            "unit": "iter/sec",
            "range": "stddev: 0.000051131819729940416",
            "extra": "mean: 186.2895861570642 usec\nrounds: 3453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.44199959927184,
            "unit": "iter/sec",
            "range": "stddev: 0.00019387179704326892",
            "extra": "mean: 10.368926444444543 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.6381497132001,
            "unit": "iter/sec",
            "range": "stddev: 0.000696643238766992",
            "extra": "mean: 8.358537827584495 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.33317987724485,
            "unit": "iter/sec",
            "range": "stddev: 0.00023475034166645816",
            "extra": "mean: 3.222343161616039 msec\nrounds: 297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12001353.640722077,
            "unit": "iter/sec",
            "range": "stddev: 4.207602418705808e-9",
            "extra": "mean: 83.32393411077997 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.46618032776206,
            "unit": "iter/sec",
            "range": "stddev: 0.00026480407568242045",
            "extra": "mean: 3.317121671534675 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.9771378861188,
            "unit": "iter/sec",
            "range": "stddev: 0.00005201565914344886",
            "extra": "mean: 1.862276677060464 msec\nrounds: 449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73326.34171615755,
            "unit": "iter/sec",
            "range": "stddev: 4.6624894790352637e-7",
            "extra": "mean: 13.637663854429666 usec\nrounds: 13158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.59444059182742,
            "unit": "iter/sec",
            "range": "stddev: 0.0006982021463967421",
            "extra": "mean: 10.571445782051551 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.49570547476482,
            "unit": "iter/sec",
            "range": "stddev: 0.0007518857541602341",
            "extra": "mean: 22.474078999986585 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1993978.990733873,
            "unit": "iter/sec",
            "range": "stddev: 1.0144930767860775e-7",
            "extra": "mean: 501.50979756910846 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16832048839278307,
            "unit": "iter/sec",
            "range": "stddev: 0.15317154452434642",
            "extra": "mean: 5.941047400399986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.576579906068545,
            "unit": "iter/sec",
            "range": "stddev: 0.0009950504578828143",
            "extra": "mean: 23.487090842105605 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.6008349827336,
            "unit": "iter/sec",
            "range": "stddev: 0.0002688086353341914",
            "extra": "mean: 3.3377744092656862 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5474.744768157508,
            "unit": "iter/sec",
            "range": "stddev: 0.0000318665330522964",
            "extra": "mean: 182.6569168696688 usec\nrounds: 2466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1783.8263483137766,
            "unit": "iter/sec",
            "range": "stddev: 0.000008123511546675413",
            "extra": "mean: 560.5926837807305 usec\nrounds: 1344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.48663468667394,
            "unit": "iter/sec",
            "range": "stddev: 0.000034038250210504186",
            "extra": "mean: 3.430689029961611 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5198.462869608327,
            "unit": "iter/sec",
            "range": "stddev: 0.00005063167460718092",
            "extra": "mean: 192.36455565476493 usec\nrounds: 2237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.68015498154382,
            "unit": "iter/sec",
            "range": "stddev: 0.00067875109459839",
            "extra": "mean: 9.373814653465818 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 275.04410627567006,
            "unit": "iter/sec",
            "range": "stddev: 0.009076494414329202",
            "extra": "mean: 3.6357805064098487 msec\nrounds: 312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5569.849387851167,
            "unit": "iter/sec",
            "range": "stddev: 0.00005049645977589347",
            "extra": "mean: 179.53806833290287 usec\nrounds: 3600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.3425081030115,
            "unit": "iter/sec",
            "range": "stddev: 0.00029656552172890746",
            "extra": "mean: 3.529297480618199 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2720637.2572239717,
            "unit": "iter/sec",
            "range": "stddev: 1.4663442295214748e-8",
            "extra": "mean: 367.5609445339455 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.529319507090584,
            "unit": "iter/sec",
            "range": "stddev: 0.000339268615497772",
            "extra": "mean: 94.97289918181195 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 314.55386258534696,
            "unit": "iter/sec",
            "range": "stddev: 0.0002159062997147683",
            "extra": "mean: 3.179105771523225 msec\nrounds: 302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1170.236448875596,
            "unit": "iter/sec",
            "range": "stddev: 0.00001207765709462933",
            "extra": "mean: 854.5281604934071 usec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.3122695414617,
            "unit": "iter/sec",
            "range": "stddev: 0.0006367878214006912",
            "extra": "mean: 8.31170423275394 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6166008.93470033,
            "unit": "iter/sec",
            "range": "stddev: 7.85647480393843e-9",
            "extra": "mean: 162.17946009958408 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.57060316521067,
            "unit": "iter/sec",
            "range": "stddev: 0.00015080096927059695",
            "extra": "mean: 9.845368333330068 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.68626744365558,
            "unit": "iter/sec",
            "range": "stddev: 0.0007172349884379246",
            "extra": "mean: 9.200794392156427 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8437.727513363123,
            "unit": "iter/sec",
            "range": "stddev: 0.00002679070069635856",
            "extra": "mean: 118.51532280655724 usec\nrounds: 4560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8199713928806778,
            "unit": "iter/sec",
            "range": "stddev: 0.0029357539671614175",
            "extra": "mean: 1.219554741400009 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}