window.BENCHMARK_DATA = {
  "lastUpdate": 1678917589666,
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
          "id": "60c73824610dbbf677e6ac2a4c80a7cf16864d9b",
          "message": "fix(deps): ensure that pyspark depends on sqlalchemy",
          "timestamp": "2023-03-15T17:51:07-04:00",
          "tree_id": "882209408e72eb563b20e5ca91959bc37cbdfbf2",
          "url": "https://github.com/ibis-project/ibis/commit/60c73824610dbbf677e6ac2a4c80a7cf16864d9b"
        },
        "date": 1678917488687,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 346204.0435673294,
            "unit": "iter/sec",
            "range": "stddev: 0.00000443086553072407",
            "extra": "mean: 2.888470018131146 usec\nrounds: 1134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.98320138149909,
            "unit": "iter/sec",
            "range": "stddev: 0.001252765695369338",
            "extra": "mean: 11.767031410253518 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 66.22306655591599,
            "unit": "iter/sec",
            "range": "stddev: 0.002522563529097374",
            "extra": "mean: 15.100478609755134 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 61.87600074762422,
            "unit": "iter/sec",
            "range": "stddev: 0.013533054924933332",
            "extra": "mean: 16.161354772729005 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5631882622872303,
            "unit": "iter/sec",
            "range": "stddev: 0.009013968692507434",
            "extra": "mean: 1.7756051874000036 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 204.0332368328731,
            "unit": "iter/sec",
            "range": "stddev: 0.0006652233109439276",
            "extra": "mean: 4.901162259260318 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.79549818710326,
            "unit": "iter/sec",
            "range": "stddev: 0.001374815077945671",
            "extra": "mean: 12.376927210526464 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 68.2415481477776,
            "unit": "iter/sec",
            "range": "stddev: 0.0015127696562484828",
            "extra": "mean: 14.65382933333359 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 76.76890228557052,
            "unit": "iter/sec",
            "range": "stddev: 0.012382583672917752",
            "extra": "mean: 13.026107840908386 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1444134.1599677622,
            "unit": "iter/sec",
            "range": "stddev: 0.000005359431535127226",
            "extra": "mean: 692.4564404891048 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 78.44611426590471,
            "unit": "iter/sec",
            "range": "stddev: 0.0015831056460499115",
            "extra": "mean: 12.747603999993576 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 32.06278350914833,
            "unit": "iter/sec",
            "range": "stddev: 0.003424790163239409",
            "extra": "mean: 31.18880803704003 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3987680.690522305,
            "unit": "iter/sec",
            "range": "stddev: 6.285135191878224e-7",
            "extra": "mean: 250.77233550251734 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 42.75462613526092,
            "unit": "iter/sec",
            "range": "stddev: 0.0030053579355446692",
            "extra": "mean: 23.389281824997 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 114.87398425746386,
            "unit": "iter/sec",
            "range": "stddev: 0.0008495084999610436",
            "extra": "mean: 8.705191227273252 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 529.3522183191161,
            "unit": "iter/sec",
            "range": "stddev: 0.00022510690135832238",
            "extra": "mean: 1.8891013684147016 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 73.01978297763962,
            "unit": "iter/sec",
            "range": "stddev: 0.0020514971421861854",
            "extra": "mean: 13.694918818181419 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5662264027856038,
            "unit": "iter/sec",
            "range": "stddev: 0.016814870486156094",
            "extra": "mean: 1.7660780123999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4044634.5584550323,
            "unit": "iter/sec",
            "range": "stddev: 9.983398208726435e-7",
            "extra": "mean: 247.2411253841451 nsec\nrounds: 42554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 86.70390121663796,
            "unit": "iter/sec",
            "range": "stddev: 0.0012416576379070809",
            "extra": "mean: 11.533506404762624 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 114734.06251695253,
            "unit": "iter/sec",
            "range": "stddev: 0.000011939872710622842",
            "extra": "mean: 8.715807477419752 usec\nrounds: 20408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 52.52757080267599,
            "unit": "iter/sec",
            "range": "stddev: 0.00141887188864092",
            "extra": "mean: 19.037621285716405 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.69923214681879,
            "unit": "iter/sec",
            "range": "stddev: 0.001988001374126318",
            "extra": "mean: 32.57410462963729 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8558013.537656287,
            "unit": "iter/sec",
            "range": "stddev: 3.2626625860571067e-7",
            "extra": "mean: 116.84954640463187 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 65.92304849426374,
            "unit": "iter/sec",
            "range": "stddev: 0.0015730227260029922",
            "extra": "mean: 15.16920140741086 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1447082.7174272598,
            "unit": "iter/sec",
            "range": "stddev: 0.000008905233717402789",
            "extra": "mean: 691.045499995937 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 56.56522291015555,
            "unit": "iter/sec",
            "range": "stddev: 0.0180730712859543",
            "extra": "mean: 17.67870696078284 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3470.440582591838,
            "unit": "iter/sec",
            "range": "stddev: 0.0002175789402751958",
            "extra": "mean: 288.14785218226314 usec\nrounds: 2131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3505.2459697625354,
            "unit": "iter/sec",
            "range": "stddev: 0.00018728286372043612",
            "extra": "mean: 285.2866841945889 usec\nrounds: 3138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 498555.5101304502,
            "unit": "iter/sec",
            "range": "stddev: 0.00003424403390792108",
            "extra": "mean: 2.0057947002498153 usec\nrounds: 14793"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9044.767114639262,
            "unit": "iter/sec",
            "range": "stddev: 0.00008856608166662",
            "extra": "mean: 110.56116617767482 usec\nrounds: 3749"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3571.878979719754,
            "unit": "iter/sec",
            "range": "stddev: 0.0001277072943865573",
            "extra": "mean: 279.9646924427599 usec\nrounds: 1138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 196.1351791259508,
            "unit": "iter/sec",
            "range": "stddev: 0.0006676260245271318",
            "extra": "mean: 5.098524417987437 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 245.36866967580545,
            "unit": "iter/sec",
            "range": "stddev: 0.0005439910784459399",
            "extra": "mean: 4.075499945943608 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.85975951124566,
            "unit": "iter/sec",
            "range": "stddev: 0.0029717023131577316",
            "extra": "mean: 55.99179537497889 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.849313237128282,
            "unit": "iter/sec",
            "range": "stddev: 0.004117148356573458",
            "extra": "mean: 35.90752818517676 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 98.63276731042278,
            "unit": "iter/sec",
            "range": "stddev: 0.000871326969215262",
            "extra": "mean: 10.13861850649229 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5617656094644893,
            "unit": "iter/sec",
            "range": "stddev: 0.01851204890920862",
            "extra": "mean: 1.7801018488000069 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 51147.9556432097,
            "unit": "iter/sec",
            "range": "stddev: 0.00004160496941108889",
            "extra": "mean: 19.551123547843265 usec\nrounds: 11534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5581.03452832474,
            "unit": "iter/sec",
            "range": "stddev: 0.000032018800025677986",
            "extra": "mean: 179.17825000451487 usec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8100.518632595938,
            "unit": "iter/sec",
            "range": "stddev: 0.00008728093995491087",
            "extra": "mean: 123.44888584986 usec\nrounds: 5046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 210.34446251702477,
            "unit": "iter/sec",
            "range": "stddev: 0.0008353547256417452",
            "extra": "mean: 4.754106611763371 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1219.1214262533008,
            "unit": "iter/sec",
            "range": "stddev: 0.00022826307623538715",
            "extra": "mean: 820.2628372083313 usec\nrounds: 903"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.152099755307574,
            "unit": "iter/sec",
            "range": "stddev: 0.01867413702766002",
            "extra": "mean: 867.98039439999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3396.4992890593912,
            "unit": "iter/sec",
            "range": "stddev: 0.00018747232659134633",
            "extra": "mean: 294.42078884607537 usec\nrounds: 1847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3327.2656120578795,
            "unit": "iter/sec",
            "range": "stddev: 0.00015427227760025363",
            "extra": "mean: 300.54709079312437 usec\nrounds: 1553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 58.49852160488096,
            "unit": "iter/sec",
            "range": "stddev: 0.021686502093333806",
            "extra": "mean: 17.094449100001913 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3658.4076566666317,
            "unit": "iter/sec",
            "range": "stddev: 0.00014859325465803105",
            "extra": "mean: 273.3429660791692 usec\nrounds: 796"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 115.28388991194825,
            "unit": "iter/sec",
            "range": "stddev: 0.004870440867921781",
            "extra": "mean: 8.674238879029689 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 71.45362306878225,
            "unit": "iter/sec",
            "range": "stddev: 0.0012293192997921076",
            "extra": "mean: 13.995091600007267 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 65.57405639192775,
            "unit": "iter/sec",
            "range": "stddev: 0.0014633971436445823",
            "extra": "mean: 15.249933510642194 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 10.713146336389002,
            "unit": "iter/sec",
            "range": "stddev: 0.003889465779294753",
            "extra": "mean: 93.34325963637143 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3259.122939594854,
            "unit": "iter/sec",
            "range": "stddev: 0.00015908471876493641",
            "extra": "mean: 306.83101513326505 usec\nrounds: 1718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.45682575662379915,
            "unit": "iter/sec",
            "range": "stddev: 0.1068470469722795",
            "extra": "mean: 2.1890184288 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.857413871657348,
            "unit": "iter/sec",
            "range": "stddev: 0.005270519063677764",
            "extra": "mean: 259.24104419999594 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1126389.4827736516,
            "unit": "iter/sec",
            "range": "stddev: 0.000005122707935780431",
            "extra": "mean: 887.7923802498344 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.7780023619891,
            "unit": "iter/sec",
            "range": "stddev: 0.0011471630017849336",
            "extra": "mean: 11.795512658226517 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 193.28270596483628,
            "unit": "iter/sec",
            "range": "stddev: 0.0007068633990196477",
            "extra": "mean: 5.173768625641701 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4833131.658427448,
            "unit": "iter/sec",
            "range": "stddev: 6.07302494500027e-7",
            "extra": "mean: 206.90518501728255 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 21.30715048697064,
            "unit": "iter/sec",
            "range": "stddev: 0.04082669551457713",
            "extra": "mean: 46.932601363636195 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 49.99608239030417,
            "unit": "iter/sec",
            "range": "stddev: 0.0016821657566807465",
            "extra": "mean: 20.00156716666928 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9368.208872288013,
            "unit": "iter/sec",
            "range": "stddev: 0.00009839415507542583",
            "extra": "mean: 106.74399062109813 usec\nrounds: 3838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 200.7046377333632,
            "unit": "iter/sec",
            "range": "stddev: 0.0006194014060708296",
            "extra": "mean: 4.98244590306131 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1509001.6857632243,
            "unit": "iter/sec",
            "range": "stddev: 0.00000293005181138488",
            "extra": "mean: 662.6897832087041 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.886761687764852,
            "unit": "iter/sec",
            "range": "stddev: 0.009164299355310076",
            "extra": "mean: 145.206128125011 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3542.4512072827133,
            "unit": "iter/sec",
            "range": "stddev: 0.0001535923339427849",
            "extra": "mean: 282.2904089530322 usec\nrounds: 1653"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 75.00704663076125,
            "unit": "iter/sec",
            "range": "stddev: 0.0013342793322446346",
            "extra": "mean: 13.332080716665473 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.4033823387057,
            "unit": "iter/sec",
            "range": "stddev: 0.001495652137972612",
            "extra": "mean: 11.709138123289405 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 206.1336066391885,
            "unit": "iter/sec",
            "range": "stddev: 0.0006508001223674885",
            "extra": "mean: 4.8512225459207965 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 191.08251176287547,
            "unit": "iter/sec",
            "range": "stddev: 0.0006821919539607288",
            "extra": "mean: 5.233341297297544 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.03320147471051,
            "unit": "iter/sec",
            "range": "stddev: 0.0016744091006984318",
            "extra": "mean: 12.494814421687073 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 85.57435200460593,
            "unit": "iter/sec",
            "range": "stddev: 0.0012603048389883218",
            "extra": "mean: 11.685744344826313 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 471.51897986731683,
            "unit": "iter/sec",
            "range": "stddev: 0.0004595873806329084",
            "extra": "mean: 2.120805402746238 msec\nrounds: 437"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 165.44676745719397,
            "unit": "iter/sec",
            "range": "stddev: 0.004776347191020874",
            "extra": "mean: 6.044240182926088 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 84.0720718950256,
            "unit": "iter/sec",
            "range": "stddev: 0.001743774973426594",
            "extra": "mean: 11.894556390243645 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 207.077018964834,
            "unit": "iter/sec",
            "range": "stddev: 0.000789147740603034",
            "extra": "mean: 4.829121092233904 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 846.6040761290186,
            "unit": "iter/sec",
            "range": "stddev: 0.00017500338907700541",
            "extra": "mean: 1.1811896826346069 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 368.1294903358058,
            "unit": "iter/sec",
            "range": "stddev: 0.00032349577269960117",
            "extra": "mean: 2.716435456142906 msec\nrounds: 342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 20.93320386488893,
            "unit": "iter/sec",
            "range": "stddev: 0.04776631110994779",
            "extra": "mean: 47.77099609091806 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09495491612937822,
            "unit": "iter/sec",
            "range": "stddev: 0.16032621577722383",
            "extra": "mean: 10.531313604000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 112.75795013735046,
            "unit": "iter/sec",
            "range": "stddev: 0.0009970139986985305",
            "extra": "mean: 8.868554268518539 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8132449929656673,
            "unit": "iter/sec",
            "range": "stddev: 0.005921381422406016",
            "extra": "mean: 551.497455599997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 78.51467644531596,
            "unit": "iter/sec",
            "range": "stddev: 0.001034181044072644",
            "extra": "mean: 12.736472278485179 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3534.860788850404,
            "unit": "iter/sec",
            "range": "stddev: 0.00015346242000334467",
            "extra": "mean: 282.8965720953375 usec\nrounds: 1713"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 183.21881177593605,
            "unit": "iter/sec",
            "range": "stddev: 0.0007560252609351819",
            "extra": "mean: 5.457954837208152 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 110.6539698378859,
            "unit": "iter/sec",
            "range": "stddev: 0.0008226090603529484",
            "extra": "mean: 9.037181417576383 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 201.69248634269127,
            "unit": "iter/sec",
            "range": "stddev: 0.0007167018942384569",
            "extra": "mean: 4.958042900521947 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 135.82512596825578,
            "unit": "iter/sec",
            "range": "stddev: 0.0009637908230193499",
            "extra": "mean: 7.362408043955829 msec\nrounds: 91"
          }
        ]
      }
    ]
  }
}