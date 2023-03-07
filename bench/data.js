window.BENCHMARK_DATA = {
  "lastUpdate": 1678190853548,
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
          "id": "4a1ced2cf87c5a8ca430c86ce8980ce77183ccb0",
          "message": "revert: feat: add `persist` API to table relation\n\nThis reverts commit ee218f526220ee4f4d8c0024110cb7e66a17ba23.",
          "timestamp": "2023-03-07T07:02:21-05:00",
          "tree_id": "9999ae4450ed76eb67355fff3e81ea5f1fea1c82",
          "url": "https://github.com/ibis-project/ibis/commit/4a1ced2cf87c5a8ca430c86ce8980ce77183ccb0"
        },
        "date": 1678190769639,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5832666.378892533,
            "unit": "iter/sec",
            "range": "stddev: 1.0962516581923468e-8",
            "extra": "mean: 171.448173963594 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 147.92465043732489,
            "unit": "iter/sec",
            "range": "stddev: 0.00014844574011764242",
            "extra": "mean: 6.760198500003867 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 123.47292807195737,
            "unit": "iter/sec",
            "range": "stddev: 0.000486277156402556",
            "extra": "mean: 8.098941327585765 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5329.9479777783,
            "unit": "iter/sec",
            "range": "stddev: 0.00002312289390348411",
            "extra": "mean: 187.61909200037508 usec\nrounds: 1500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.9290947746667,
            "unit": "iter/sec",
            "range": "stddev: 0.000041223078555878804",
            "extra": "mean: 7.3030498130847965 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 94.86487463301192,
            "unit": "iter/sec",
            "range": "stddev: 0.00828564187608024",
            "extra": "mean: 10.541309455881693 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 312.95021129342126,
            "unit": "iter/sec",
            "range": "stddev: 0.0002205051276298971",
            "extra": "mean: 3.1953964685532767 msec\nrounds: 318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9232863443059829,
            "unit": "iter/sec",
            "range": "stddev: 0.0037516575292703856",
            "extra": "mean: 1.0830876099999955 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.76378289800853,
            "unit": "iter/sec",
            "range": "stddev: 0.0005069926485337863",
            "extra": "mean: 10.665098709677158 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.918667660334348,
            "unit": "iter/sec",
            "range": "stddev: 0.0031967855890888243",
            "extra": "mean: 1.088532930000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5467.415358127415,
            "unit": "iter/sec",
            "range": "stddev: 0.00004063518668299981",
            "extra": "mean: 182.9017798169443 usec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2506430.636257694,
            "unit": "iter/sec",
            "range": "stddev: 1.4964845100000583e-8",
            "extra": "mean: 398.973738005851 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.14156100510286,
            "unit": "iter/sec",
            "range": "stddev: 0.00018669668139086995",
            "extra": "mean: 3.1934438750010075 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 244.66468851830933,
            "unit": "iter/sec",
            "range": "stddev: 0.003856493974374549",
            "extra": "mean: 4.087226506023428 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5234.98848361611,
            "unit": "iter/sec",
            "range": "stddev: 0.00004195970657754455",
            "extra": "mean: 191.02238775303704 usec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7968449159870945,
            "unit": "iter/sec",
            "range": "stddev: 0.0029261928525527283",
            "extra": "mean: 556.5310567999973 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.7275851716835,
            "unit": "iter/sec",
            "range": "stddev: 0.00006308395562212507",
            "extra": "mean: 1.845946241934646 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6792599543059202,
            "unit": "iter/sec",
            "range": "stddev: 0.03479173874862965",
            "extra": "mean: 1.4721904237999979 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5675.378747000335,
            "unit": "iter/sec",
            "range": "stddev: 0.00004562590412979706",
            "extra": "mean: 176.19969425450944 usec\nrounds: 2054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8084.159900413057,
            "unit": "iter/sec",
            "range": "stddev: 0.000013438780553319134",
            "extra": "mean: 123.6986913072941 usec\nrounds: 4383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11794.127821010203,
            "unit": "iter/sec",
            "range": "stddev: 0.00001527092485378598",
            "extra": "mean: 84.78795678461174 usec\nrounds: 4790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13500.890339845455,
            "unit": "iter/sec",
            "range": "stddev: 0.000001917369094249567",
            "extra": "mean: 74.0691891295998 usec\nrounds: 1803"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 122.95700571441864,
            "unit": "iter/sec",
            "range": "stddev: 0.0005772076628912965",
            "extra": "mean: 8.13292414035042 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.91363167009652,
            "unit": "iter/sec",
            "range": "stddev: 0.00018310930205996828",
            "extra": "mean: 13.529304099998285 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 349.72520870380697,
            "unit": "iter/sec",
            "range": "stddev: 0.00003693166178576232",
            "extra": "mean: 2.859387813953471 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11954.683577900401,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016276956148519943",
            "extra": "mean: 83.64922362718276 usec\nrounds: 3242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.11877860203236,
            "unit": "iter/sec",
            "range": "stddev: 0.00019559604948132404",
            "extra": "mean: 3.3099564503312644 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5875.466924251455,
            "unit": "iter/sec",
            "range": "stddev: 0.00004277307119010198",
            "extra": "mean: 170.1992391230084 usec\nrounds: 3011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12265033.646400068,
            "unit": "iter/sec",
            "range": "stddev: 8.586373557291015e-9",
            "extra": "mean: 81.53259329152509 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1741.9416017775047,
            "unit": "iter/sec",
            "range": "stddev: 0.000048419204590709254",
            "extra": "mean: 574.072057857499 usec\nrounds: 1279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.95251648527777,
            "unit": "iter/sec",
            "range": "stddev: 0.0005050848182449487",
            "extra": "mean: 9.349943627905681 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.19342224143581,
            "unit": "iter/sec",
            "range": "stddev: 0.0003936394623883571",
            "extra": "mean: 36.773598818182435 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5170947913824766,
            "unit": "iter/sec",
            "range": "stddev: 0.002711627688744561",
            "extra": "mean: 397.2834092000028 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1204.5424409319264,
            "unit": "iter/sec",
            "range": "stddev: 0.000013738661897511933",
            "extra": "mean: 830.1907562728327 usec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70033.57261825203,
            "unit": "iter/sec",
            "range": "stddev: 6.828026241906205e-7",
            "extra": "mean: 14.278866015459872 usec\nrounds: 13718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.67171847182627,
            "unit": "iter/sec",
            "range": "stddev: 0.0005479273362238851",
            "extra": "mean: 9.835576845070294 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.7934673208594,
            "unit": "iter/sec",
            "range": "stddev: 0.0002480826348331429",
            "extra": "mean: 3.523689285170864 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.66413070953674,
            "unit": "iter/sec",
            "range": "stddev: 0.0005567081736698523",
            "extra": "mean: 9.375222892156295 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.84250573512631,
            "unit": "iter/sec",
            "range": "stddev: 0.00008878260175926357",
            "extra": "mean: 13.728248224137866 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.62271296258328,
            "unit": "iter/sec",
            "range": "stddev: 0.0006224018216597976",
            "extra": "mean: 9.84031985416678 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.54326751216532,
            "unit": "iter/sec",
            "range": "stddev: 0.0003547690956709",
            "extra": "mean: 180.39901516666626 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.70482219002054,
            "unit": "iter/sec",
            "range": "stddev: 0.00006935023477421017",
            "extra": "mean: 8.495828644858902 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 741486.5852731855,
            "unit": "iter/sec",
            "range": "stddev: 2.4909344236088364e-7",
            "extra": "mean: 1.3486420656303182 usec\nrounds: 25446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.29564607218595,
            "unit": "iter/sec",
            "range": "stddev: 0.00004415799586175116",
            "extra": "mean: 5.173422269566029 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139525.9870707672,
            "unit": "iter/sec",
            "range": "stddev: 4.5336393983632727e-7",
            "extra": "mean: 7.167123637640366 usec\nrounds: 38168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8528132249343683,
            "unit": "iter/sec",
            "range": "stddev: 0.0034612835545235567",
            "extra": "mean: 1.1725896957999908 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 122.10266942226761,
            "unit": "iter/sec",
            "range": "stddev: 0.0005891065950793857",
            "extra": "mean: 8.189829139129632 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.48164800812457,
            "unit": "iter/sec",
            "range": "stddev: 0.00008865263495270705",
            "extra": "mean: 9.303913910255728 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.96911431315547,
            "unit": "iter/sec",
            "range": "stddev: 0.00018459742764695671",
            "extra": "mean: 6.3303513750011655 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5336.1916490695385,
            "unit": "iter/sec",
            "range": "stddev: 0.00004738569313661771",
            "extra": "mean: 187.399566163327 usec\nrounds: 2713"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 122.42564145919438,
            "unit": "iter/sec",
            "range": "stddev: 0.0005849054454420079",
            "extra": "mean: 8.168223487179436 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.54609790487534,
            "unit": "iter/sec",
            "range": "stddev: 0.00007835655810131055",
            "extra": "mean: 10.147535227272831 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 180.22962392168043,
            "unit": "iter/sec",
            "range": "stddev: 0.003791810398309978",
            "extra": "mean: 5.548477426965915 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1692881.4020739337,
            "unit": "iter/sec",
            "range": "stddev: 3.587471307830348e-7",
            "extra": "mean: 590.7088345201909 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 744.6905466565929,
            "unit": "iter/sec",
            "range": "stddev: 0.00007560046275440854",
            "extra": "mean: 1.3428396593587226 msec\nrounds: 593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1794686243558767,
            "unit": "iter/sec",
            "range": "stddev: 0.10165299133700739",
            "extra": "mean: 5.572004597400007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 299.4554085563666,
            "unit": "iter/sec",
            "range": "stddev: 0.00011559004378798548",
            "extra": "mean: 3.339395353788608 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 309.4261812659675,
            "unit": "iter/sec",
            "range": "stddev: 0.00019695173172595116",
            "extra": "mean: 3.2317885833340307 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 690.7324005714942,
            "unit": "iter/sec",
            "range": "stddev: 0.00003439110469430066",
            "extra": "mean: 1.4477386599682103 msec\nrounds: 597"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.96951567757408,
            "unit": "iter/sec",
            "range": "stddev: 0.0005849944536816589",
            "extra": "mean: 8.69795783783631 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 504038.8427157293,
            "unit": "iter/sec",
            "range": "stddev: 2.3062918874710727e-7",
            "extra": "mean: 1.9839740814657523 usec\nrounds: 2122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.0130399357985,
            "unit": "iter/sec",
            "range": "stddev: 0.0005480140550908703",
            "extra": "mean: 9.34465557281562 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.35854647508158,
            "unit": "iter/sec",
            "range": "stddev: 0.0006842052529893171",
            "extra": "mean: 8.668625173913824 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 307.5345226981442,
            "unit": "iter/sec",
            "range": "stddev: 0.0002354397046018623",
            "extra": "mean: 3.2516674590759185 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6240004.876984233,
            "unit": "iter/sec",
            "range": "stddev: 1.0688200720915529e-8",
            "extra": "mean: 160.25628500525093 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.72664521960636,
            "unit": "iter/sec",
            "range": "stddev: 0.0006746199363202252",
            "extra": "mean: 27.990313499998365 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5886.7241347407235,
            "unit": "iter/sec",
            "range": "stddev: 0.000042358593466494484",
            "extra": "mean: 169.87376631061449 usec\nrounds: 2529"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 327.8144290150082,
            "unit": "iter/sec",
            "range": "stddev: 0.00006522789549930565",
            "extra": "mean: 3.0505063581390357 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.553650263120005,
            "unit": "iter/sec",
            "range": "stddev: 0.00035821185859722136",
            "extra": "mean: 21.48059269999294 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.31764096548404,
            "unit": "iter/sec",
            "range": "stddev: 0.00013395130820130594",
            "extra": "mean: 20.276720062499958 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.49516051925195,
            "unit": "iter/sec",
            "range": "stddev: 0.00019058531945734285",
            "extra": "mean: 3.2206621137916125 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 106.86715457349108,
            "unit": "iter/sec",
            "range": "stddev: 0.012672352916974034",
            "extra": "mean: 9.35741205041923 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.83745859905945,
            "unit": "iter/sec",
            "range": "stddev: 0.0007439180287336961",
            "extra": "mean: 27.146280933330523 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2500942.7055848558,
            "unit": "iter/sec",
            "range": "stddev: 1.536337822831002e-8",
            "extra": "mean: 399.84922396137534 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 296.2989338815594,
            "unit": "iter/sec",
            "range": "stddev: 0.000254206884155786",
            "extra": "mean: 3.374969956522805 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5599.37194196157,
            "unit": "iter/sec",
            "range": "stddev: 0.00004886510539899774",
            "extra": "mean: 178.5914581787329 usec\nrounds: 3503"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.353576703403,
            "unit": "iter/sec",
            "range": "stddev: 0.00015216450704344406",
            "extra": "mean: 17.136910134622187 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.60427463942071,
            "unit": "iter/sec",
            "range": "stddev: 0.00009666916499290941",
            "extra": "mean: 8.96023027102567 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.16022903487783,
            "unit": "iter/sec",
            "range": "stddev: 0.00006701834804741107",
            "extra": "mean: 6.054726406251376 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.50965208731222,
            "unit": "iter/sec",
            "range": "stddev: 0.0005773115326705224",
            "extra": "mean: 9.755178947912668 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.529329737061328,
            "unit": "iter/sec",
            "range": "stddev: 0.0002824397053412752",
            "extra": "mean: 94.97280690908383 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.09500011013785,
            "unit": "iter/sec",
            "range": "stddev: 0.0005915762371759414",
            "extra": "mean: 8.257979264961262 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5852.080992288217,
            "unit": "iter/sec",
            "range": "stddev: 0.00005738715037731599",
            "extra": "mean: 170.87938484067203 usec\nrounds: 3417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2459388.9652223373,
            "unit": "iter/sec",
            "range": "stddev: 1.519278915393499e-8",
            "extra": "mean: 406.60506090785645 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7241051.342572303,
            "unit": "iter/sec",
            "range": "stddev: 6.576461242402952e-9",
            "extra": "mean: 138.1014928206178 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.36274785248501,
            "unit": "iter/sec",
            "range": "stddev: 0.00034063203623411846",
            "extra": "mean: 14.845000120687772 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.49427572193278,
            "unit": "iter/sec",
            "range": "stddev: 0.00019764023139363877",
            "extra": "mean: 10.471831870968614 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.728219388781575,
            "unit": "iter/sec",
            "range": "stddev: 0.00023040627546296388",
            "extra": "mean: 63.57998799999365 msec\nrounds: 16"
          }
        ]
      }
    ]
  }
}