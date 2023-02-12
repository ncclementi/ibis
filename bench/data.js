window.BENCHMARK_DATA = {
  "lastUpdate": 1676213120939,
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
          "id": "aa3c31c5e1d46e0c68c9e79651e703ba0d50e542",
          "message": "fix(duckdb): treat `g` `re_replace` flag as literal text",
          "timestamp": "2023-02-12T09:40:28-05:00",
          "tree_id": "bb70cb30d5a02d832427d0349384194b6186aedf",
          "url": "https://github.com/ibis-project/ibis/commit/aa3c31c5e1d46e0c68c9e79651e703ba0d50e542"
        },
        "date": 1676213044534,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.93336893325997,
            "unit": "iter/sec",
            "range": "stddev: 0.00036704410531752",
            "extra": "mean: 12.355842999994593 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.393202362767209,
            "unit": "iter/sec",
            "range": "stddev: 0.0003462669187654746",
            "extra": "mean: 74.66474207691931 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3529.738658885193,
            "unit": "iter/sec",
            "range": "stddev: 0.002853036812576767",
            "extra": "mean: 283.30709342539046 usec\nrounds: 867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19269.964597366277,
            "unit": "iter/sec",
            "range": "stddev: 0.000012736064067244275",
            "extra": "mean: 51.894231302151695 usec\nrounds: 4907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1659898.4076534247,
            "unit": "iter/sec",
            "range": "stddev: 1.0398272134532619e-7",
            "extra": "mean: 602.4465084063103 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 402.87164687145776,
            "unit": "iter/sec",
            "range": "stddev: 0.00009626760712926845",
            "extra": "mean: 2.4821801379312873 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 609313.0534641067,
            "unit": "iter/sec",
            "range": "stddev: 1.7041402787919566e-7",
            "extra": "mean: 1.6411924778481835 usec\nrounds: 22574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 589.9763942168535,
            "unit": "iter/sec",
            "range": "stddev: 0.00010093278262087818",
            "extra": "mean: 1.694983070174223 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.83185311382736,
            "unit": "iter/sec",
            "range": "stddev: 0.000638526726304335",
            "extra": "mean: 11.78802493749842 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13421612597567306,
            "unit": "iter/sec",
            "range": "stddev: 0.06783630285809412",
            "extra": "mean: 7.450669528200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.05222383635194,
            "unit": "iter/sec",
            "range": "stddev: 0.0006205583137566214",
            "extra": "mean: 11.229365836362087 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 242.2879396123822,
            "unit": "iter/sec",
            "range": "stddev: 0.00025226098779547815",
            "extra": "mean: 4.1273205822783545 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4667.653357670258,
            "unit": "iter/sec",
            "range": "stddev: 0.000047926674253763826",
            "extra": "mean: 214.2404166232098 usec\nrounds: 1901"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 142.55246836953145,
            "unit": "iter/sec",
            "range": "stddev: 0.0007086803708704581",
            "extra": "mean: 7.014960957447268 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 236.96645915189643,
            "unit": "iter/sec",
            "range": "stddev: 0.00025743398443315175",
            "extra": "mean: 4.220006508849407 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5326.860747061886,
            "unit": "iter/sec",
            "range": "stddev: 0.00005464347969986286",
            "extra": "mean: 187.72782835585963 usec\nrounds: 3047"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4322501.566829339,
            "unit": "iter/sec",
            "range": "stddev: 1.105281644778874e-8",
            "extra": "mean: 231.34751590891187 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.726764228203564,
            "unit": "iter/sec",
            "range": "stddev: 0.0010913221037656604",
            "extra": "mean: 42.14649711111128 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58750.23974724619,
            "unit": "iter/sec",
            "range": "stddev: 5.307321178938004e-7",
            "extra": "mean: 17.021207135531277 usec\nrounds: 12837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1753606476251357,
            "unit": "iter/sec",
            "range": "stddev: 0.001536883842709084",
            "extra": "mean: 459.693890799997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 117.38326312039062,
            "unit": "iter/sec",
            "range": "stddev: 0.0003294916592073532",
            "extra": "mean: 8.519102071428872 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 138.7302593676175,
            "unit": "iter/sec",
            "range": "stddev: 0.000774968668215087",
            "extra": "mean: 7.208232757282804 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.68132301240015,
            "unit": "iter/sec",
            "range": "stddev: 0.0004150608537218379",
            "extra": "mean: 25.20077265789517 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1493885.0894812003,
            "unit": "iter/sec",
            "range": "stddev: 1.5832764913079841e-7",
            "extra": "mean: 669.3955291750601 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10618.000466653908,
            "unit": "iter/sec",
            "range": "stddev: 0.000010074016865546142",
            "extra": "mean: 94.17969071865505 usec\nrounds: 3728"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.47944399974368,
            "unit": "iter/sec",
            "range": "stddev: 0.0007256324835530236",
            "extra": "mean: 19.810043866669325 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.083664134727888,
            "unit": "iter/sec",
            "range": "stddev: 0.00043304842906758865",
            "extra": "mean: 110.08773388889243 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.18076874969617,
            "unit": "iter/sec",
            "range": "stddev: 0.0017721745232811574",
            "extra": "mean: 26.191196058826282 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.378379231458393,
            "unit": "iter/sec",
            "range": "stddev: 0.027254242261929525",
            "extra": "mean: 31.869077514285692 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 971.0281748958637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000436717952748226",
            "extra": "mean: 1.029836235294865 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 276.3066156556313,
            "unit": "iter/sec",
            "range": "stddev: 0.00003902461250905499",
            "extra": "mean: 3.6191677771708815 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 157.43481264780186,
            "unit": "iter/sec",
            "range": "stddev: 0.0006904270223982522",
            "extra": "mean: 6.351835297299236 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8012085967603946,
            "unit": "iter/sec",
            "range": "stddev: 0.010441184596480928",
            "extra": "mean: 1.2481144161999738 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1480.0083192450143,
            "unit": "iter/sec",
            "range": "stddev: 0.000006464526056028034",
            "extra": "mean: 675.6718776487166 usec\nrounds: 1038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 77.31292521446574,
            "unit": "iter/sec",
            "range": "stddev: 0.01738985859194452",
            "extra": "mean: 12.934447858828314 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.5153960764896,
            "unit": "iter/sec",
            "range": "stddev: 0.00018341904768876013",
            "extra": "mean: 6.733308642862669 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123731.78101188877,
            "unit": "iter/sec",
            "range": "stddev: 3.4917927870336407e-7",
            "extra": "mean: 8.081997946056518 usec\nrounds: 38462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.50581085590116,
            "unit": "iter/sec",
            "range": "stddev: 0.000787218247532502",
            "extra": "mean: 10.810131717646662 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.23690591777807,
            "unit": "iter/sec",
            "range": "stddev: 0.0006888156477860133",
            "extra": "mean: 11.333126310342651 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 232.86533803332253,
            "unit": "iter/sec",
            "range": "stddev: 0.000254209613297115",
            "extra": "mean: 4.294327393014164 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7274530298127669,
            "unit": "iter/sec",
            "range": "stddev: 0.005749346294708014",
            "extra": "mean: 1.3746592000000077 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.41975974391704,
            "unit": "iter/sec",
            "range": "stddev: 0.00008889548223416621",
            "extra": "mean: 14.615660793648232 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.10212534264585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000499068337708896",
            "extra": "mean: 11.350463977013161 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 151.89446907143724,
            "unit": "iter/sec",
            "range": "stddev: 0.0007973659303833298",
            "extra": "mean: 6.583518189393003 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.66565447552001,
            "unit": "iter/sec",
            "range": "stddev: 0.0009300667321154647",
            "extra": "mean: 29.70386334616338 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 510.6430742954061,
            "unit": "iter/sec",
            "range": "stddev: 0.000031542108036169993",
            "extra": "mean: 1.9583150155905216 msec\nrounds: 449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 245.44874689700316,
            "unit": "iter/sec",
            "range": "stddev: 0.00024799623805906297",
            "extra": "mean: 4.0741703212672205 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.858217338244767,
            "unit": "iter/sec",
            "range": "stddev: 0.0008112514565135038",
            "extra": "mean: 205.836818399996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 240.47823679131605,
            "unit": "iter/sec",
            "range": "stddev: 0.0001249335487201964",
            "extra": "mean: 4.158380456139935 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5105.540510476627,
            "unit": "iter/sec",
            "range": "stddev: 0.00005521328149242295",
            "extra": "mean: 195.86564790701172 usec\nrounds: 2221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.579781152355371,
            "unit": "iter/sec",
            "range": "stddev: 0.007579878144423018",
            "extra": "mean: 1.7247887344000106 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.70615991942776,
            "unit": "iter/sec",
            "range": "stddev: 0.0002912936138815097",
            "extra": "mean: 15.697069188674188 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5592952268119162,
            "unit": "iter/sec",
            "range": "stddev: 0.0026480208246841743",
            "extra": "mean: 641.3153729999976 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.05221463518774,
            "unit": "iter/sec",
            "range": "stddev: 0.000625598709262596",
            "extra": "mean: 10.632391846155105 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 155.99437614923303,
            "unit": "iter/sec",
            "range": "stddev: 0.0007100167713821383",
            "extra": "mean: 6.410487510417322 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 214.66596640805372,
            "unit": "iter/sec",
            "range": "stddev: 0.0005061988398105272",
            "extra": "mean: 4.658400289215489 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.217659658762,
            "unit": "iter/sec",
            "range": "stddev: 0.0002924067509944263",
            "extra": "mean: 10.61372150000122 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 269.18590955806565,
            "unit": "iter/sec",
            "range": "stddev: 0.00002348333440202275",
            "extra": "mean: 3.7149046978043687 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5437.503613241253,
            "unit": "iter/sec",
            "range": "stddev: 0.00005536652745109633",
            "extra": "mean: 183.90792376943506 usec\nrounds: 1889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 140.48604856450845,
            "unit": "iter/sec",
            "range": "stddev: 0.0001308243776337281",
            "extra": "mean: 7.118144543305449 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9755.431447723118,
            "unit": "iter/sec",
            "range": "stddev: 0.000014996243132339369",
            "extra": "mean: 102.50699883021538 usec\nrounds: 5129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 245.48864633397048,
            "unit": "iter/sec",
            "range": "stddev: 0.0002490641411415351",
            "extra": "mean: 4.07350814358872 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.81380956160626,
            "unit": "iter/sec",
            "range": "stddev: 0.0008319492282470362",
            "extra": "mean: 12.68813175714253 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.53501221867168,
            "unit": "iter/sec",
            "range": "stddev: 0.00003629049151905129",
            "extra": "mean: 5.863898486240066 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 151.9149315819282,
            "unit": "iter/sec",
            "range": "stddev: 0.0008423625371572619",
            "extra": "mean: 6.58263140816212 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 136.55477960095425,
            "unit": "iter/sec",
            "range": "stddev: 0.00017424976464994567",
            "extra": "mean: 7.3230684632368 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10936.69377954735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017436406349509289",
            "extra": "mean: 91.43531127022084 usec\nrounds: 5590"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 265.0422924848008,
            "unit": "iter/sec",
            "range": "stddev: 0.00005888023635124127",
            "extra": "mean: 3.7729827591849188 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4072.866509031097,
            "unit": "iter/sec",
            "range": "stddev: 0.000022951284673944988",
            "extra": "mean: 245.52732032405655 usec\nrounds: 1973"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 151.0479035491394,
            "unit": "iter/sec",
            "range": "stddev: 0.0009018963342320573",
            "extra": "mean: 6.620416281876278 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.16269453495892,
            "unit": "iter/sec",
            "range": "stddev: 0.001501737601388919",
            "extra": "mean: 19.93513325531365 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 241.54710599316041,
            "unit": "iter/sec",
            "range": "stddev: 0.00025583910979172676",
            "extra": "mean: 4.139979222223907 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5359676.327058767,
            "unit": "iter/sec",
            "range": "stddev: 5.294853073464643e-9",
            "extra": "mean: 186.5784310428183 nsec\nrounds: 54055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10814831.093427258,
            "unit": "iter/sec",
            "range": "stddev: 4.214123730560659e-9",
            "extra": "mean: 92.46561424419919 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1480615.0454024442,
            "unit": "iter/sec",
            "range": "stddev: 9.788935062615927e-8",
            "extra": "mean: 675.395000952588 nsec\nrounds: 88496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 83.60128795595928,
            "unit": "iter/sec",
            "range": "stddev: 0.018825445182400317",
            "extra": "mean: 11.961538206526134 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4784.401024355877,
            "unit": "iter/sec",
            "range": "stddev: 0.000051435881919531854",
            "extra": "mean: 209.01257961222635 usec\nrounds: 2531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2090646.7518787333,
            "unit": "iter/sec",
            "range": "stddev: 2.7894284321166345e-8",
            "extra": "mean: 478.3208828089738 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 389750.3892133546,
            "unit": "iter/sec",
            "range": "stddev: 1.0049113287079667e-7",
            "extra": "mean: 2.5657447116815746 usec\nrounds: 2033"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7960630672985383,
            "unit": "iter/sec",
            "range": "stddev: 0.013478730531254823",
            "extra": "mean: 1.256181879399992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4464340.994819836,
            "unit": "iter/sec",
            "range": "stddev: 1.2064423073690947e-8",
            "extra": "mean: 223.99722627867783 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4589.806002191845,
            "unit": "iter/sec",
            "range": "stddev: 0.00007942493584136027",
            "extra": "mean: 217.87413226669133 usec\nrounds: 1875"
          }
        ]
      }
    ]
  }
}