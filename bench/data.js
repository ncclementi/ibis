window.BENCHMARK_DATA = {
  "lastUpdate": 1683197356138,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "8647c5367f5d43f9b01d084f61f69382657bca54",
          "message": "chore(deps): update trinodb/trino docker tag to v416",
          "timestamp": "2023-05-04T03:40:28-07:00",
          "tree_id": "1ed571c947b77144500bd77d19016f7a1aff9d10",
          "url": "https://github.com/ibis-project/ibis/commit/8647c5367f5d43f9b01d084f61f69382657bca54"
        },
        "date": 1683197259616,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 646.6791516667474,
            "unit": "iter/sec",
            "range": "stddev: 0.00010175033291107678",
            "extra": "mean: 1.5463618974302873 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.81030364537843,
            "unit": "iter/sec",
            "range": "stddev: 0.0004237192046128474",
            "extra": "mean: 22.316295999996782 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.92571226339057,
            "unit": "iter/sec",
            "range": "stddev: 0.0006718878164825402",
            "extra": "mean: 24.434516705883546 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 248.97261893403413,
            "unit": "iter/sec",
            "range": "stddev: 0.00029098699820125914",
            "extra": "mean: 4.016505928569408 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 88.78153737978745,
            "unit": "iter/sec",
            "range": "stddev: 0.0008909450248845504",
            "extra": "mean: 11.263603103900138 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.222291538952176,
            "unit": "iter/sec",
            "range": "stddev: 0.003168701704315503",
            "extra": "mean: 449.9859638000089 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11937.516571288115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045388865930671865",
            "extra": "mean: 83.76951722146136 usec\nrounds: 5139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.02667646522643,
            "unit": "iter/sec",
            "range": "stddev: 0.0006333020645786552",
            "extra": "mean: 11.23258825000164 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1630819.9725239037,
            "unit": "iter/sec",
            "range": "stddev: 3.1371877972103214e-7",
            "extra": "mean: 613.1884676714938 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4617600.571129248,
            "unit": "iter/sec",
            "range": "stddev: 3.977992889357575e-8",
            "extra": "mean: 216.56268977747828 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 124.62784970131588,
            "unit": "iter/sec",
            "range": "stddev: 0.014766615068835845",
            "extra": "mean: 8.023888740731772 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.02972116366407,
            "unit": "iter/sec",
            "range": "stddev: 0.0008560763277690223",
            "extra": "mean: 38.41762244445169 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1887.7920677994568,
            "unit": "iter/sec",
            "range": "stddev: 0.0001036401358694865",
            "extra": "mean: 529.7193568387382 usec\nrounds: 468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 249.5784226961458,
            "unit": "iter/sec",
            "range": "stddev: 0.000309509670960711",
            "extra": "mean: 4.006756630630163 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.32375005870524,
            "unit": "iter/sec",
            "range": "stddev: 0.0002421820656473514",
            "extra": "mean: 11.451638292305688 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 194.47634892957055,
            "unit": "iter/sec",
            "range": "stddev: 0.004228472226638127",
            "extra": "mean: 5.1420134402160595 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.67008729131698,
            "unit": "iter/sec",
            "range": "stddev: 0.0012645613257784899",
            "extra": "mean: 28.03469449998867 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.2627258886502,
            "unit": "iter/sec",
            "range": "stddev: 0.00019460935411542667",
            "extra": "mean: 5.907975277781192 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 273.31504173748925,
            "unit": "iter/sec",
            "range": "stddev: 0.00007756540419105037",
            "extra": "mean: 3.6587814327484742 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3883.539833669056,
            "unit": "iter/sec",
            "range": "stddev: 0.00002957063288686439",
            "extra": "mean: 257.4970369378776 usec\nrounds: 1868"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6034449.475465111,
            "unit": "iter/sec",
            "range": "stddev: 1.6440386148289374e-8",
            "extra": "mean: 165.71519971553226 nsec\nrounds: 56180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1590433.4409794589,
            "unit": "iter/sec",
            "range": "stddev: 2.8280032623068284e-7",
            "extra": "mean: 628.7594150335244 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.56803937203067,
            "unit": "iter/sec",
            "range": "stddev: 0.0009617714423947242",
            "extra": "mean: 11.16469677142748 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1183685088095245,
            "unit": "iter/sec",
            "range": "stddev: 0.0585296952281496",
            "extra": "mean: 894.1596550000099 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.658028828217127,
            "unit": "iter/sec",
            "range": "stddev: 0.0008121426340194774",
            "extra": "mean: 31.587563629630964 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9332.414490030307,
            "unit": "iter/sec",
            "range": "stddev: 0.000005354667045308902",
            "extra": "mean: 107.15340612745892 usec\nrounds: 4341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.64105937077811,
            "unit": "iter/sec",
            "range": "stddev: 0.0010980421020931423",
            "extra": "mean: 11.814596927708642 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.81900999129826,
            "unit": "iter/sec",
            "range": "stddev: 0.001162688445765654",
            "extra": "mean: 12.373326524386645 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 187.8074183191228,
            "unit": "iter/sec",
            "range": "stddev: 0.010445469067357733",
            "extra": "mean: 5.3246033034797255 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 246.92901365365555,
            "unit": "iter/sec",
            "range": "stddev: 0.0003284980246291582",
            "extra": "mean: 4.049746869367921 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1835.2319609480599,
            "unit": "iter/sec",
            "range": "stddev: 0.0001048995425703811",
            "extra": "mean: 544.8902489053271 usec\nrounds: 1370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1830.9385500446838,
            "unit": "iter/sec",
            "range": "stddev: 0.00010665358340594394",
            "extra": "mean: 546.1679748758336 usec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.29109678330092,
            "unit": "iter/sec",
            "range": "stddev: 0.00031205259171447153",
            "extra": "mean: 61.383221357142965 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.4033723986981,
            "unit": "iter/sec",
            "range": "stddev: 0.0001331522240815965",
            "extra": "mean: 12.754553400009172 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6869558072370022,
            "unit": "iter/sec",
            "range": "stddev: 0.01045013482286604",
            "extra": "mean: 1.4556977165999796 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 69.9297031659068,
            "unit": "iter/sec",
            "range": "stddev: 0.01741404262419763",
            "extra": "mean: 14.300074999997072 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1841.04878795108,
            "unit": "iter/sec",
            "range": "stddev: 0.00011517085678656885",
            "extra": "mean: 543.1686582911847 usec\nrounds: 1393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.79431310225372,
            "unit": "iter/sec",
            "range": "stddev: 0.001063555989833179",
            "extra": "mean: 11.793243714281841 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5066281.097783511,
            "unit": "iter/sec",
            "range": "stddev: 3.3910972261865956e-8",
            "extra": "mean: 197.3834417590519 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 374.4866862020789,
            "unit": "iter/sec",
            "range": "stddev: 0.00018533112316141214",
            "extra": "mean: 2.670321901538535 msec\nrounds: 325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.798095152842555,
            "unit": "iter/sec",
            "range": "stddev: 0.0037284682253748234",
            "extra": "mean: 1.252983427400011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.2514609762444,
            "unit": "iter/sec",
            "range": "stddev: 0.0004414975079881697",
            "extra": "mean: 20.72476106977007 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 112.26320666916779,
            "unit": "iter/sec",
            "range": "stddev: 0.00012996088639550236",
            "extra": "mean: 8.907637948975871 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.60931976298632,
            "unit": "iter/sec",
            "range": "stddev: 0.0009236620857569424",
            "extra": "mean: 11.28549460344371 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 429.55185148861744,
            "unit": "iter/sec",
            "range": "stddev: 0.00014815072690611922",
            "extra": "mean: 2.3280076585271074 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.17606431090067,
            "unit": "iter/sec",
            "range": "stddev: 0.0010631830693535226",
            "extra": "mean: 11.87986167073033 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9125011.992165286,
            "unit": "iter/sec",
            "range": "stddev: 1.1764133067758604e-8",
            "extra": "mean: 109.58889707306508 nsec\nrounds: 86207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.33553623593494,
            "unit": "iter/sec",
            "range": "stddev: 0.0004293716829400318",
            "extra": "mean: 10.600459168419642 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.287504583020529,
            "unit": "iter/sec",
            "range": "stddev: 0.00044763760851239745",
            "extra": "mean: 137.22118300000017 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4294545713357458,
            "unit": "iter/sec",
            "range": "stddev: 0.0027892439061301135",
            "extra": "mean: 699.5675274000178 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 879758.6127242461,
            "unit": "iter/sec",
            "range": "stddev: 3.8771358955950234e-7",
            "extra": "mean: 1.1366754306654827 usec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5119295.137328883,
            "unit": "iter/sec",
            "range": "stddev: 2.967492186966782e-8",
            "extra": "mean: 195.33939207899493 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 580.7551554632059,
            "unit": "iter/sec",
            "range": "stddev: 0.00009236375047236911",
            "extra": "mean: 1.7218960358645592 msec\nrounds: 474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.333123233359032,
            "unit": "iter/sec",
            "range": "stddev: 0.0006017447991272642",
            "extra": "mean: 46.875461649997874 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1434272796529899,
            "unit": "iter/sec",
            "range": "stddev: 0.07152947763468159",
            "extra": "mean: 6.97217434800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.775091987280085,
            "unit": "iter/sec",
            "range": "stddev: 0.0008021462337655356",
            "extra": "mean: 27.192318114279193 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2289388.7970200297,
            "unit": "iter/sec",
            "range": "stddev: 4.664287524462217e-8",
            "extra": "mean: 436.79780441925806 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 137.24766779489985,
            "unit": "iter/sec",
            "range": "stddev: 0.004240583418841847",
            "extra": "mean: 7.286098307290582 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.05510181066113,
            "unit": "iter/sec",
            "range": "stddev: 0.0008947780281276309",
            "extra": "mean: 11.620461529407114 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7357.984771935257,
            "unit": "iter/sec",
            "range": "stddev: 0.00001794596346720422",
            "extra": "mean: 135.90677760223 usec\nrounds: 3804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10651.038938096379,
            "unit": "iter/sec",
            "range": "stddev: 0.000015526687136112475",
            "extra": "mean: 93.88755461434134 usec\nrounds: 5429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3766550.6031743013,
            "unit": "iter/sec",
            "range": "stddev: 3.286857291632843e-8",
            "extra": "mean: 265.494906442037 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 72.05336956802837,
            "unit": "iter/sec",
            "range": "stddev: 0.026290636224869147",
            "extra": "mean: 13.878601458823676 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 997.5225986211827,
            "unit": "iter/sec",
            "range": "stddev: 0.00008457736204244293",
            "extra": "mean: 1.002483554139266 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1886.2791488844623,
            "unit": "iter/sec",
            "range": "stddev: 0.000113838816253098",
            "extra": "mean: 530.1442263152809 usec\nrounds: 1140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 243.85577429811144,
            "unit": "iter/sec",
            "range": "stddev: 0.0003161264524960677",
            "extra": "mean: 4.100784584159608 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 83.5430397837495,
            "unit": "iter/sec",
            "range": "stddev: 0.0010537482391094414",
            "extra": "mean: 11.969878072290546 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1510.5902174542223,
            "unit": "iter/sec",
            "range": "stddev: 0.000013522844799355784",
            "extra": "mean: 661.9929008181232 usec\nrounds: 978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 229.69721722678096,
            "unit": "iter/sec",
            "range": "stddev: 0.0005108632161271397",
            "extra": "mean: 4.353557313725294 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.770926638587616,
            "unit": "iter/sec",
            "range": "stddev: 0.01404291990887265",
            "extra": "mean: 1.2971402853999963 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1862.61561103,
            "unit": "iter/sec",
            "range": "stddev: 0.00011597908640560851",
            "extra": "mean: 536.8794259417884 usec\nrounds: 1141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 107.135944035641,
            "unit": "iter/sec",
            "range": "stddev: 0.00012498747563483316",
            "extra": "mean: 9.333935580642564 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.13034522279044,
            "unit": "iter/sec",
            "range": "stddev: 0.0011360862226366757",
            "extra": "mean: 12.479666688314516 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 240.14323587938557,
            "unit": "iter/sec",
            "range": "stddev: 0.00032861033963569556",
            "extra": "mean: 4.164181415887393 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 75.6575721795199,
            "unit": "iter/sec",
            "range": "stddev: 0.01926596794334858",
            "extra": "mean: 13.217447655169336 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.47694320482455,
            "unit": "iter/sec",
            "range": "stddev: 0.00018786870203762993",
            "extra": "mean: 7.221418792591892 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.77200510017515,
            "unit": "iter/sec",
            "range": "stddev: 0.0009492548127441034",
            "extra": "mean: 11.658815703702814 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.59013288818485,
            "unit": "iter/sec",
            "range": "stddev: 0.0002327057829837999",
            "extra": "mean: 6.729921971013426 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 82.53737750386222,
            "unit": "iter/sec",
            "range": "stddev: 0.0012017176379711136",
            "extra": "mean: 12.11572296385606 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1402594.7731216778,
            "unit": "iter/sec",
            "range": "stddev: 1.712245434017159e-7",
            "extra": "mean: 712.9642995705418 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.71348750031441,
            "unit": "iter/sec",
            "range": "stddev: 0.0008227395092792037",
            "extra": "mean: 20.115265500004917 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1829.1261072713703,
            "unit": "iter/sec",
            "range": "stddev: 0.00014780676312961465",
            "extra": "mean: 546.7091612900144 usec\nrounds: 1054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 232.14452103194688,
            "unit": "iter/sec",
            "range": "stddev: 0.0003597184937132527",
            "extra": "mean: 4.307661432433219 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 88.93056631283291,
            "unit": "iter/sec",
            "range": "stddev: 0.00012676222974266588",
            "extra": "mean: 11.244727673073385 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.03241062376085,
            "unit": "iter/sec",
            "range": "stddev: 0.00011723175840825048",
            "extra": "mean: 7.244675330098598 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 142126.8545981467,
            "unit": "iter/sec",
            "range": "stddev: 5.921761503174076e-7",
            "extra": "mean: 7.035967993715381 usec\nrounds: 33556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 94.59622676924813,
            "unit": "iter/sec",
            "range": "stddev: 0.00011307621889302403",
            "extra": "mean: 10.571246170730834 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1876.4658812350665,
            "unit": "iter/sec",
            "range": "stddev: 0.00009773960767867637",
            "extra": "mean: 532.9166972872496 usec\nrounds: 1143"
          }
        ]
      }
    ]
  }
}